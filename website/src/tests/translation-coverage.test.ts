import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

// Import translation files
import enContent from '../../public/data/i18n/en/content.json';
import taContent from '../../public/data/i18n/ta/content.json';
import enNavigation from '../../public/data/i18n/en/navigation.json';
import taNavigation from '../../public/data/i18n/ta/navigation.json';

describe('Translation Coverage Tests', () => {
  
  describe('Content Translation Coverage', () => {
    it('should have all English content keys translated to Tamil', () => {
      const englishKeys = Object.keys(enContent);
      const tamilKeys = Object.keys(taContent);
      
      const missingKeys = englishKeys.filter(key => !tamilKeys.includes(key));
      
      expect(missingKeys).toEqual([]);
      expect(missingKeys.length).toBe(0);
      
      if (missingKeys.length > 0) {
        console.error('Missing Tamil translations for content keys:', missingKeys);
      }
    });

    it('should have no empty Tamil content translations', () => {
      const emptyTranslations = Object.entries(taContent)
        .filter(([, value]) => !value || value.toString().trim() === '')
        .map(([key]) => key);
      
      expect(emptyTranslations).toEqual([]);
      
      if (emptyTranslations.length > 0) {
        console.error('Empty Tamil translations for content keys:', emptyTranslations);
      }
    });

    it('should not have placeholder text in Tamil translations', () => {
      const placeholderPatterns = [
        /placeholder/i,
        /lorem ipsum/i,
        /sample text/i,
        /test/i,
        /TODO/i,
        /TBD/i
      ];
      
      const placeholderTranslations = Object.entries(taContent)
        .filter(([, value]) => {
          const text = value.toString();
          return placeholderPatterns.some(pattern => pattern.test(text));
        })
        .map(([key]) => key);
      
      expect(placeholderTranslations).toEqual([]);
      
      if (placeholderTranslations.length > 0) {
        console.error('Placeholder text found in Tamil translations:', placeholderTranslations);
      }
    });
  });

  describe('Navigation Translation Coverage', () => {
    it('should have all English navigation keys translated to Tamil', () => {
      const englishKeys = Object.keys(enNavigation);
      const tamilKeys = Object.keys(taNavigation);
      
      const missingKeys = englishKeys.filter(key => !tamilKeys.includes(key));
      
      expect(missingKeys).toEqual([]);
      
      if (missingKeys.length > 0) {
        console.error('Missing Tamil translations for navigation keys:', missingKeys);
      }
    });

    it('should have no empty Tamil navigation translations', () => {
      const emptyTranslations = Object.entries(taNavigation)
        .filter(([, value]) => !value || value.toString().trim() === '')
        .map(([key]) => key);
      
      expect(emptyTranslations).toEqual([]);
      
      if (emptyTranslations.length > 0) {
        console.error('Empty Tamil translations for navigation keys:', emptyTranslations);
      }
    });
  });

  describe('Translation Key Consistency', () => {
    it('should have matching key structures between English and Tamil content', () => {
      const englishKeys = Object.keys(enContent).sort();
      const tamilKeys = Object.keys(taContent).sort();
      
      expect(tamilKeys).toEqual(englishKeys);
    });

    it('should have matching key structures between English and Tamil navigation', () => {
      const englishKeys = Object.keys(enNavigation).sort();
      const tamilKeys = Object.keys(taNavigation).sort();
      
      expect(tamilKeys).toEqual(englishKeys);
    });
  });

  describe('Translation Quality Checks', () => {
    it('should not have English text in Tamil translations', () => {
      const englishPatterns = [
        /professor/i,
        /university/i,
        /student/i,
        /education/i,
        /academic/i,
        /research/i,
        /achievement/i,
        /contact/i,
        /about/i,
        /gallery/i,
        /timeline/i
      ];
      
      const englishInTamil = Object.entries(taContent)
        .filter(([, value]) => {
          const text = value.toString();
          return englishPatterns.some(pattern => pattern.test(text));
        })
        .map(([key, value]) => ({ key, value }));
      
      expect(englishInTamil).toEqual([]);
      
      if (englishInTamil.length > 0) {
        console.error('English text found in Tamil translations:', englishInTamil);
      }
    });

    it('should have reasonable Tamil text length (not too short)', () => {
      const tooShortTranslations = Object.entries(taContent)
        .filter(([, value]) => {
          const text = value.toString().trim();
          // Tamil text should generally be at least 2 characters for meaningful content
          return text.length > 0 && text.length < 2;
        })
        .map(([key, value]) => ({ key, value }));
      
      expect(tooShortTranslations).toEqual([]);
      
      if (tooShortTranslations.length > 0) {
        console.error('Suspiciously short Tamil translations:', tooShortTranslations);
      }
    });
  });
});

// Helper function to generate missing translation report
export function generateTranslationReport() {
  const report = {
    missingContentKeys: [] as string[],
    missingNavigationKeys: [] as string[],
    emptyTranslations: [] as string[],
    suspiciousTranslations: [] as { key: string; value: string }[]
  };

  // Check missing content keys
  const englishContentKeys = Object.keys(enContent);
  const tamilContentKeys = Object.keys(taContent);
  report.missingContentKeys = englishContentKeys.filter(key => !tamilContentKeys.includes(key));

  // Check missing navigation keys
  const englishNavKeys = Object.keys(enNavigation);
  const tamilNavKeys = Object.keys(taNavigation);
  report.missingNavigationKeys = englishNavKeys.filter(key => !tamilNavKeys.includes(key));

  // Check empty translations
  report.emptyTranslations = Object.entries(taContent)
    .filter(([, value]) => !value || value.toString().trim() === '')
    .map(([key]) => key);

  // Check suspicious translations (English words in Tamil)
  const englishPatterns = [/professor/i, /university/i, /student/i, /education/i];
  report.suspiciousTranslations = Object.entries(taContent)
    .filter(([, value]) => {
      const text = value.toString();
      return englishPatterns.some(pattern => pattern.test(text));
    })
    .map(([key, value]) => ({ key, value }));

  return report;
}

describe('UI Element Translation Coverage', () => {

  // Function to scan source files for hardcoded English text
  const scanSourceFiles = (dir: string): string[] => {
    const hardcodedTexts: string[] = [];

    const scanFile = (filePath: string) => {
      if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

      try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Patterns for hardcoded English text in UI components
        const patterns = [
          // Button text patterns
          />([A-Z][a-zA-Z\s]{2,})</,
          // String literals in JSX
          /"([A-Z][a-zA-Z\s]{3,})"/g,
          // Common UI text patterns
          /placeholder="([^"]+)"/g,
          /aria-label="([^"]+)"/g,
          /title="([^"]+)"/g,
          // Typography content
          /<Typography[^>]*>([A-Z][a-zA-Z\s]{3,})</g
        ];

        patterns.forEach(pattern => {
          const matches = content.match(pattern);
          if (matches) {
            matches.forEach(match => {
              // Extract the text content
              const textMatch = match.match(/[">]([A-Z][a-zA-Z\s]{3,})[<"]/);
              if (textMatch && textMatch[1]) {
                const text = textMatch[1].trim();
                // Skip common technical terms and variables
                if (!text.match(/^(Button|Typography|Box|Container|Grid|Card|Paper|Dialog|Modal|Drawer|Menu|List|Table|Form|Input|Select|Checkbox|Radio|Switch|Slider|Progress|Alert|Snackbar|Tooltip|Popover|Backdrop|Fade|Grow|Slide|Zoom|Collapse|Accordion|Tabs|Tab|AppBar|Toolbar|IconButton|Fab|Chip|Avatar|Badge|Divider|Link|Breadcrumbs|Pagination|Rating|Skeleton|SpeedDial|ToggleButton|TreeView|DataGrid|DatePicker|TimePicker|Autocomplete|Transfer|Upload|Calendar|Chart|Map|Video|Audio|Image|Icon|Logo|Brand|Theme|Style|Class|Function|Component|Props|State|Effect|Hook|Context|Provider|Consumer|Ref|Key|Index|Id|Name|Type|Value|Data|Item|List|Array|Object|String|Number|Boolean|Null|Undefined|True|False|Console|Log|Error|Warning|Info|Debug|Test|Mock|Spy|Stub|Fake|Async|Await|Promise|Callback|Event|Handler|Listener|Observer|Subject|Stream|Buffer|Cache|Store|Database|API|HTTP|URL|URI|JSON|XML|HTML|CSS|JS|TS|JSX|TSX|React|Vue|Angular|Node|Express|Next|Gatsby|Webpack|Vite|Babel|ESLint|Prettier|Jest|Vitest|Cypress|Playwright|Storybook|Figma|Sketch|Adobe|Google|Microsoft|Apple|Amazon|Facebook|Twitter|Instagram|LinkedIn|GitHub|GitLab|Bitbucket|Slack|Discord|Zoom|Teams|Skype|WhatsApp|Telegram|Signal|Email|SMS|Phone|Address|Location|GPS|Map|Navigation|Search|Filter|Sort|Pagination|Loading|Spinner|Progress|Success|Error|Warning|Info|Confirm|Cancel|Save|Delete|Edit|Create|Update|Read|Write|Copy|Paste|Cut|Undo|Redo|Refresh|Reload|Reset|Clear|Submit|Send|Receive|Upload|Download|Import|Export|Print|Share|Like|Comment|Follow|Subscribe|Unsubscribe|Login|Logout|Register|Signup|Signin|Profile|Settings|Preferences|Account|User|Admin|Guest|Public|Private|Secure|Safe|Lock|Unlock|Open|Close|Show|Hide|Expand|Collapse|Minimize|Maximize|Fullscreen|Windowed|Mobile|Desktop|Tablet|Phone|Computer|Device|Browser|Chrome|Firefox|Safari|Edge|Opera|Internet|Explorer|Windows|Mac|Linux|iOS|Android|Version|Update|Upgrade|Downgrade|Install|Uninstall|Configure|Setup|Initialize|Start|Stop|Pause|Resume|Play|Record|Capture|Screenshot|Video|Audio|Image|Photo|Picture|Gallery|Album|Folder|Directory|File|Document|Text|Word|Excel|PowerPoint|PDF|ZIP|RAR|TAR|GZ|MP3|MP4|AVI|MOV|JPG|PNG|GIF|SVG|WebP|TIFF|BMP|ICO|WOFF|TTF|OTF|EOT)$/)) {
                  hardcodedTexts.push(`${filePath}: "${text}"`);
                }
              }
            });
          }
        });
      } catch {
        // Skip files that can't be read
      }
    };

    const scanDirectory = (dirPath: string) => {
      try {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const fullPath = path.join(dirPath, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile()) {
            scanFile(fullPath);
          }
        });
      } catch {
        // Skip directories that can't be read
      }
    };

    scanDirectory(dir);
    return hardcodedTexts;
  };

  it('should not have hardcoded English text in UI components', () => {
    const srcDir = path.join(process.cwd(), 'src');
    const hardcodedTexts = scanSourceFiles(srcDir);

    // Filter out acceptable hardcoded text (technical terms, etc.)
    const problematicTexts = hardcodedTexts.filter(text => {
      const content = text.split(': ')[1];
      return !content.match(/^"(OK|Cancel|Yes|No|Loading|Error|Success|Warning|Info|Debug|Test|Mock|API|URL|HTTP|JSON|XML|HTML|CSS|JS|TS|JSX|TSX|React|Component|Props|State|Function|Class|Object|Array|String|Number|Boolean|Null|Undefined|True|False|Console|Log)"/);
    });

    expect(problematicTexts).toEqual([]);

    if (problematicTexts.length > 0) {
      console.error('Hardcoded English text found in UI components:');
      problematicTexts.forEach(text => console.error('  -', text));
    }
  });

  it('should have translation keys for all UI button texts', () => {
    const requiredButtonKeys = [
      'exploreHisLegacy',
      'aboutHisLife',
      'communityImpact',
      'achievements',
      'lifeTimeline'
    ];

    const missingEnglishKeys = requiredButtonKeys.filter(key => !(key in enContent));
    const missingTamilKeys = requiredButtonKeys.filter(key => !(key in taContent));

    expect(missingEnglishKeys).toEqual([]);
    expect(missingTamilKeys).toEqual([]);

    if (missingEnglishKeys.length > 0) {
      console.error('Missing English button translation keys:', missingEnglishKeys);
    }
    if (missingTamilKeys.length > 0) {
      console.error('Missing Tamil button translation keys:', missingTamilKeys);
    }
  });

  it('should have translation keys for all UI labels and messages', () => {
    const requiredUIKeys = [
      'welcomeTitle',
      'welcomeSubtitle',
      'heroDescription',
      'memorialTitle',
      'memorialSubtitle',
      'memorialDescription',
      'ceremonyDate',
      'ceremonyLocation',
      'ceremonyPurpose',
      'exploreJourneyTitle',
      'exploreJourneyDescription'
    ];

    const missingEnglishKeys = requiredUIKeys.filter(key => !(key in enContent));
    const missingTamilKeys = requiredUIKeys.filter(key => !(key in taContent));

    expect(missingEnglishKeys).toEqual([]);
    expect(missingTamilKeys).toEqual([]);

    if (missingEnglishKeys.length > 0) {
      console.error('Missing English UI translation keys:', missingEnglishKeys);
    }
    if (missingTamilKeys.length > 0) {
      console.error('Missing Tamil UI translation keys:', missingTamilKeys);
    }
  });

  it('should have proper Tamil translations for all button texts', () => {
    const buttonTranslations = {
      'exploreHisLegacy': taContent.exploreHisLegacy,
      'aboutHisLife': taContent.aboutHisLife,
      'communityImpact': taContent.communityImpact,
      'achievements': taContent.achievements,
      'lifeTimeline': taContent.lifeTimeline
    };

    const emptyTranslations = Object.entries(buttonTranslations)
      .filter(([, value]) => !value || value.toString().trim() === '')
      .map(([key]) => key);

    expect(emptyTranslations).toEqual([]);

    if (emptyTranslations.length > 0) {
      console.error('Empty Tamil button translations:', emptyTranslations);
    }
  });
});
