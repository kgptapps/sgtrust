// Publications data for the achievements page
// This file contains all publications with their details and links

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  type: 'journal' | 'conference' | 'book' | 'chapter' | 'patent' | 'other';
  category?: 'research' | 'review' | 'technical' | 'editorial';
  keywords?: string[];
  abstract?: string;
}

export const publications: Publication[] = [
  {
    id: 'pub-1984-001',
    title: 'Studies on lipid variations during P.Patulum toxicosis in rats',
    authors: ['Govindasamy, S.', 'E.R.B. Shanmugasundaram'],
    journal: 'Journal of Madras University, Sec.B',
    year: 1984,
    volume: '47',
    pages: '1-6',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1984-002',
    title: 'Uptake of 14C-Glycine by rat intestine in patulin toxicosis',
    authors: ['Govindasamy, S.', 'E.R.B. Shanmugasundaram'],
    journal: 'Journal of Madras University, Sec.B',
    year: 1984,
    volume: '47',
    pages: '71-74',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1985-001',
    title: 'Toxic nature of Aspergillus ochraceus: A common food contaminant',
    authors: ['Subramanian. S.', 'Govindasamy, S.', 'E.R.B. Shanmugasundaram'],
    journal: 'Arogya: Journal of Health Science',
    year: 1985,
    volume: 'XI',
    pages: '164-167',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1985-002',
    title: 'A. ochraceus toxicity on carbohydrate metabolism on chicks',
    authors: ['Subramanian. S.', 'Govindasamy, S'],
    journal: 'Current Sci.',
    year: 1985,
    volume: '54/17',
    pages: '860',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1985-003',
    title: 'Successful induction of Adjuvant Arthritis in rats',
    authors: ['Subramanian. S.', 'Kanthasamy, A.', 'Govindasamy, S.'],
    journal: 'Journal of Madras University, Sec. B',
    year: 1985,
    volume: '48(2)',
    pages: '54-58',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1986-001',
    title: 'Novel inhibition of LDH-isoenzymes by Cleistanthus collinus toxins',
    authors: ['Kanthasamy,A.', 'Govindasamy, S.', 'Damodaran, C.'],
    journal: 'Current Sci.',
    year: 1986,
    volume: '55/17',
    pages: '854-856',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1986-002',
    title: 'Effect of Cleistanthus collinus toxins on muscle function',
    authors: ['Kanthasamy, A.', 'Subramanian. S.', 'Govindasamy, S.', 'Damodaran, C.'],
    journal: 'Journal of Forensic Science Society of India',
    year: 1986,
    volume: 'Vol.2',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1986-003',
    title: 'Studies on the toxic nature of ochratoxin A in chicks',
    authors: ['Subramanian. S.', 'Kanthasamy, A.', 'Govindasamy, S'],
    journal: 'Indian J. Poultry Sci.',
    year: 1986,
    volume: '21',
    pages: '354-356',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1986-004',
    title: 'Hypoglycemic and hypolipidemic effects of vanadate on chronic experimental diabetes',
    authors: ['Kanthasamy, A.', 'Rathinavelu, A.', 'Govindasamy, S.'],
    journal: 'Contemporary themes in Biochemistry',
    year: 1986,
    volume: '55',
    pages: '318-319',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1986-005',
    title: 'Effects of codeine on rat intestine',
    authors: ['Sekar, N.', 'William, S.', 'Govindasamy, S.'],
    journal: 'Current Sei.',
    year: 1986,
    volume: '55',
    pages: '1024-1026',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1986-006',
    title: 'Cellular constituent changes in different tissues of rats after repeated codeine treatment',
    authors: ['William, S.', 'Sekar, N.', 'Govindasamy, S'],
    journal: 'Journal of Madras University, Sec. B',
    year: 1986,
    volume: '49',
    pages: '81-84',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1988-001',
    title: 'Vanadate substitutes insulin role in chronic experimental diabetes',
    authors: ['Kanthasamy A', 'Sekar N', 'Govindasamy S'],
    journal: 'Indian J Exp Biol',
    year: 1988,
    volume: '26',
    pages: '778-80',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1989-001',
    title: 'Ochratoxin A toxicity on carbohydrate metabolism in rats',
    authors: ['Subramanian S', 'Kanthasamy A', 'Balasubramanian N', 'Sekar N', 'Govindasamy S'],
    journal: 'Bull Environ Contam Toxicol',
    year: 1989,
    volume: '43',
    pages: '180-4',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1989-002',
    title: 'Diabetogenic nature of ochratoxin A',
    authors: ['S.Subramanian', 'Balasubramaniyan.N', 'S. Govindasamy'],
    journal: 'Curr. Sci.',
    year: 1989,
    volume: '58',
    pages: '878-880',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1990-001',
    title: 'Optimization of sodium orthovanadate of treat streptozotocin induced diabetic rats',
    authors: ['N. Sekar', 'S.William', 'Balasubramaniyan.N', 'P. Kamarajan', 'S. Govindasamy'],
    journal: 'J. Biosci.',
    year: 1990,
    volume: '15',
    pages: '67-75',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1990-002',
    title: 'Insulinic actions of vanadate in diabetic rats',
    authors: ['Sekar N', 'Kanthasamy A', 'William S', 'Subramanian S', 'Govindasamy S'],
    journal: 'Pharmacol Res',
    year: 1990,
    volume: '22',
    pages: '207-17',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1990-003',
    title: 'Antioxidant effect of vanadate on experimental diabetic rats',
    authors: ['Sekar N', 'Kanthasamy A', 'William S', 'Balasubramaniyan N', 'Govindasamy S'],
    journal: 'Acta Diabetol Lat',
    year: 1990,
    volume: '27',
    pages: '285-93',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1991-001',
    title: 'Insulin mimetic role of vanadate on plasma membrane insulin-receptors',
    authors: ['Sekar N', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1991,
    volume: '23',
    pages: '461-6',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1991-002',
    title: 'In vivo absorption of 14C-glucose and 14C-glycine by the rat intestine during ochratoxin A toxicosis',
    authors: ['Subramanian S', 'Balasubramanian N', 'William S', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1991,
    volume: '23',
    pages: '655-61',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1991-003',
    title: 'Effects of vanadate on plasma lipoprotein profiles in experimental diabetic rats',
    authors: ['Sekar N', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1991,
    volume: '23',
    pages: '935-40',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1991-004',
    title: 'Toxic effect of morphine and the antagonistic role of naloxone on isolated rat hepatocytes',
    authors: ['William S', 'Sekar N', 'Subramanian S', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1991,
    volume: '23',
    pages: '1071-7',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1991-005',
    title: 'Biochemical studies on the antidiarrhoeal effects of Cauvery-100, an ayurvedic formulation, in rats',
    authors: ['Manonmani S', 'William S', 'Subramanian S', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1991,
    volume: '24',
    pages: '701-8',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1991-006',
    title: 'Antitumor effect of echitamine chloride on methylcholonthrene induced fibrosarcoma in rats',
    authors: ['Kamarajan P', 'Sekar N', 'Mathuram V', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1991,
    volume: '25',
    pages: '491-8',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1992-001',
    title: 'Studies on variations of glycoproteins and lysosomal hydrolases in human uterine cervical carcinoma',
    authors: ['Bhuvarahamurthy V', 'Balasubramanian N', 'Subramanian S', 'Govindasamy S'],
    journal: 'Biochem Int',
    year: 1992,
    volume: '28',
    pages: '105-11',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1993-001',
    title: 'Insulin-like effects of bis-glycinato oxovanadium (IV) complex on experimental diabetic rats',
    authors: ['Nandhini D', 'Maneemegalai S', 'Elangovan V', 'Sekar N', 'Govindasamy S'],
    journal: 'Indian J Biochem Biophys',
    year: 1993,
    volume: '30',
    pages: '73-6',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1993-002',
    title: 'Insulin – like effects of Bis-alaninato oxovanadium (IV) complex in experimental diabetic rats',
    authors: ['Maneemegalai, S', 'D.Nandhini', 'V.Elangovan', 'N.Sekar', 'S.Govindasamy'],
    journal: 'Biomedicine',
    year: 1993,
    volume: '13',
    pages: '39-42',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-001',
    title: 'Insulin – like effects of sodium orthovanadate on ureacycle enzymes in streptozotocin diabetic rats',
    authors: ['Maneemegalai, S', 'N. Sekar', 'S. Govindasamy'],
    journal: 'J.Clin. Biochem. Nutr.',
    year: 1994,
    volume: '16',
    pages: '187–192',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-002',
    title: 'Regulatory role of sodium orthovanadate on the activities of lysosomal enzymes in streptozotocin diabetic rats',
    authors: ['Maneemegalai, S', 'N. Sekar', 'S. Govindasamy'],
    journal: 'Med. Sci. Res.',
    year: 1994,
    volume: '22',
    pages: '757–759',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-003',
    title: 'Status of antioxidants in human carcinoma of uterine cervix during radiotherapy',
    authors: ['Balasubramaniyan.N', 'S. Subramanian', 'V. Bhuvarahamurthy', '.N. Sekar', 'S.Govindasamy'],
    journal: 'J. Clin. Biochem. Nutr.',
    year: 1994,
    volume: '17',
    pages: '95-102',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-004',
    title: 'Involvement of plasma copper, zinc and cadmium in human carcinoma of uterine cervix',
    authors: ['Balasubramaniyan.N', 'S. Subramanian', 'V. Bhuvarahamurthy', 'N. Sekar', 'S.Govindasamy'],
    journal: 'Med. Sci. Res.',
    year: 1994,
    volume: '22',
    pages: '475-476',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-005',
    title: 'Involvement of plasma copper, zinc and cadmium in human carcinoma of uterine cervix',
    authors: ['Balasubramaniyan N', 'Subramanian S', 'Sekar N', 'Bhuvarahamurthy V', 'Govindasamy S'],
    journal: 'Med Oncol',
    year: 1994,
    volume: '11',
    pages: '147-8',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-006',
    title: 'Biochemical evaluation of the antiulcerogenic effect of Cauvery-100 (an ayurvedic formulation) in rats',
    authors: ['Manonmani S', 'William S', 'Subramanian S', 'Govindasamy S'],
    journal: 'J Ethnopharmacol',
    year: 1994,
    volume: '42',
    pages: '1-5',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-007',
    title: 'Diagnostic and prognostic role of plasma and urinary sialic acid in human carcinoma of uterine cervix',
    authors: ['Balasubramaniyan N', 'Subramanian S', 'Sekar N', 'Bhuvarahamurthy V', 'Govindasamy S'],
    journal: 'Biochem Mol Biol Int',
    year: 1994,
    volume: '33',
    pages: '617-23',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-008',
    title: 'Chemopreventive potential of dietary bioflavonoids against 20-methylcholanthrene-induced tumorigenesis',
    authors: ['Elangovan V', 'Sekar N', 'Govindasamy S'],
    journal: 'Cancer Lett',
    year: 1994,
    volume: '87',
    pages: '107-13',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-009',
    title: 'Status of antioxidant systems in human carcinoma of uterine cervix',
    authors: ['Balasubramaniyan N', 'Subramanian S', 'Govindasamy S'],
    journal: 'Cancer Lett',
    year: 1994,
    volume: '87',
    pages: '187-92',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-010',
    title: 'Studies on the chemopreventive potential of some naturally occurring bioflavonoids in 7,12-dimethylbenz(a)anthracene-induced carcinogenesis in mouse skin',
    authors: ['Elangovan V', 'Balasubramanian S', 'Sekar N', 'Govindasamy S'],
    journal: 'J Clin Biochem Nutr',
    year: 1994,
    volume: '17',
    pages: '153-60',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1994-011',
    title: 'Studies on the antiproliferative effect of some naturally occurring bioflavonoidal compounds against human carcinoma of larynx and Sarcoma-180 cell lines',
    authors: ['Elangovan V', 'Nalini R', 'Balasubramanian S', 'Sekar N', 'Govindasamy S'],
    journal: 'Indian J Pharmacol',
    year: 1994,
    volume: '26',
    pages: '266-69',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-001',
    title: 'Effect of radiation on serum glycoproteins and glycosidases in patients with cervical carcinoma',
    authors: ['Bhuvarahamurthy V', 'Balasubramanian N', 'Vijayakumar S', 'Govindasamy S'],
    journal: 'Int J Gynaecol Obstet',
    year: 1995,
    volume: '48',
    pages: '49-54',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-002',
    title: 'Role of serum enzymes in assessing the efficacy of radiation therapy to human carcinoma of uterine cervix',
    authors: ['Balasubramaniyan.N', 'S.Subramanian', 'S. Govindasamy'],
    journal: 'J.Clin.Biochem.Nutr.',
    year: 1995,
    volume: '19',
    pages: '97-105',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-003',
    title: 'Extracellular matrix components and proteolytic enzymes in uterine cervical carcinoma',
    authors: ['Bhuvarahamurthy V', 'Govindasamy S'],
    journal: 'Mol. Cell. Biochem.',
    year: 1995,
    volume: '144',
    pages: '35-43',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-004',
    title: 'Status of erythrocyte defense system in human carcinoma of uterine cervix during radiotherapy',
    authors: ['Balasubramaniyan N', 'S.Subramanian', 'S.Govindasamy'],
    journal: 'Med.Sci.Res',
    year: 1995,
    volume: '20',
    pages: '76-80',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-005',
    title: 'Fluorescence spectroscopic identification of 7,12-dimethylbenz[a]anthracene-induced hamster buccal pouch carcinogenesis',
    authors: ['Balasubramanian S', 'Elangovan V', 'Govindasamy S'],
    journal: 'Carcinogenesis',
    year: 1995,
    volume: '16',
    pages: '2461-5',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-006',
    title: 'In vitro evaluation of the anti-cancer effects of echitamine chloride on fobrosarcoma cells',
    authors: ['Kamarajan P', 'Ramamurthy N', 'Govindasamy S'],
    journal: 'J Clin Biochem Nutr',
    year: 1995,
    volume: '18',
    pages: '65-71',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-007',
    title: 'Anti-cancer effect of echitamine chloride on plasma vitamines and minerals in rats with methylchlonthrene-induced fibrosarcoma',
    authors: ['Kamarajan P', 'Sekar N', 'Govindasamy S'],
    journal: 'Med Sci Res',
    year: 1995,
    volume: '23',
    pages: '237-239',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1995-008',
    title: 'Studies on the antioxidant status during 7,12-dimethylbenz(a)anthracene-induced hamster buccal pouch carcinogenesis',
    authors: ['Balasubramanian S', 'Nagarajan B', 'Govindasamy S'],
    journal: 'Med Sci Res',
    year: 1995,
    volume: '23',
    pages: '737-40',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1996-001',
    title: 'Studies on trace elements in progressive pathology of DMBA-induced hamster buccal pouch carcinogenesis',
    authors: ['Balasubramanian S', 'Elangovan V', 'Govindasamy S'],
    journal: 'J Clin Biochem Nutr',
    year: 1996,
    volume: '20',
    pages: '49-53',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1996-002',
    title: 'Purification and characterization of hexosaminidase from human uterine cervical carcinoma',
    authors: ['Bhuvarahamurthy V', 'Govindasamy S'],
    journal: 'Gynecol Oncol',
    year: 1996,
    volume: '60',
    pages: '188-96',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1996-003',
    title: 'Studies of the activities of lysosomal enzymes in serum and buccal pouch tissue of hamsters during 7,12-dimethylbenz[a]anthracene-induced carcinogenesis',
    authors: ['Balasubramanian S', 'Nagarajan B', 'Govindasamy S'],
    journal: 'Cancer Lett',
    year: 1996,
    volume: '101',
    pages: '9-14',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1996-004',
    title: 'Inhibitory effect of dietary flavonol quercetin on 7,12-dimethylbenz[a]anthracene-induced hamster buccal pouch carcinogenesis',
    authors: ['Balasubramanian S', 'Govindasamy S'],
    journal: 'Carcinogenesis',
    year: 1996,
    volume: '17',
    pages: '877-9',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1996-005',
    title: 'Effect of radiotherapy and chemoradiotherapy on circulating antioxidant system of human uterine cervical carcinoma',
    authors: ['Bhuvarahamurthy V', 'Balasubramanian N', 'Govindasamy S'],
    journal: 'Mol Cell Biochem',
    year: 1996,
    volume: '158',
    pages: '17-23',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1996-006',
    title: 'Effect of vanadate on tissue defense system in streptozotocin induced diabetic rats',
    authors: ['Maneemegalai, S', 'N. Sekar', 'S. Govindasamy'],
    journal: 'J.Clin. Biochm. Nutr.',
    year: 1996,
    volume: '20',
    pages: '157–164',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1997-001',
    title: 'Chemo preventive effect of quercetin in sarcoma-180 induced mice',
    authors: ['Ravichandran, P.', 'Elangovan, V.', 'Govindasamy, S.'],
    journal: 'J. Clin. Biochem. Nutr.',
    year: 1997,
    volume: '22',
    pages: '149-154',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1997-002',
    title: 'In vitro cytotoxicity of echitamine chloride and adriamycin on Ehrlich ascites carcinoma cell culture',
    authors: ['Saraswathi V', 'Subramanian S', 'Ramamurthy N', 'Mathuram V', 'Govindasamy S'],
    journal: 'Med Sci Res',
    year: 1997,
    volume: '25',
    pages: '167-70',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1997-003',
    title: 'Enhancement of the cytotoxic effect of echitamine chloride by vitamin A: an in vitro study on Ehrlich ascites carcinoma cell culture',
    authors: ['Saraswathi V', 'Ramamurthy N', 'Subramanian S', 'Mathuram V', 'Govindasamy S'],
    journal: 'Indian J Pharmacol',
    year: 1997,
    volume: '29',
    pages: '244-9',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1998-001',
    title: 'Biochemical studies on lipid peroxidation in ammonium para-tungstate treated diabetic rats',
    authors: ['Palnivel, R.', 'Ravichandran, P.', 'Govindasamy, S.'],
    journal: 'Med. Sic. Res.',
    year: 1998,
    volume: '26',
    pages: '759-762',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1998-002',
    title: 'Insulin like effect of ammonium para - tungstate on glycoprotein metabolism in STZ diabetic rats',
    authors: ['Palnivel, R.', 'Ravichandran, P.', 'Govindasamy, S.'],
    journal: 'Med. Sci. Res.',
    year: 1998,
    volume: '26',
    pages: '541-544',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1998-003',
    title: 'Inhibition of glycolysis and respiration of sarcoma-180 cells by echitamine chloride',
    authors: ['Saraswathi V', 'Ramamoorthy N', 'Subramaniam S', 'Mathuram V', 'Gunasekaran P', 'Govindasamy S'],
    journal: 'Chemotherapy',
    year: 1998,
    volume: '44',
    pages: '198-205',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1998-004',
    title: 'Studies on the effects of echitamine chloride on serum glycoproteins and lysosomal hydrolases in sarcoma-180 induced mice',
    authors: ['Saraswathi V', 'Shyamala AC', 'Mathuram V', 'Subramanian S', 'Govindasamy S'],
    journal: 'Fitoterapia',
    year: 1998,
    volume: '69',
    pages: '73-5',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1999-001',
    title: 'Spectrofluorimetric detection of DMBA-induced mouse skin carcinoma',
    authors: ['Karthikeyan K', 'Masilamani V', 'Govindasamy S'],
    journal: 'Pathol Oncol Res',
    year: 1999,
    volume: '5',
    pages: '46-8',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1999-002',
    title: 'Chemopreventive effect of Ocimum sanctum on DMBA-induced hamster buccal pouch carcinogenesis',
    authors: ['Karthikeyan K', 'Ravichandran P', 'Govindasamy S'],
    journal: 'Oral Oncol',
    year: 1999,
    volume: '35',
    pages: '112-9',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1999-003',
    title: 'Biochemical evaluation of antitumor effect of muthu marunthu (a herbal formulation) on experimental fibrosarcoma in rats',
    authors: ['Palani V', 'Senthilkumaran RK', 'Govindasamy S'],
    journal: 'J Ethnopharmacol',
    year: 1999,
    volume: '65',
    pages: '257-65',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1999-004',
    title: 'Role of nitric oxide on GABA, glutamic acid, activities of GABA-T and GAD in rat brain cerebral cortex',
    authors: ['Jayakumar AR', 'Sujatha R', 'Paul V', 'Asokan C', 'Govindasamy S', 'Jayakumar R'],
    journal: 'Brain Res',
    year: 1999,
    volume: '837',
    pages: '229-35',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1999-005',
    title: 'Modulation of the impaired drug metabolism in sarcoma-180-bearing mice by echitamine chloride',
    authors: ['Saraswathi V', 'Mathuram V', 'Subramanian S', 'Govindasamy S'],
    journal: 'Cancer Biochem Biophys',
    year: 1999,
    volume: '17',
    pages: '79-88',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-1999-006',
    title: 'Erythrocyte membrane lipid peroxidation and antioxidant status in tungstate treated diabetic rats',
    authors: ['Ravichandran, P.', 'Karthikeyan, K.', 'Govindasamy, S.'],
    journal: 'Med.Sci.Res',
    year: 1999,
    volume: '29',
    pages: '321-325',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2000-001',
    title: 'Insulin like effect of sodium tungstate on cathepsin D, activity in experimental diabetic rats',
    authors: ['Ravichandran, P.', 'Govindasamy, S.'],
    journal: 'J. Clin. Biochem. Nutr.',
    year: 2000,
    volume: '32',
    pages: '87-93',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2001-001',
    title: 'Protective role of Bacopa monniera on morphine induced hepatotoxicity in rats',
    authors: ['Sumathy T', 'Subramanian S', 'Govindasamy S', 'Balakrishna K', 'Veluchamy G'],
    journal: 'Phytother Res',
    year: 2001,
    volume: '15',
    pages: '643-5',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2001-002',
    title: 'Biochemical studies on hypoglycemic effect of Aavirai kudineer: a herbal formulation in alloxan diabetic rats',
    authors: ['Bhavapriya V', 'Kalpana S', 'Govindasamy S', 'Apparanantham T'],
    journal: 'Indian J Exp Biol',
    year: 2001,
    volume: '39',
    pages: '925-8',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2002-001',
    title: 'Protective role of Bacopa monniera on morphine-induced brain mitochondrial enzyme activity in rats',
    authors: ['Sumathy T', 'Govindasamy S', 'Balakrishna K', 'Veluchamy G'],
    journal: 'Fitoterapia',
    year: 2002,
    volume: '73',
    pages: '381-5',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2003-001',
    title: 'Sodium molybdate improves the phagocytic function in alloxan-induced diabetic rats',
    authors: ['Panneerselvam S', 'Govindasamy S'],
    journal: 'Chem Biol Interact',
    year: 2003,
    volume: '145',
    pages: '159-63',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2004-001',
    title: 'Effect of sodium molybdate on the status of lipids, lipid peroxidation and antioxidant systems in alloxan-induced diabetic rats',
    authors: ['Panneerselvam SR', 'Govindasamy S'],
    journal: 'Clin Chim Acta',
    year: 2004,
    volume: '345',
    pages: '93-8',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2005-001',
    title: 'Antioxidant activity of Cassia fistula (Linn.) flowers in alloxan induced diabetic rats',
    authors: ['Manonmani G', 'Bhavapriya V', 'Kalpana S', 'Govindasamy S', 'Apparanantham T'],
    journal: 'J Ethnopharmacol',
    year: 2005,
    volume: '97',
    pages: '39-42',
    type: 'journal',
    category: 'research'
  },
  {
    id: 'pub-2006-001',
    title: 'Lipid lowering activity of Eclipta prostrata in experimental hyperlipidemia',
    authors: ['Kumari CS', 'Govindasamy S', 'Sukumar E'],
    journal: 'J Ethnopharmacol',
    year: 2006,
    volume: '105',
    pages: '332-5',
    type: 'journal',
    category: 'research'
  }
];

export default publications;
