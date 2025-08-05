import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
  CardMedia,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper
} from '@mui/material';
import {
  EmojiEvents as AwardIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  School as SchoolIcon,
  Sports as SportsIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  MenuBook as AcademicIcon,
  Star as StarIcon,
  Article as ArticleIcon,
  Science as ScienceIcon,
  Newspaper as NewspaperIcon,
  Search as SearchIcon
} from '@mui/icons-material';

// Import data from other pages
import { publications } from '../data/publications';


interface Achievement {
  id: string;
  title: string;
  description: string;
  institution?: string;
  year?: number;
  category: 'academic' | 'professional' | 'publications' | 'research-projects' | 'articles';
  subcategory?: 'research-projects' | 'publications' | 'magazines-newspapers';
  type: string;
  image?: string;
  certificate?: string;
  details?: string[];
}

// Research Project interface
interface ResearchProject {
  id: string;
  title: string;
  description?: string;
  category: 'major' | 'minor';
  duration: string;
  fundingAgency: string;
  totalEstimate: string;
  collaborators?: string[];
  outcomes?: string[];
  publications?: string[];
  status: 'completed' | 'ongoing' | 'published';
  significance?: string;
  researchArea?: string;
}

// Article interface
interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  content: string;
}

interface Certificate {
  filename: string;
  institution: string;
  activity: string;
  year: number;
  path: string;
}

interface YearData {
  count: number;
  certificates: Certificate[];
}

interface AchievementsMetadata {
  title: string;
  description: string;
  total_certificates: number;
  year_range: { start: number; end: number };
  categories: {
    sports: string[];
    academic: string[];
    professional: string[];
  };
  years: Record<string, YearData>;
}

// Sample achievements data organized by categories
const achievementsData = {
  academic: [
    {
      id: 'bachelor-chemistry-1968',
      title: 'Bachelor of Science in Chemistry',
      description: 'Completed undergraduate studies with a major in Chemistry, establishing the foundation for a distinguished career in biochemical research',
      institution: 'Rajah Serfoji College, Thanjavur',
      year: 1968,
      category: 'academic' as const,
      type: 'Undergraduate Degree',
      details: [
        'Major: Chemistry',
        'Institution: Rajah Serfoji College, Thanjavur',
        'Laid the groundwork for advanced studies in biochemistry',
        'Developed fundamental understanding of chemical principles'
      ]
    },
    {
      id: 'dppa-public-administration-1972',
      title: 'Diploma in Public Administration (DPPA)',
      description: 'Earned specialized qualification in Public Administration, demonstrating commitment to understanding governance and administrative excellence',
      institution: 'Department of Politics, University of Madras',
      year: 1972,
      category: 'academic' as const,
      type: 'Diploma',
      details: [
        'Major: Public Administration',
        'Department: Politics, University of Madras',
        'Enhanced understanding of administrative systems',
        'Complemented scientific education with governance knowledge'
      ]
    },
    {
      id: 'masters-biochemistry-1974',
      title: 'Master of Science in Biochemistry',
      description: 'Advanced graduate studies in Biochemistry, deepening expertise in molecular and cellular processes that would define his research career',
      institution: 'Department of Biochemistry, University of Madras',
      year: 1974,
      category: 'academic' as const,
      type: 'Master\'s Degree',
      details: [
        'Major: Biochemistry',
        'Department: Biochemistry, University of Madras',
        'Advanced study of molecular and cellular processes',
        'Preparation for doctoral research in biochemistry'
      ]
    },
    {
      id: 'doctorate-biochemistry-1979',
      title: 'Doctor of Philosophy in Biochemistry',
      description: 'Culmination of academic journey with doctoral research in Biochemistry, marking the beginning of his distinguished career as a research scientist and educator',
      institution: 'Department of Biochemistry, University of Madras',
      year: 1979,
      category: 'academic' as const,
      type: 'Doctoral Degree',
      details: [
        'Major: Biochemistry',
        'Department: Biochemistry, University of Madras',
        'Original research contributing to scientific knowledge',
        'Foundation for career as research scientist and educator',
        'First doctorate holder in his village community'
      ]
    }
  ],
  professional: [
    {
      id: 'school-teacher-1968',
      title: 'School Teacher',
      description: 'Commenced professional career in education, laying the foundation for a distinguished academic journey in teaching and mentorship',
      institution: 'Primary Education Sector',
      year: 1968,
      category: 'professional' as const,
      type: 'Teaching Position',
      details: [
        'Duration: 1968-1969',
        'First professional teaching experience',
        'Developed foundational pedagogical skills',
        'Established commitment to education and student development',
        'Gained practical classroom management experience'
      ]
    },
    {
      id: 'demonstrator-stanley-1970',
      title: 'Demonstrator in Biochemistry',
      description: 'Advanced to specialized biochemistry instruction, bridging theoretical knowledge with practical laboratory applications in medical education',
      institution: 'Stanley Medical College',
      year: 1970,
      category: 'professional' as const,
      type: 'Academic Position',
      details: [
        'Duration: 1970-1974',
        'Department: Biochemistry',
        'Conducted laboratory demonstrations for medical students',
        'Developed expertise in biochemical analytical techniques',
        'Mentored students in practical biochemistry applications',
        'Contributed to medical education curriculum development'
      ]
    },
    {
      id: 'lecturer-madras-1974',
      title: 'Lecturer in Biochemistry',
      description: 'Elevated to full lectureship, assuming comprehensive teaching responsibilities while pursuing advanced research in biochemical sciences',
      institution: 'University of Madras',
      year: 1974,
      category: 'professional' as const,
      type: 'Academic Position',
      details: [
        'Duration: 1974-1983',
        'Department: Biochemistry, University of Madras',
        'Delivered undergraduate and postgraduate lectures',
        'Initiated independent research programs',
        'Supervised student research projects',
        'Contributed to curriculum design and academic planning',
        'Established research collaborations within the university'
      ]
    },
    {
      id: 'reader-madras-1983',
      title: 'Reader in Biochemistry',
      description: 'Promoted to senior academic rank, recognizing excellence in teaching, research, and scholarly contributions to the field of biochemistry',
      institution: 'University of Madras',
      year: 1983,
      category: 'professional' as const,
      type: 'Senior Academic Position',
      details: [
        'Duration: 1983-1989',
        'Department: Biochemistry, University of Madras',
        'Advanced research leadership responsibilities',
        'Supervised M.Phil. and Ph.D. candidates',
        'Published significant research contributions',
        'Participated in academic committees and university governance',
        'Mentored junior faculty members',
        'Expanded research focus on diabetes and cancer studies'
      ]
    },
    {
      id: 'professor-madras-1989',
      title: 'Professor in Biochemistry',
      description: 'Achieved the pinnacle of academic excellence, leading cutting-edge research initiatives and shaping the next generation of biochemists until retirement',
      institution: 'University of Madras',
      year: 1989,
      category: 'professional' as const,
      type: 'Professorial Position',
      details: [
        'Duration: 1989 until retirement',
        'Department: Biochemistry, University of Madras',
        'Led major research programs in diabetes and cancer',
        'Established international research collaborations',
        'Supervised numerous doctoral and post-doctoral researchers',
        'Published extensively in peer-reviewed journals',
        'Served on editorial boards and review committees',
        'Represented the university at national and international conferences'
      ]
    },
    {
      id: 'head-department-1992',
      title: 'Head of Department of Biochemistry',
      description: 'Appointed to departmental leadership, orchestrating academic excellence, research innovation, and institutional development during a transformative period',
      institution: 'University of Madras',
      year: 1992,
      category: 'professional' as const,
      type: 'Administrative Leadership',
      details: [
        'Duration: 1992-1999',
        'Department: Biochemistry, University of Madras',
        'Led departmental strategic planning and development',
        'Managed faculty recruitment and development',
        'Oversaw curriculum modernization and research infrastructure',
        'Established industry partnerships and funding initiatives',
        'Coordinated interdisciplinary research programs',
        'Enhanced departmental reputation and academic standing',
        'Mentored faculty in research and career development'
      ]
    },
    {
      id: 'life-member-biological-sciences',
      title: 'Life Member - Society of Biological Sciences (India)',
      description: 'Distinguished lifetime membership recognizing significant contributions to biological sciences research and education in India',
      institution: 'Society of Biological Sciences (India)',
      category: 'professional' as const,
      type: 'Professional Membership',
      details: [
        'Lifetime recognition for excellence in biological sciences',
        'Active participation in national scientific discourse',
        'Contribution to advancement of biological research in India',
        'Networking with leading scientists and researchers',
        'Access to cutting-edge research publications and conferences',
        'Mentorship opportunities for emerging scientists'
      ]
    },
    {
      id: 'life-member-political-science',
      title: 'Life Member - All India Political Science Association',
      description: 'Prestigious lifetime membership acknowledging interdisciplinary expertise and contributions to political science education and research',
      institution: 'All India Political Science Association',
      category: 'professional' as const,
      type: 'Professional Membership',
      details: [
        'Recognition of interdisciplinary academic excellence',
        'Contribution to political science education and research',
        'Participation in national academic conferences and seminars',
        'Collaboration with political science scholars across India',
        'Access to specialized research resources and publications',
        'Involvement in policy discussions and academic governance'
      ]
    },
    {
      id: 'life-member-madras-teachers',
      title: 'Life Member - Madras University Teachers\' Association',
      description: 'Esteemed lifetime membership honoring dedicated service to higher education and commitment to faculty welfare and academic excellence',
      institution: 'Madras University Teachers\' Association',
      category: 'professional' as const,
      type: 'Professional Membership',
      details: [
        'Recognition of outstanding service to higher education',
        'Advocacy for faculty rights and academic freedom',
        'Participation in university governance and policy development',
        'Mentorship of junior faculty members',
        'Contribution to educational reforms and curriculum development',
        'Leadership in academic and administrative matters'
      ]
    },
    {
      id: 'life-member-indian-officers',
      title: 'Life Member - Indian Officers Association',
      description: 'Distinguished lifetime membership recognizing leadership excellence and administrative acumen in academic and professional spheres',
      institution: 'Indian Officers Association',
      category: 'professional' as const,
      type: 'Professional Membership',
      details: [
        'Recognition of exceptional leadership and administrative skills',
        'Networking with distinguished officers across various sectors',
        'Participation in leadership development programs',
        'Contribution to organizational excellence and governance',
        'Mentorship of emerging leaders and administrators',
        'Access to professional development resources and training'
      ]
    },
    {
      id: 'university-senate-member',
      title: 'Member of the University Senate',
      description: 'Served as an elected member of the University Senate, participating in key academic governance and policy decisions',
      institution: 'University of Madras',
      category: 'professional' as const,
      type: 'Administrative Activities',
      details: [
        'Elected representative in university governance',
        'Participated in academic policy formulation',
        'Contributed to strategic planning and institutional development',
        'Advocated for faculty and student welfare',
        'Involved in curriculum approval and academic standards',
        'Represented departmental interests at university level'
      ]
    },
    {
      id: 'syndicate-member',
      title: 'Syndicate Member',
      description: 'Served as Syndicate Member, contributing to the highest decision-making body of the university administration',
      institution: 'University of Madras',
      category: 'professional' as const,
      type: 'Administrative Activities',
      details: [
        'Member of the university\'s executive governing body',
        'Participated in financial and administrative decisions',
        'Contributed to university policy development',
        'Involved in faculty appointments and promotions',
        'Oversight of university operations and management',
        'Strategic planning for institutional growth'
      ]
    },
    {
      id: 'affiliation-committee-chairman',
      title: 'Chairman of the Affiliation Committee',
      description: 'Led the Affiliation Committee for the University of Madras, overseeing the accreditation and quality assurance of affiliated colleges',
      institution: 'University of Madras',
      category: 'professional' as const,
      type: 'Administrative Activities',
      details: [
        'Chaired committee responsible for college affiliations',
        'Evaluated academic standards and infrastructure of colleges',
        'Ensured quality assurance in affiliated institutions',
        'Conducted site visits and assessment reviews',
        'Maintained academic standards across the university system',
        'Facilitated institutional development and improvement'
      ]
    },
    {
      id: 'muta-executive-committee',
      title: 'Executive Committee Member - Madras University Teachers Association',
      description: 'Served as Executive Committee Member of the Madras University Teachers Association, advocating for faculty rights and academic excellence',
      institution: 'Madras University Teachers Association',
      category: 'professional' as const,
      type: 'Administrative Activities',
      details: [
        'Active member of the executive leadership team',
        'Advocated for faculty rights and welfare',
        'Participated in policy discussions and negotiations',
        'Contributed to academic freedom initiatives',
        'Supported professional development programs',
        'Facilitated communication between faculty and administration'
      ]
    },
    {
      id: 'muta-general-secretary',
      title: 'General Secretary - Madras University Teachers Association',
      description: 'Served as General Secretary of the Madras University Teachers Association, leading organizational activities and faculty advocacy',
      institution: 'Madras University Teachers Association',
      category: 'professional' as const,
      type: 'Administrative Activities',
      details: [
        'Chief administrative officer of the teachers association',
        'Coordinated organizational activities and meetings',
        'Led faculty advocacy and representation efforts',
        'Managed communication with university administration',
        'Organized professional development and welfare programs',
        'Maintained records and facilitated democratic processes'
      ]
    }
  ]
};

// Research Projects Data
const researchProjectsData: ResearchProject[] = [
  {
    id: 'cauvery-100-ayurvedic',
    title: 'Biochemical effects of Cauvery-100 an Ayurvedic Formulation to treat Gastrointestinal Tract Complications on Mammalian System',
    category: 'major',
    duration: 'Two years (1991-93)',
    fundingAgency: 'Cauvery Ayurvedics, 16, Vannarpathi, Kodambakkam Madras',
    totalEstimate: 'Rs. 1,70,000',
    status: 'completed'
  },
  {
    id: 'narcotic-rehabilitation',
    title: 'Biochemical Concept of Narcotic Addict\'s Rehabilitation to Restrain Border Disturbances',
    category: 'major',
    duration: 'Three years (1993-96)',
    fundingAgency: 'Defence Grants-in-Aid Scheme, Ministry of Defence, Government of India',
    totalEstimate: 'Rs. 2,66,940',
    status: 'completed'
  },
  {
    id: 'echitamine-anticancer',
    title: 'Evaluation of the Anticancer effects of Echitamine chloride in Experimental Fibrosarcoma and Ehrlich Ascites Carcinoma (EAC)',
    category: 'major',
    duration: 'Three years (1994-97)',
    fundingAgency: 'University Grants Commission, New Delhi',
    totalEstimate: 'Rs. 1,81,940',
    status: 'completed'
  },
  {
    id: 'asshiffa-500-unani',
    title: 'Asshiffa-500, An Unani formulation. A prospective drug to treat kidney disease',
    category: 'major',
    duration: '1995-98',
    fundingAgency: 'Alkausar Unani Kidney Foundation Centre',
    totalEstimate: 'Rs. 1,23,000',
    status: 'completed'
  },
  {
    id: 'gangetin-antifertility',
    title: 'Evaluation of the antifertility effects of gangetin - a plant petrocarpan on male albino rats',
    category: 'major',
    duration: '1998-2001',
    fundingAgency: 'University Grants Commission, New Delhi',
    totalEstimate: 'Rs. 3,16,940',
    status: 'completed'
  }
];

// Articles Data
const articlesData: Article[] = [
  {
    id: 1,
    title: 'Drug Proven Correct',
    description: 'Drug research validation coverage',
    image: '/sgtrust/media/newspapers/drugprovencorrect.JPG',
    date: 'Research Coverage',
    category: 'newspaper',
    content: 'Newspaper coverage of Professor Govindasamy\'s drug research validation work...'
  },
  {
    id: 2,
    title: 'Educational Trust',
    description: 'Educational trust coverage',
    image: '/sgtrust/media/newspapers/educationaltrust.JPG',
    date: 'Community Service',
    category: 'newspaper',
    content: 'Coverage of Professor Govindasamy\'s educational trust initiatives...'
  },
  {
    id: 3,
    title: 'Felicitation',
    description: 'Felicitation ceremony coverage',
    image: '/sgtrust/media/newspapers/felicitation.JPG',
    date: 'Recognition',
    category: 'newspaper',
    content: 'Newspaper coverage of felicitation ceremony honoring Professor Govindasamy...'
  },
  {
    id: 4,
    title: 'First Trial Result',
    description: 'First trial result announcement',
    image: '/sgtrust/media/newspapers/firsttrialresult.JPG',
    date: 'Research Milestone',
    category: 'newspaper',
    content: 'Coverage of significant research trial results...'
  },
  {
    id: 5,
    title: 'Magazine Feature',
    description: 'Magazine feature article',
    image: '/sgtrust/media/newspapers/magazine.JPG',
    date: 'Profile',
    category: 'magazine',
    content: 'In-depth magazine profile of Professor Govindasamy\'s contributions...'
  },
  {
    id: 6,
    title: 'Newspaper Article',
    description: 'General newspaper article coverage',
    image: '/sgtrust/media/newspapers/newspaperarticle.JPG',
    date: 'Media Coverage',
    category: 'newspaper',
    content: 'General newspaper article about Professor Govindasamy\'s work...'
  },
  {
    id: 7,
    title: 'Newspaper Award',
    description: 'Award recognition in newspaper',
    image: '/sgtrust/media/newspapers/newspaperaward.JPG',
    date: 'Award Recognition',
    category: 'newspaper',
    content: 'Newspaper coverage of award recognition for Professor Govindasamy...'
  },
  {
    id: 8,
    title: 'Statue Request',
    description: 'Request for memorial statue coverage',
    image: '/sgtrust/media/newspapers/statuerequest.JPG',
    date: 'Memorial Request',
    category: 'newspaper',
    content: 'Newspaper coverage of request for memorial statue...'
  },
  {
    id: 9,
    title: '2 Day Fasting for Pay Raise',
    description: 'Article about 2-day fasting for pay raise',
    image: '/sgtrust/media/images/articles/2dayfastingforpayraise.jpeg',
    date: 'Social Action',
    category: 'article',
    content: 'Article coverage of 2-day fasting protest for pay raise...'
  },
  {
    id: 10,
    title: 'Muta Article 1',
    description: 'Muta publication article - Part 1',
    image: '/sgtrust/media/images/articles/Muta1.jpg',
    date: 'Publication',
    category: 'article',
    content: 'Muta publication article coverage - Part 1...'
  },
  {
    id: 11,
    title: 'Muta Article 2',
    description: 'Muta publication article - Part 2',
    image: '/sgtrust/media/images/articles/Muta2.jpg',
    date: 'Publication',
    category: 'article',
    content: 'Muta publication article coverage - Part 2...'
  },
  {
    id: 12,
    title: 'Muta Article 3',
    description: 'Muta publication article - Part 3',
    image: '/sgtrust/media/images/articles/Muta3.jpg',
    date: 'Publication',
    category: 'article',
    content: 'Muta publication article coverage - Part 3...'
  },
  {
    id: 13,
    title: 'Muta Article 4',
    description: 'Muta publication article - Part 4',
    image: '/sgtrust/media/images/articles/Muta4.jpg',
    date: 'Publication',
    category: 'article',
    content: 'Muta publication article coverage - Part 4...'
  },
  {
    id: 14,
    title: 'Muta Article 5',
    description: 'Muta publication article - Part 5',
    image: '/sgtrust/media/images/articles/Muta5.jpg',
    date: 'Publication',
    category: 'article',
    content: 'Muta publication article coverage - Part 5...'
  }
];

const AchievementsPage: React.FC = () => {
  const [legacyAchievementsData, setLegacyAchievementsData] = useState<AchievementsMetadata | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [expandedYear, setExpandedYear] = useState<string | false>(false);
  const [selectedCategory, setSelectedCategory] = useState<'academic' | 'professional' | 'publications' | 'research-projects' | 'articles'>('academic');

  // Publications search and filter state
  const [publicationsSearch, setPublicationsSearch] = useState('');
  const [publicationsYearFilter, setPublicationsYearFilter] = useState('');
  const [publicationsCategoryFilter, setPublicationsCategoryFilter] = useState('');

  // Articles modal state
  const [selectedArticleImage, setSelectedArticleImage] = useState<string | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Load legacy achievements metadata (certificates)
    fetch('/sgtrust/media/achievements/achievements_metadata.json')
      .then(response => response.json())
      .then(data => setLegacyAchievementsData(data))
      .catch(error => console.error('Error loading legacy achievements data:', error));
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <AcademicIcon color="primary" />;
      case 'professional':
        return <BusinessIcon color="secondary" />;
      case 'publications':
        return <ArticleIcon color="primary" />;
      case 'research-projects':
        return <ScienceIcon color="secondary" />;
      case 'articles':
        return <NewspaperIcon color="primary" />;
      default:
        return <StarIcon color="action" />;
    }
  };

  const getCategoryColor = (category: string): 'primary' | 'secondary' | 'default' => {
    switch (category) {
      case 'academic':
      case 'publications':
      case 'articles':
        return 'primary';
      case 'professional':
      case 'research-projects':
        return 'secondary';
      default:
        return 'default';
    }
  };



  // Legacy functions for certificate categorization
  const getLegacyCategoryIcon = (activity: string) => {
    if (legacyAchievementsData?.categories.sports.includes(activity)) {
      return <SportsIcon color="primary" />;
    } else if (legacyAchievementsData?.categories.academic.includes(activity)) {
      return <SchoolIcon color="secondary" />;
    } else {
      return <WorkIcon color="action" />;
    }
  };

  const getLegacyCategoryColor = (activity: string): 'primary' | 'secondary' | 'default' => {
    if (legacyAchievementsData?.categories.sports.includes(activity)) {
      return 'primary';
    } else if (legacyAchievementsData?.categories.academic.includes(activity)) {
      return 'secondary';
    } else {
      return 'default';
    }
  };

  const handleAchievementClick = (achievement: Achievement) => {
    // If the achievement has an image, open the image lightbox instead of the detail dialog
    if ('image' in achievement && achievement.image) {
      handleImageClick(achievement.image);
    } else {
      setSelectedAchievement(achievement);
    }
  };

  const handleCloseAchievementDialog = () => {
    setSelectedAchievement(null);
  };

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: 'academic' | 'professional' | 'publications' | 'research-projects' | 'articles') => {
    setSelectedCategory(newValue);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleArticleImageClick = (imageSrc: string) => {
    setSelectedArticleImage(imageSrc);
  };

  const handleCloseArticleImage = () => {
    setSelectedArticleImage(null);
  };

  // Filter publications (same as original PublicationsPage)
  const getFilteredAndSortedPublications = () => {
    return publications.filter(pub => {
      const matchesSearch = publicationsSearch === '' ||
        pub.title.toLowerCase().includes(publicationsSearch.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(publicationsSearch.toLowerCase())) ||
        pub.journal.toLowerCase().includes(publicationsSearch.toLowerCase());

      const matchesYear = publicationsYearFilter === '' || pub.year.toString() === publicationsYearFilter;
      const matchesType = publicationsCategoryFilter === '' || pub.type === publicationsCategoryFilter;

      return matchesSearch && matchesYear && matchesType;
    });
  };

  // Get unique years and types for filters
  const uniqueYears = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const uniqueTypes = [...new Set(publications.map(pub => pub.type))];

  // Helper functions for publications formatting (same as original PublicationsPage)
  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`;
  };

  const formatCitation = (pub: any) => {
    const authorsStr = formatAuthors(pub.authors);
    const volumePages = pub.volume && pub.pages ? ` ${pub.volume}:${pub.pages}` :
                       pub.volume ? ` ${pub.volume}` :
                       pub.pages ? `:${pub.pages}` : '';

    return `${authorsStr}. ${pub.title}. ${pub.journal}. ${pub.year}${volumePages}.`;
  };

  // Group publications by year (same as original)
  const getPublicationsByYear = () => {
    const filtered = getFilteredAndSortedPublications();
    const grouped = filtered.reduce((acc, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    }, {} as Record<number, any[]>);

    return Object.keys(grouped)
      .map(Number)
      .sort((a, b) => b - a)
      .reduce((acc, year) => {
        acc[year] = grouped[year];
        return acc;
      }, {} as Record<number, any[]>);
  };

  // Filter achievements based on selected category and subcategory
  const getFilteredAchievements = () => {
    switch (selectedCategory) {
      case 'academic':
      case 'professional':
        return achievementsData[selectedCategory];
      case 'publications':
        return publications;
      case 'research-projects':
        return researchProjectsData;
      case 'articles':
        return articlesData;
      default:
        return [];
    }
  };

  // Render content based on selected category
  const renderContent = () => {
    switch (selectedCategory) {
      case 'publications':
        const filteredPublications = getFilteredAndSortedPublications();
        const publicationsByYear = getPublicationsByYear();
        const sortedYears = Object.keys(publicationsByYear).map(Number).sort((a, b) => b - a);

        return (
          <Box sx={{ width: '100%' }}>
            {/* Header - Same as original */}
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <ArticleIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                <Typography variant="h4" component="h2" gutterBottom>
                  Scientific Publications
                </Typography>
              </Box>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                Complete list of peer-reviewed research publications
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Total Publications: {publications.length} | Years: {Math.min(...uniqueYears)} - {Math.max(...uniqueYears)}
              </Typography>
            </Box>

            {/* Filters - Same as original */}
            <Paper sx={{ p: 3, mb: 4 }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <TextField
                  placeholder="Search publications..."
                  value={publicationsSearch}
                  onChange={(e) => setPublicationsSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flexGrow: 1, minWidth: 300 }}
                />

                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel>Year</InputLabel>
                  <Select
                    value={publicationsYearFilter}
                    label="Year"
                    onChange={(e) => setPublicationsYearFilter(e.target.value)}
                  >
                    <MenuItem value="">All Years</MenuItem>
                    {uniqueYears.map(year => (
                      <MenuItem key={year} value={year.toString()}>{year}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel>Type</InputLabel>
                  <Select
                    value={publicationsCategoryFilter}
                    label="Type"
                    onChange={(e) => setPublicationsCategoryFilter(e.target.value)}
                  >
                    <MenuItem value="">All Types</MenuItem>
                    {uniqueTypes.map(type => (
                      <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {(publicationsSearch || publicationsYearFilter !== '' || publicationsCategoryFilter !== '') && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Showing {filteredPublications.length} of {publications.length} publications
                  </Typography>
                </Box>
              )}
            </Paper>

            {/* Publications List - Same as original */}
            {sortedYears.map(year => (
              <Box key={year} sx={{ mb: 4 }}>
                <Typography variant="h4" component="h3" sx={{ mb: 3, color: 'primary.main' }}>
                  {year}
                </Typography>

                {publicationsByYear[year].map((pub, index) => (
                  <Paper key={pub.id} sx={{ p: 3, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ minWidth: 30 }}>
                        {index + 1}.
                      </Typography>

                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                          {formatCitation(pub)}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                          <Chip
                            label={pub.type}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                          {pub.category && (
                            <Chip
                              label={pub.category}
                              size="small"
                              color="secondary"
                              variant="outlined"
                            />
                          )}
                          {pub.doi && (
                            <Link
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ ml: 1 }}
                            >
                              DOI: {pub.doi}
                            </Link>
                          )}
                          {pub.url && (
                            <Link
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ ml: 1 }}
                            >
                              Full Text
                            </Link>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            ))}
          </Box>
        );
      case 'research-projects':
        return researchProjectsData.map((project) => (
          <Box key={project.id}>
            <Card sx={{ height: '100%', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ScienceIcon color="secondary" />
                  <Box sx={{ ml: 2, flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Chip label={project.duration} color="secondary" size="small" />
                  </Box>
                </Box>
                <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                  {project.fundingAgency}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Total Estimate: {project.totalEstimate}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="Research Project" variant="outlined" size="small" color="secondary" />
                  <Chip label={project.category} variant="outlined" size="small" />
                  <Chip label={project.status} variant="outlined" size="small" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        ));
      case 'articles':
        return articlesData.map((article) => (
          <Box key={article.id}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
              }}
              onClick={() => handleArticleImageClick(article.image)}
            >
              <CardMedia
                component="img"
                height="250"
                image={article.image}
                alt={article.title}
                sx={{ objectFit: 'contain', backgroundColor: 'grey.100' }}
              />
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <NewspaperIcon color="primary" />
                  <Box sx={{ ml: 2, flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {article.title}
                    </Typography>
                    <Chip label={article.date} color="primary" size="small" />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {article.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  <Chip label="Article" variant="outlined" size="small" color="primary" />
                  <Chip label={article.category} variant="outlined" size="small" />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  Click to view full image
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ));
      case 'academic':
      case 'professional':
        const achievements = achievementsData[selectedCategory];
        return achievements.map((achievement) => (
          <Box key={achievement.id}>
            <Card sx={{ height: '100%', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}
                  onClick={() => handleAchievementClick(achievement)}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {getCategoryIcon(achievement.category)}
                  <Box sx={{ ml: 2, flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {achievement.title}
                    </Typography>
                    {achievement.year && (
                      <Chip label={achievement.year} color={getCategoryColor(achievement.category)} size="small" />
                    )}
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {achievement.description}
                </Typography>
                {achievement.institution && (
                  <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                    {achievement.institution}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label={achievement.type} variant="outlined" size="small" color={getCategoryColor(achievement.category)} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        ));
      default:
        return [];
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
          Achievements & Recognition
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          A lifetime of excellence across academic, professional, and community service
        </Typography>
      </Box>

      {/* Category Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label="Academic"
            value="academic"
            icon={<AcademicIcon />}
            iconPosition="start"
          />
          <Tab
            label="Professional"
            value="professional"
            icon={<BusinessIcon />}
            iconPosition="start"
          />
          <Tab
            label="Publications"
            value="publications"
            icon={<ArticleIcon />}
            iconPosition="start"
          />
          <Tab
            label="Research Projects"
            value="research-projects"
            icon={<ScienceIcon />}
            iconPosition="start"
          />
          <Tab
            label="Articles"
            value="articles"
            icon={<NewspaperIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {getFilteredAchievements().length === 0 ? (
        /* Empty State */
        <Box sx={{
          textAlign: 'center',
          py: 8,
          px: 4
        }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No Content Available
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedCategory === 'academic'
              ? 'Academic achievements content is currently being prepared.'
              : 'No achievements found for the selected category.'
            }
          </Typography>
        </Box>
      ) : (
        /* Content Grid */
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4
        }}>
          {renderContent()}
        </Box>
      )}

      {/* Research Supervision & Statistics - Only show for Professional Achievements */}
      {selectedCategory === 'professional' && getFilteredAchievements().length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Card sx={{
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? theme.palette.grey[800]
              : theme.palette.grey[50],
            border: (theme) => `2px solid ${theme.palette.primary.main}`,
            boxShadow: 4
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" component="h3" gutterBottom textAlign="center" sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'primary.main'
              }}>
                Research Leadership & Academic Impact
              </Typography>

              <Typography variant="body1" sx={{
                textAlign: 'center',
                fontSize: '1.1rem',
                mb: 4,
                color: 'text.primary'
              }}>
                Professor Govindasamy's distinguished career encompassed comprehensive research supervision,
                extensive scholarly publications, and three decades of transformative teaching that shaped
                countless students and advanced the field of biochemistry.
              </Typography>

              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
                mt: 3
              }}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    43
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    M.Phil. Supervisions
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Master of Philosophy candidates guided to successful completion
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    22
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    Ph.D. Supervisions
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Doctoral candidates mentored through original research
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    7
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    Ph.D. Under Guidance
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Ongoing doctoral research projects at time of retirement
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    76
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    Research Publications
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Peer-reviewed articles in national and international journals
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    30
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    Years Teaching
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Decades of excellence in biochemistry education
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                    1st
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    Village Doctorate
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    First Ph.D. holder in his village community
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Achievement Detail Dialog */}
      <Dialog
        open={!!selectedAchievement}
        onClose={handleCloseAchievementDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedAchievement && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {getCategoryIcon(selectedAchievement.category)}
                <Typography variant="h5" sx={{ ml: 2 }}>
                  {selectedAchievement.title}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseAchievementDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {selectedAchievement.description}
                </Typography>

                {selectedAchievement.institution && (
                  <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
                    <strong>Institution:</strong> {selectedAchievement.institution}
                  </Typography>
                )}

                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Chip
                    label={selectedAchievement.year}
                    color={getCategoryColor(selectedAchievement.category)}
                  />
                  <Chip
                    label={selectedAchievement.type}
                    variant="outlined"
                    color={getCategoryColor(selectedAchievement.category)}
                  />
                  <Chip
                    label={selectedAchievement.category.charAt(0).toUpperCase() + selectedAchievement.category.slice(1)}
                    variant="outlined"
                  />
                </Box>

                {selectedAchievement.details && selectedAchievement.details.length > 0 && (
                  <>
                    <Typography variant="h6" gutterBottom>
                      Details:
                    </Typography>
                    <List>
                      {selectedAchievement.details.map((detail, index) => {
                        // Check if detail contains URL or DOI
                        const urlMatch = detail.match(/URL: (.+)/);
                        const doiMatch = detail.match(/DOI: (.+)/);

                        if (urlMatch) {
                          return (
                            <ListItem key={index} sx={{ py: 0.5 }}>
                              <ListItemText
                                primary={
                                  <Box>
                                    • URL: <Link href={urlMatch[1]} target="_blank" rel="noopener noreferrer">
                                      {urlMatch[1]}
                                    </Link>
                                  </Box>
                                }
                              />
                            </ListItem>
                          );
                        }

                        if (doiMatch) {
                          return (
                            <ListItem key={index} sx={{ py: 0.5 }}>
                              <ListItemText
                                primary={
                                  <Box>
                                    • DOI: <Link href={`https://doi.org/${doiMatch[1]}`} target="_blank" rel="noopener noreferrer">
                                      {doiMatch[1]}
                                    </Link>
                                  </Box>
                                }
                              />
                            </ListItem>
                          );
                        }

                        return (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemText primary={`• ${detail}`} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Legacy Certificates Section - Only show for Academic Achievements */}
      {legacyAchievementsData && selectedCategory === 'academic' && (
        <>
          <Divider sx={{ my: 6 }} />
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom textAlign="center">
              Certificate Archive
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
              Historical certificates and documents ({legacyAchievementsData.total_certificates} items)
            </Typography>
            <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
              {legacyAchievementsData.description}
            </Typography>

            {/* Summary Statistics */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 6 }}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {legacyAchievementsData.total_certificates}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Certificates
                </Typography>
              </Card>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="success.main" fontWeight="bold">
                  {legacyAchievementsData.categories.sports.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sports Activities
                </Typography>
              </Card>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="warning.main" fontWeight="bold">
                  {legacyAchievementsData.year_range.end - legacyAchievementsData.year_range.start + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Years Span
                </Typography>
              </Card>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h4" color="error.main" fontWeight="bold">
                  {legacyAchievementsData.categories.academic.length + legacyAchievementsData.categories.professional.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Academic & Professional
                </Typography>
              </Card>
            </Box>

            {/* Year-based Achievements */}
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
              Certificates by Year ({legacyAchievementsData.year_range.start} - {legacyAchievementsData.year_range.end})
            </Typography>

            {/* Year Accordions */}
            {Object.entries(legacyAchievementsData.years)
        .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Sort years in descending order
        .map(([year, yearData]) => (
          <Accordion
            key={year}
            expanded={expandedYear === year}
            onChange={(_, isExpanded) => setExpandedYear(isExpanded ? year : false)}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <AwardIcon color="primary" />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {year}
                </Typography>
                <Badge badgeContent={yearData.count} color="primary">
                  <Chip
                    label={`${yearData.count} certificate${yearData.count !== 1 ? 's' : ''}`}
                    size="small"
                    variant="outlined"
                  />
                </Badge>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {yearData.certificates.map((certificate, index) => (
                  <Card key={index} sx={{ overflow: 'hidden' }}>
                    <CardContent sx={{ p: 3 }}>
                      {/* Certificate Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        {getLegacyCategoryIcon(certificate.activity)}
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" component="h3">
                            {certificate.activity}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {certificate.institution}
                          </Typography>
                        </Box>
                        <Chip
                          label={certificate.year}
                          color="primary"
                          size="small"
                        />
                        <Chip
                          label={certificate.activity}
                          size="small"
                          color={getLegacyCategoryColor(certificate.activity)}
                          variant="outlined"
                        />
                      </Box>

                      {/* Full Certificate Image */}
                      <Box
                        sx={{
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.02)'
                          }
                        }}
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <img
                          src={certificate.path}
                          alt={`${certificate.institution} - ${certificate.activity}`}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            border: '1px solid #e0e0e0'
                          }}
                        />
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            display: 'block',
                            mt: 1,
                            fontStyle: 'italic'
                          }}
                        >
                          Click to view in full screen
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
          </Box>
        </>
      )}

      {/* Certificate Detail Dialog */}
      <Dialog
        open={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedCertificate && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">
                  {selectedCertificate.activity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedCertificate.institution} • {selectedCertificate.year}
                </Typography>
              </Box>
              <IconButton onClick={() => setSelectedCertificate(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={selectedCertificate.path}
                  alt={`${selectedCertificate.institution} - ${selectedCertificate.activity}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* Image Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={handleCloseImage}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            boxShadow: 'none',
            maxHeight: '90vh',
            margin: '5vh auto'
          }
        }}
      >
        <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size view"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Article Image Modal */}
      <Dialog
        open={!!selectedArticleImage}
        onClose={handleCloseArticleImage}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden'
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseArticleImage}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedArticleImage && (
            <Box
              component="img"
              src={selectedArticleImage}
              alt="Article full view"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AchievementsPage;
