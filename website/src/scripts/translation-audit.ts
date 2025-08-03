#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Translation file paths
const TRANSLATION_DIR = path.join(process.cwd(), 'public/data/i18n');
const EN_CONTENT = path.join(TRANSLATION_DIR, 'en/content.json');
const TA_CONTENT = path.join(TRANSLATION_DIR, 'ta/content.json');
const EN_NAVIGATION = path.join(TRANSLATION_DIR, 'en/navigation.json');
const TA_NAVIGATION = path.join(TRANSLATION_DIR, 'ta/navigation.json');

interface TranslationAuditReport {
  missingKeys: string[];
  emptyTranslations: string[];
  suspiciousTranslations: Array<{key: string, value: string}>;
  extraKeys: string[];
  totalKeys: number;
  translatedKeys: number;
  completionPercentage: number;
}

class TranslationAuditor {
  
  private loadJsonFile(filePath: string): Record<string, any> {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
      return {};
    }
  }

  private saveJsonFile(filePath: string, data: Record<string, any>): void {
    try {
      const content = JSON.stringify(data, null, 2);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Saved ${filePath}`);
    } catch (error) {
      console.error(`Error saving ${filePath}:`, error);
    }
  }

  public auditTranslations(englishFile: string, tamilFile: string): TranslationAuditReport {
    const englishData = this.loadJsonFile(englishFile);
    const tamilData = this.loadJsonFile(tamilFile);

    const englishKeys = Object.keys(englishData);
    const tamilKeys = Object.keys(tamilData);

    // Find missing keys
    const missingKeys = englishKeys.filter(key => !tamilKeys.includes(key));
    
    // Find extra keys (in Tamil but not in English)
    const extraKeys = tamilKeys.filter(key => !englishKeys.includes(key));

    // Find empty translations
    const emptyTranslations = tamilKeys.filter(key => {
      const value = tamilData[key];
      return !value || value.toString().trim() === '';
    });

    // Find suspicious translations (English words in Tamil)
    const englishPatterns = [
      /professor/i, /university/i, /student/i, /education/i, /academic/i,
      /research/i, /achievement/i, /contact/i, /about/i, /gallery/i,
      /timeline/i, /home/i, /page/i, /website/i, /click/i, /button/i
    ];

    const suspiciousTranslations = tamilKeys
      .filter(key => {
        const value = tamilData[key]?.toString() || '';
        return englishPatterns.some(pattern => pattern.test(value));
      })
      .map(key => ({ key, value: tamilData[key] }));

    const totalKeys = englishKeys.length;
    const translatedKeys = totalKeys - missingKeys.length - emptyTranslations.length;
    const completionPercentage = Math.round((translatedKeys / totalKeys) * 100);

    return {
      missingKeys,
      emptyTranslations,
      suspiciousTranslations,
      extraKeys,
      totalKeys,
      translatedKeys,
      completionPercentage
    };
  }

  public generateMissingTranslationsTemplate(englishFile: string, tamilFile: string): Record<string, string> {
    const englishData = this.loadJsonFile(englishFile);
    const tamilData = this.loadJsonFile(tamilFile);
    const englishKeys = Object.keys(englishData);
    const tamilKeys = Object.keys(tamilData);

    const missingKeys = englishKeys.filter(key => !tamilKeys.includes(key));
    const emptyKeys = tamilKeys.filter(key => {
      const value = tamilData[key];
      return !value || value.toString().trim() === '';
    });

    const allMissingKeys = [...new Set([...missingKeys, ...emptyKeys])];
    
    const template: Record<string, string> = {};
    allMissingKeys.forEach(key => {
      template[key] = `[TRANSLATE: ${englishData[key]}]`;
    });

    return template;
  }

  public fixTranslationStructure(englishFile: string, tamilFile: string): void {
    const englishData = this.loadJsonFile(englishFile);
    const tamilData = this.loadJsonFile(tamilFile);

    // Create a new Tamil structure matching English keys
    const fixedTamilData: Record<string, any> = {};
    
    Object.keys(englishData).forEach(key => {
      if (tamilData[key] && tamilData[key].toString().trim() !== '') {
        fixedTamilData[key] = tamilData[key];
      } else {
        fixedTamilData[key] = `[NEEDS_TRANSLATION: ${englishData[key]}]`;
      }
    });

    this.saveJsonFile(tamilFile, fixedTamilData);
  }

  public generateFullReport(): void {
    console.log('\n🔍 TRANSLATION AUDIT REPORT\n');
    console.log('=' .repeat(50));

    // Audit content translations
    console.log('\n📄 CONTENT TRANSLATIONS:');
    const contentReport = this.auditTranslations(EN_CONTENT, TA_CONTENT);
    this.printReport('Content', contentReport);

    // Audit navigation translations
    console.log('\n🧭 NAVIGATION TRANSLATIONS:');
    const navigationReport = this.auditTranslations(EN_NAVIGATION, TA_NAVIGATION);
    this.printReport('Navigation', navigationReport);

    // Generate missing translation templates
    console.log('\n📝 MISSING TRANSLATION TEMPLATES:\n');
    
    const missingContent = this.generateMissingTranslationsTemplate(EN_CONTENT, TA_CONTENT);
    if (Object.keys(missingContent).length > 0) {
      console.log('Content missing translations:');
      console.log(JSON.stringify(missingContent, null, 2));
    }

    const missingNavigation = this.generateMissingTranslationsTemplate(EN_NAVIGATION, TA_NAVIGATION);
    if (Object.keys(missingNavigation).length > 0) {
      console.log('\nNavigation missing translations:');
      console.log(JSON.stringify(missingNavigation, null, 2));
    }

    // Overall summary
    const totalContentKeys = contentReport.totalKeys;
    const totalNavKeys = navigationReport.totalKeys;
    const totalKeys = totalContentKeys + totalNavKeys;
    const totalTranslated = contentReport.translatedKeys + navigationReport.translatedKeys;
    const overallCompletion = Math.round((totalTranslated / totalKeys) * 100);

    console.log('\n📊 OVERALL SUMMARY:');
    console.log(`Total Translation Keys: ${totalKeys}`);
    console.log(`Translated Keys: ${totalTranslated}`);
    console.log(`Overall Completion: ${overallCompletion}%`);
    
    if (overallCompletion < 100) {
      console.log('\n⚠️  ACTION REQUIRED: Translation is incomplete!');
    } else {
      console.log('\n✅ All translations complete!');
    }
  }

  private printReport(section: string, report: TranslationAuditReport): void {
    console.log(`${section} Completion: ${report.completionPercentage}% (${report.translatedKeys}/${report.totalKeys})`);
    
    if (report.missingKeys.length > 0) {
      console.log(`❌ Missing keys (${report.missingKeys.length}):`, report.missingKeys);
    }
    
    if (report.emptyTranslations.length > 0) {
      console.log(`⚠️  Empty translations (${report.emptyTranslations.length}):`, report.emptyTranslations);
    }
    
    if (report.suspiciousTranslations.length > 0) {
      console.log(`🤔 Suspicious translations (${report.suspiciousTranslations.length}):`);
      report.suspiciousTranslations.forEach(item => {
        console.log(`   ${item.key}: "${item.value}"`);
      });
    }
    
    if (report.extraKeys.length > 0) {
      console.log(`ℹ️  Extra keys (${report.extraKeys.length}):`, report.extraKeys);
    }
  }
}

// Run the audit
const auditor = new TranslationAuditor();
auditor.generateFullReport();

export default TranslationAuditor;
