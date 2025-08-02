# Technical Product Requirements Document (Technical PRD)
## Professor S. Govindasamy's Legacy Website - Technical Overview

### 1. Technical Architecture Overview

**Architecture Pattern:** Single Page Application (SPA) with Static Site Generation  
**Deployment Model:** Static hosting on GitHub Pages  
**Build System:** Vite with React  
**State Management:** React Context API + Local State  

### 2. Technology Stack

#### 2.1 Frontend Framework
- **React 18.2+** - Component-based UI library
- **Vite 4.0+** - Build tool and development server
- **TypeScript** - Type safety and better developer experience
- **React Router v6** - Client-side routing

#### 2.2 UI Framework & Styling
- **Material-UI (MUI) v5** - Component library
  - `@mui/material` - Core components
  - `@mui/icons-material` - Icon library
  - `@mui/lab` - Experimental components (Timeline)
- **Tailwind CSS 3.0+** - Utility-first CSS framework
- **Emotion** - CSS-in-JS (comes with MUI)

#### 2.3 Additional Libraries
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "@mui/material": "^5.11.0",
    "@mui/icons-material": "^5.11.0",
    "@mui/lab": "^5.0.0-alpha.120",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "framer-motion": "^9.0.0",
    "react-intersection-observer": "^9.4.0",
    "react-image-gallery": "^1.2.11",
    "react-i18next": "^12.1.0",
    "i18next": "^22.4.0",
    "i18next-browser-languagedetector": "^7.0.0",
    "i18next-http-backend": "^2.1.0"
  }
}
```

### 3. Project Structure

```
docs/
├── public/
│   ├── data/                   # DATA PARTITION - All JSON data files
│   │   ├── core/               # Core website data
│   │   │   ├── students.json           # Student database
│   │   │   ├── timeline.json           # Timeline data
│   │   │   ├── publications.json       # Publications data
│   │   │   ├── achievements.json       # Achievements data
│   │   │   └── biography.json          # Professor biography data
│   │   ├── i18n/               # Internationalization data
│   │   │   ├── en/             # English translations
│   │   │   │   ├── common.json         # Common UI translations
│   │   │   │   ├── navigation.json     # Navigation translations
│   │   │   │   ├── content.json        # Content translations
│   │   │   │   └── academic.json       # Academic terminology
│   │   │   └── ta/             # Tamil translations
│   │   │       ├── common.json         # Common UI translations
│   │   │       ├── navigation.json     # Navigation translations
│   │   │       ├── content.json        # Content translations
│   │   │       └── academic.json       # Academic terminology
│   │   ├── financial/          # Financial transparency data
│   │   │   ├── funding.json            # Funding records
│   │   │   ├── expenditures.json       # Expenditure records
│   │   │   └── endowments.json         # Endowment fund data
│   │   ├── gallery/            # Gallery metadata
│   │   │   ├── images.json             # All gallery images metadata
│   │   │   ├── categories.json         # Gallery categories structure
│   │   │   └── people.json             # People identification database
│   │   └── config/             # Configuration data
│   │       ├── navigation.json         # Site navigation structure
│   │       ├── settings.json           # Site settings and preferences
│   │       └── metadata.json           # SEO and site metadata
│   ├── media/                  # MEDIA PARTITION - All media assets
│   │   ├── images/             # Image assets with GitHub raw URLs
│   │   │   ├── professor/              # Professor photos
│   │   │   │   ├── profile/            # Profile and headshot photos
│   │   │   │   ├── historical/         # Historical photos by decade
│   │   │   │   └── professional/       # Professional event photos
│   │   │   ├── students/               # Student-related photos
│   │   │   │   ├── individual/         # Individual student photos
│   │   │   │   ├── groups/             # Group photos and batch photos
│   │   │   │   └── graduations/        # Graduation ceremony photos
│   │   │   ├── gallery/                # Categorized gallery images
│   │   │   │   ├── personal/           # Personal and family photos
│   │   │   │   ├── academic/           # Academic events and ceremonies
│   │   │   │   ├── events/             # Conferences, seminars, meetings
│   │   │   │   ├── awards/             # Award ceremonies and recognitions
│   │   │   │   ├── research/           # Research activities and labs
│   │   │   │   └── timeline/           # Timeline milestone images
│   │   │   └── thumbnails/             # Optimized thumbnails (auto-generated)
│   │   │       ├── small/              # Small thumbnails (150x150)
│   │   │       ├── medium/             # Medium thumbnails (300x300)
│   │   │       └── large/              # Large thumbnails (600x600)
│   │   └── documents/          # Document assets
│   │       ├── financial/              # Financial documentation PDFs
│   │       │   ├── funding/            # Funding documentation
│   │       │   ├── receipts/           # Expenditure receipts
│   │       │   └── endowment/          # Endowment related documents
│   │       ├── academic/               # Academic documents
│   │       │   ├── publications/       # PDF copies of publications
│   │       │   ├── certificates/       # Award certificates
│   │       │   └── transcripts/        # Academic transcripts
│   │       └── legal/                  # Legal and official documents
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/             # Reusable components
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Custom UI components
│   ├── pages/                  # Route components
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions
│   ├── styles/                 # Global styles
│   ├── types/                  # TypeScript type definitions
│   └── App.tsx
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

### 4. Component Architecture

#### 4.1 Layout Components
```typescript
// Layout hierarchy
App
├── Header (Navigation)
├── Main (Route content)
│   ├── HomePage
│   ├── AboutPage
│   ├── TimelinePage
│   ├── StudentsPage (Overview/Directory)
│   ├── StudentDetailPage (Individual student pages)
│   ├── GalleryPage
│   ├── AchievementsPage
│   ├── AccountabilityPage
│   └── ContactPage
└── Footer
```

#### 4.2 Professional Component Architecture

##### 4.2.1 Navigation & Layout Components
- **MultilingualHeader**: Academic-style header with language switcher
- **LocalizedNavigation**: Multi-level navigation with Tamil/English support
- **LanguageSwitcher**: Prominent language toggle (Tamil ⇄ English)
- **BreadcrumbTrail**: Localized navigation path for complex information
- **QuickAccessToolbar**: Shortcuts with multilingual labels
- **ResponsiveDrawer**: Mobile-optimized navigation with language support

##### 4.2.2 Content Display Components
- **AcademicHeroSection**: Professional presentation with credentials
- **MetricsDashboard**: Key performance indicators and statistics
- **ScholarlyTimeline**: Academic milestone visualization
- **PublicationList**: Formatted academic publication display
- **CitationDisplay**: Proper academic citation formatting

##### 4.2.3 Student & Alumni Components
- **AlumniDirectory**: Professional directory with advanced search
- **StudentProfileCard**: Comprehensive student information display
- **CareerProgressionChart**: Visual career timeline
- **SuccessMetricsWidget**: Student achievement statistics
- **AlumniNetworkGraph**: Interconnected alumni relationships
- **MentorshipTreeView**: Hierarchical mentorship visualization

##### 4.2.4 Gallery & Media Components
- **ProfessionalGallery**: Academic-appropriate photo presentation
- **DocumentViewer**: PDF and document display with academic formatting
- **MediaMetadataPanel**: Scholarly information about media assets
- **ArchivalDisplay**: Historical document and photo presentation

##### 4.2.5 Financial Transparency Components
- **TransparencyDashboard**: Professional financial reporting interface
- **AuditTrailDisplay**: Detailed financial documentation viewer
- **EndowmentTracker**: Institutional endowment management display
- **ImpactMetrics**: Quantified impact of funding utilization

##### 4.2.6 Search & Discovery Components
- **AcademicSearchEngine**: Advanced search with scholarly filters
- **FacetedSearch**: Multi-dimensional search capabilities
- **ContentRecommendation**: Related content suggestions
- **ExportTools**: Citation export and academic sharing tools

### 5. Multilingual Architecture

#### 5.1 Language Support Implementation
```typescript
// i18next configuration for Tamil and English
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en',
    supportedLngs: ['en', 'ta'],

    backend: {
      loadPath: '/data/i18n/{{lng}}/{{ns}}.json'
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    },

    ns: ['common', 'navigation', 'content', 'academic'],
    defaultNS: 'common'
  });
```

#### 5.2 Dual Audience Design Patterns
```typescript
// Content complexity levels for different audiences
interface ContentLevel {
  academic: {
    english: string;    // Technical academic language
    tamil: string;      // Academic Tamil with English terms where needed
  };
  general: {
    english: string;    // Simple, accessible English
    tamil: string;      // Everyday Tamil language
  };
}

// Example usage for different user types
const contentStrategy = {
  scholars: 'academic',     // Full academic terminology
  students: 'academic',     // Academic but accessible
  beneficiaries: 'general', // Simple, clear language
  family: 'general'         // Emotional, personal language
};
```

#### 5.3 Tamil Language Implementation
```typescript
// Tamil font configuration
const tamilFonts = {
  primary: '"Noto Sans Tamil", "Latha", "Tamil Sangam MN", sans-serif',
  fallback: '"Arial Unicode MS", sans-serif'
};

// Language-specific styling
const languageStyles = {
  ta: {
    fontFamily: tamilFonts.primary,
    fontSize: '1.1rem', // Slightly larger for Tamil readability
    lineHeight: 1.7,    // More spacing for Tamil text
    letterSpacing: '0.02em'
  },
  en: {
    fontFamily: '"Roboto", "Georgia", "Times New Roman", serif',
    fontSize: '1rem',
    lineHeight: 1.6,
    letterSpacing: 'normal'
  }
};
```

#### 5.4 Multilingual Component Examples
```typescript
// Language-aware component
const MultilingualTitle: React.FC<{titleKey: string}> = ({ titleKey }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Typography
      variant="h2"
      sx={languageStyles[currentLang]}
      dir={currentLang === 'ta' ? 'ltr' : 'ltr'}
    >
      {t(titleKey)}
    </Typography>
  );
};

// Dual-audience content component
const AdaptiveContent: React.FC<{
  academicKey: string;
  generalKey: string;
  userType: 'academic' | 'general';
}> = ({ academicKey, generalKey, userType }) => {
  const { t } = useTranslation();
  const contentKey = userType === 'academic' ? academicKey : generalKey;

  return <Typography>{t(contentKey)}</Typography>;
};
```

#### 5.5 Cultural and Accessibility Considerations
- **Script Support**: Full Tamil Unicode support (UTF-8)
- **Font Loading**: Progressive enhancement with Tamil web fonts
- **Text Direction**: Left-to-right (LTR) layout for both languages
- **Input Methods**: Tamil keyboard support for search functionality
- **Cultural Adaptation**: Respectful academic titles and honorifics
- **Accessibility**: Screen reader support for Tamil content
- **Performance**: Lazy loading of language-specific resources

### 6. Professional Information Architecture

#### 5.1 Scholarly Content Organization
```typescript
// Academic information hierarchy
const informationArchitecture = {
  primaryNavigation: [
    {
      label: "Academic Profile",
      sections: ["Biography", "Education", "Positions", "Research Areas"]
    },
    {
      label: "Publications & Research",
      sections: ["Peer-Reviewed Articles", "Books", "Conference Papers", "Research Projects"]
    },
    {
      label: "Student Supervision",
      sections: ["Alumni Directory", "Current Students", "Success Metrics", "Mentorship Philosophy"]
    },
    {
      label: "Achievements & Recognition",
      sections: ["Awards", "Honors", "Editorial Roles", "Professional Service"]
    },
    {
      label: "Financial Transparency",
      sections: ["Funding Sources", "Expenditure Reports", "Endowment Details", "Impact Assessment"]
    },
    {
      label: "Academic Gallery",
      sections: ["Professional Events", "Student Celebrations", "Research Activities", "Historical Archive"]
    }
  ],

  quickAccess: [
    "Recent Publications",
    "Alumni Success Stories",
    "Current Research Projects",
    "Contact Information",
    "CV Download"
  ],

  searchableContent: [
    "Student names and details",
    "Publication titles and abstracts",
    "Research keywords",
    "Institution names",
    "Geographic locations",
    "Time periods and dates"
  ]
};
```

#### 5.2 Dual-Audience User Experience Patterns

##### 5.2.1 Academic Users (Scholars, Researchers, Students)
- **Progressive Disclosure**: Summary → Details → Full Documentation
- **Cross-Referencing**: Interconnected academic relationships
- **Citation Ready**: All content formatted for academic citation
- **Export Capabilities**: PDF, BibTeX, and other academic formats
- **Advanced Search**: Complex filtering and academic terminology
- **Language Preference**: English primary with Tamil academic terms

##### 5.2.2 General Public Users (Beneficiaries, Community, Family)
- **Simple Navigation**: Clear, intuitive pathways to information
- **Story-Driven Content**: Personal narratives and impact stories
- **Visual Emphasis**: Photos and timelines over text-heavy content
- **Emotional Connection**: Personal journey and community impact
- **Accessible Language**: Simple terminology in preferred language
- **Cultural Context**: Tamil cultural references and local context

##### 5.2.3 Adaptive Interface Features
```typescript
// User type detection and adaptation
const userTypeDetection = {
  academic: {
    indicators: ['university domain', 'research keywords', 'publication access'],
    interface: 'detailed',
    language: 'technical'
  },
  general: {
    indicators: ['local IP', 'Tamil language preference', 'story sections'],
    interface: 'simplified',
    language: 'accessible'
  }
};

// Adaptive content display
const adaptiveFeatures = {
  navigation: {
    academic: 'detailed menu with all sections',
    general: 'simplified menu with key highlights'
  },
  homepage: {
    academic: 'metrics and achievements prominent',
    general: 'personal story and impact prominent'
  },
  search: {
    academic: 'advanced filters and academic terms',
    general: 'simple search with suggestions'
  }
};
```

### 6. Data Management

#### 5.1 Repository-Based Data Architecture
- **No Backend Database**: All data stored directly in GitHub repository
- **Static JSON Files**: Data stored in `public/data/` directory
- **Media Assets**: Images and documents stored in `public/media/` directory
- **GitHub Raw URLs**: Direct links to repository files for media access
- **Version Control**: All data changes tracked through Git commits
- **Data Partitioning**: Clear separation between data and media assets

#### 5.2 GitHub Repository Integration
```typescript
// GitHub raw URL configuration
const GITHUB_CONFIG = {
  owner: 'kgptapps',
  repo: 'sgtrust',
  branch: 'main',
  baseUrl: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public'
};

// Media URL helper functions
const getImageUrl = (path: string) =>
  `${GITHUB_CONFIG.baseUrl}/media/images/${path}`;

const getDocumentUrl = (path: string) =>
  `${GITHUB_CONFIG.baseUrl}/media/documents/${path}`;

const getDataUrl = (path: string) =>
  `${GITHUB_CONFIG.baseUrl}/data/${path}`;

// Example usage in components
const professorPhoto = getImageUrl('professor/profile/main-headshot.jpg');
const studentPhoto = getImageUrl('students/individual/john-doe-2023.jpg');
const fundingDoc = getDocumentUrl('financial/funding/donation-receipt-2023.pdf');

// Full URL examples:
// https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/media/images/professor/profile/main-headshot.jpg
// https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/data/core/students.json
```

#### 5.3 Data Loading Strategy
```typescript
// Data fetching utilities for static JSON files
class DataService {
  private static cache = new Map<string, any>();

  static async loadStudents(): Promise<Student[]> {
    return this.fetchData('core/students.json');
  }

  static async loadGalleryImages(): Promise<GalleryImage[]> {
    return this.fetchData('gallery/images.json');
  }

  static async loadFundingRecords(): Promise<FundingRecord[]> {
    return this.fetchData('financial/funding.json');
  }

  private static async fetchData(path: string) {
    if (this.cache.has(path)) {
      return this.cache.get(path);
    }

    const response = await fetch(getDataUrl(path));
    const data = await response.json();
    this.cache.set(path, data);
    return data;
  }
}
```

#### 5.4 Data Models
```typescript
interface Student {
  id: string;
  name: string;
  photo: string;
  graduationYear: number;
  dissertationTopic: string;
  dissertationAbstract: string;
  currentPosition: string;
  currentInstitution: string;
  currentLocation: string;
  country: string;
  achievements: string[];
  linkedIn?: string;
  email?: string;
  personalWebsite?: string;
  researchInterests: string[];
  publications: StudentPublication[];
  careerTimeline: CareerMilestone[];
  mentorshipStory: string; // Personal story about mentorship experience
  currentProjects: string[];
  awards: StudentAward[];
  testimonial?: string; // Quote about the professor
  gallery: string[]; // Array of image paths for student's photo gallery
  slug: string; // URL-friendly identifier for individual page
}

interface StudentPublication {
  id: string;
  title: string;
  journal: string;
  year: number;
  coAuthors: string[];
  doi?: string;
  abstract: string;
  citationCount?: number;
}

interface CareerMilestone {
  id: string;
  year: number;
  title: string;
  institution: string;
  location: string;
  description: string;
  type: 'education' | 'position' | 'achievement' | 'research';
}

interface StudentAward {
  id: string;
  title: string;
  year: number;
  institution: string;
  description: string;
  category: 'academic' | 'research' | 'professional' | 'service';
}

interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: 'personal' | 'academic' | 'achievement';
  image?: string;
}

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
}

interface FundingRecord {
  id: string;
  date: string;
  source: 'relatives' | 'students' | 'institution' | 'government' | 'other';
  donorName: string;
  amount: number;
  currency: string;
  purpose: string;
  documentation: string; // File path to supporting documents
}

interface Expenditure {
  id: string;
  date: string;
  category: 'research' | 'equipment' | 'student_support' | 'infrastructure' | 'administrative';
  description: string;
  amount: number;
  currency: string;
  fundingSourceId: string; // Links to FundingRecord
  receipts: string[]; // File paths to receipts/invoices
  beneficiaries?: string[]; // Students or projects that benefited
}

interface EndowmentFund {
  id: string;
  name: string;
  institution: string; // "Madras University"
  establishedDate: string;
  initialAmount: number;
  currentValue: number;
  currency: string;
  purpose: string;
  criteria: string; // Eligibility criteria for beneficiaries
  beneficiaries: EndowmentBeneficiary[];
}

interface EndowmentBeneficiary {
  id: string;
  name: string;
  year: number;
  amount: number;
  purpose: string;
  achievement?: string;
}

interface GalleryImage {
  id: string;
  filename: string;
  title: string;
  description: string; // Detailed explanation of the photo
  story?: string; // Extended story or context about when/why photo was taken
  category: 'personal' | 'academic' | 'students' | 'events' | 'awards' | 'research' | 'family';
  subcategory?: string; // e.g., 'graduation_ceremonies', 'conferences', 'childhood'
  dateTaken: string; // When the photo was taken (ISO date format)
  dateDescription?: string; // Human-readable date context (e.g., "During summer vacation 1985")
  location: string; // Where the photo was taken
  venue?: string; // Specific venue/building if applicable
  occasion?: string; // Special occasion or event context
  people: PersonInPhoto[]; // Detailed information about people in the photo
  photographer?: string; // Who took the photo
  tags: string[]; // Additional searchable tags
  featured: boolean; // Whether to show in featured gallery
  thumbnail: string; // GitHub raw URL to optimized thumbnail
  fullSize: string; // GitHub raw URL to full resolution image
  historicalSignificance?: string; // Why this photo is historically important
  relatedPhotos?: string[]; // IDs of related photos from same event/time
}

interface PersonInPhoto {
  name: string;
  relationship: string; // e.g., 'student', 'colleague', 'family member', 'friend'
  position?: string; // Their position/title at the time
  currentStatus?: string; // Where they are now (if known)
  description?: string; // Additional context about the person
  isMainSubject: boolean; // Whether this person is the main focus
}

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // MUI icon name
  subcategories: GallerySubcategory[];
  imageCount: number;
  coverImage: string;
}

interface GallerySubcategory {
  id: string;
  name: string;
  description: string;
  imageCount: number;
}
```

### 6. Gallery System Implementation

#### 6.1 Category-Based Organization
```typescript
// Gallery categories with hierarchical structure
const galleryCategories = {
  personal: {
    name: "Personal & Family",
    subcategories: ["childhood", "family_events", "personal_milestones"],
    icon: "Person"
  },
  academic: {
    name: "Academic Life",
    subcategories: ["graduation_ceremonies", "academic_events", "university_life"],
    icon: "School"
  },
  students: {
    name: "Students & Mentoring",
    subcategories: ["student_graduations", "mentoring_sessions", "student_achievements"],
    icon: "Groups"
  },
  events: {
    name: "Conferences & Events",
    subcategories: ["conferences", "seminars", "workshops", "guest_lectures"],
    icon: "Event"
  },
  awards: {
    name: "Awards & Recognition",
    subcategories: ["award_ceremonies", "honors", "felicitations"],
    icon: "EmojiEvents"
  },
  research: {
    name: "Research Activities",
    subcategories: ["lab_work", "field_research", "collaborations"],
    icon: "Science"
  }
};
```

#### 6.2 Gallery Features
- **Category Filtering**: Tab-based navigation with category counts
- **Subcategory Filtering**: Dropdown filters within each category
- **Search Functionality**: Search by title, description, people, location, or tags
- **People Search**: Find photos by specific individuals
- **Date Range Filtering**: Filter photos by time periods
- **Masonry Layout**: Pinterest-style responsive grid
- **Enhanced Lightbox**: Full-screen viewing with comprehensive metadata panel
- **Story Mode**: Extended narrative view for photo stories
- **People Identification**: Interactive tagging and identification of people
- **Related Photos**: Show photos from same event or time period
- **Historical Context**: Display historical significance and background
- **Lazy Loading**: Progressive image loading for performance
- **Featured Gallery**: Highlighted images on homepage

#### 6.3 Gallery Component Structure
```typescript
// Gallery page component hierarchy
GalleryPage
├── CategoryTabs (Material-UI Tabs)
├── FilterControls
│   ├── SubcategoryFilter
│   ├── SearchInput
│   ├── PeopleFilter
│   ├── DateRangeFilter
│   └── SortOptions
├── GalleryGrid (Masonry layout)
│   └── ImageCard[]
│       ├── ImagePreview
│       ├── QuickMetadata
│       └── PeoplePreview
└── EnhancedImageLightbox (Modal)
    ├── ImageViewer
    ├── MetadataPanel
    │   ├── BasicInfo (date, location, occasion)
    │   ├── PeopleList (with relationships)
    │   ├── PhotoStory (detailed explanation)
    │   ├── HistoricalContext
    │   └── RelatedPhotos
    ├── NavigationControls
    └── ShareOptions
```

#### 6.4 Photo Metadata Structure
```typescript
// Example of comprehensive photo metadata
const photoExample: GalleryImage = {
  id: "grad_ceremony_1995_001",
  title: "PhD Graduation Ceremony - Batch of 1995",
  description: "Annual graduation ceremony where 8 students received their PhD degrees",
  story: "This was a particularly memorable graduation as it marked the largest batch of PhD students to graduate in a single year. The ceremony was held in the main auditorium with families traveling from across the country to attend.",
  dateTaken: "1995-06-15",
  dateDescription: "June 15, 1995 - Annual Graduation Day",
  location: "University Main Auditorium, Chennai",
  venue: "Dr. A.P.J. Abdul Kalam Auditorium",
  occasion: "Annual PhD Graduation Ceremony",
  people: [
    {
      name: "Dr. Rajesh Kumar",
      relationship: "PhD Student",
      position: "Graduating PhD in Computer Science",
      currentStatus: "Professor at MIT, USA",
      isMainSubject: true
    },
    {
      name: "Mrs. Priya Kumar",
      relationship: "Family member",
      description: "Dr. Rajesh's wife",
      isMainSubject: false
    }
  ],
  photographer: "University Photography Department",
  historicalSignificance: "Marked the beginning of the professor's most productive period in PhD supervision"
};
```

### 7. Performance Optimization

#### 6.1 Image Optimization
- **Lazy Loading**: React Intersection Observer for images
- **WebP Format**: Modern image formats with fallbacks
- **Responsive Images**: Multiple sizes for different screen sizes
- **Image Compression**: Optimized file sizes

#### 6.2 Code Splitting
- **Route-based splitting**: Each page as separate chunk
- **Component lazy loading**: Dynamic imports for heavy components
- **Bundle analysis**: Webpack Bundle Analyzer integration

#### 6.3 Caching Strategy
- **Static assets**: Long-term caching with versioning
- **Service Worker**: Cache-first strategy for static content
- **CDN**: GitHub Pages CDN for global distribution

### 7. Responsive Design Implementation

#### 7.1 Breakpoints (Tailwind CSS)
```javascript
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px'  // Extra large
    }
  }
}
```

#### 7.2 Professional Academic Theme Configuration
```typescript
const academicTheme = createTheme({
  palette: {
    primary: {
      main: '#1565C0',        // Deep academic blue
      light: '#5E92F3',       // Light blue for accents
      dark: '#0D47A1',        // Dark blue for headers
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#37474F',        // Professional gray
      light: '#62727B',       // Light gray for text
      dark: '#263238',        // Dark gray for emphasis
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FAFAFA',     // Clean white background
      paper: '#FFFFFF',       // Pure white for cards
      academic: '#F5F5F5'     // Subtle gray for sections
    },
    text: {
      primary: '#212121',     // Dark text for readability
      secondary: '#757575',   // Medium gray for secondary text
      academic: '#424242'     // Professional text color
    },
    success: {
      main: '#2E7D32',        // Academic green for achievements
    },
    warning: {
      main: '#F57C00',        // Academic orange for highlights
    }
  },
  typography: {
    fontFamily: '"Roboto", "Georgia", "Times New Roman", serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      color: '#1565C0'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#37474F'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#37474F'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#212121'
    },
    caption: {
      fontSize: '0.875rem',
      color: '#757575',
      fontStyle: 'italic'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 8,
          border: '1px solid #E0E0E0'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
          fontWeight: 500
        }
      }
    }
  }
});
```

### 8. Repository-Based Data Management

#### 8.1 Data Versioning and Updates
- **Git-based Versioning**: All data changes tracked through Git commits
- **Content Updates**: New photos and data added via Git commits
- **Collaborative Editing**: Multiple contributors can update content
- **Rollback Capability**: Easy rollback to previous versions if needed
- **Change History**: Complete audit trail of all content changes

#### 8.2 Media Asset Management
```bash
# Example repository structure for media assets
docs/public/media/images/
├── professor/profile/main-headshot.jpg          # 1.2MB original
├── students/individual/john-doe-2023.jpg        # 800KB original
├── gallery/academic/graduation-1995.jpg         # 2.1MB original
└── thumbnails/
    ├── small/professor-profile-main-headshot.jpg    # 15KB (150x150)
    ├── medium/professor-profile-main-headshot.jpg   # 45KB (300x300)
    └── large/professor-profile-main-headshot.jpg    # 120KB (600x600)
```

#### 8.3 GitHub Raw URL Integration
```typescript
// All media references use GitHub raw URLs
const imageUrls = {
  professorProfile: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/media/images/professor/profile/main-headshot.jpg',
  studentPhoto: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/media/images/students/individual/john-doe-2023.jpg',
  galleryImage: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/media/images/gallery/academic/graduation-1995.jpg'
};

// Data files also use GitHub raw URLs
const dataUrls = {
  students: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/data/core/students.json',
  gallery: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/data/gallery/images.json',
  funding: 'https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/data/financial/funding.json'
};
```

#### 8.4 Content Management Workflow
1. **Add New Photos**: Commit images to appropriate media directories
2. **Update Metadata**: Update corresponding JSON files with image metadata
3. **Deploy Changes**: GitHub Actions automatically rebuilds and deploys site
4. **Content Review**: Pull request workflow for content review before publishing

### 9. GitHub Pages Deployment (No-Jekyll)

#### 9.0 No-Jekyll Configuration
The website is configured as a **no-Jekyll** static site for optimal React application deployment:

```bash
# .nojekyll file automatically created during build
touch docs/dist/.nojekyll
```

**Benefits of No-Jekyll Setup:**
- ✅ **Underscore Files**: Properly serves files starting with `_` (common in React builds)
- ✅ **Asset Handling**: No Jekyll processing of CSS, JS, and other assets
- ✅ **Faster Deployment**: Skips Jekyll build process entirely
- ✅ **React Compatibility**: Optimal for single-page applications
- ✅ **Custom Routing**: Proper handling of React Router routes
- ✅ **Build Artifacts**: All Vite/React build outputs served correctly

**What No-Jekyll Prevents:**
- ❌ Jekyll processing of Markdown files
- ❌ Liquid template processing
- ❌ Automatic ignoring of underscore-prefixed files
- ❌ Jekyll-specific directory structure requirements

#### 9.1 Build Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/sgtrust/', // Repository name for GitHub Pages (kgptapps/sgtrust)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          i18n: ['react-i18next', 'i18next']
        }
      }
    }
  },
  // Ensure proper handling of public files for GitHub Pages
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
});
```

#### 9.1.1 Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix"
  }
}
```

#### 9.2 GitHub Actions Workflow
```yaml
name: Deploy Professor Website to GitHub Pages

on:
  push:
    branches: [ main ]
    paths: [ 'docs/**' ]
  pull_request:
    branches: [ main ]
    paths: [ 'docs/**' ]
  workflow_dispatch: # Allow manual triggering

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: docs/package-lock.json

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: |
          cd docs
          npm ci

      - name: Build website
        run: |
          cd docs
          npm run build

      - name: Add .nojekyll file
        run: |
          touch docs/dist/.nojekyll

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 9. Development Workflow

#### 9.1 Development Commands
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

#### 9.2 Code Quality Tools
- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Static type checking

### 10. Browser Support

#### 10.1 Target Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 90+

#### 10.2 Polyfills & Fallbacks
- **CSS Grid**: Fallback to Flexbox for older browsers
- **WebP Images**: JPEG/PNG fallbacks
- **Modern JavaScript**: Babel transpilation for older browsers

### 11. Security Considerations

#### 11.1 Static Site Security
- **No server-side vulnerabilities**: Static hosting eliminates server attacks
- **HTTPS**: Enforced by GitHub Pages
- **Content Security Policy**: Implemented via meta tags
- **No sensitive data**: All content is public

#### 11.2 Privacy Considerations
- **Student consent**: Ensure permission for photos and information
- **Contact information**: Limited public contact details
- **Analytics**: Privacy-compliant tracking if implemented

### 12. Monitoring & Analytics

#### 12.1 Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Lighthouse CI**: Automated performance testing
- **Bundle size monitoring**: Track bundle growth

#### 12.2 User Analytics (Optional)
- **Google Analytics 4**: Privacy-compliant user tracking
- **Hotjar**: User behavior analysis
- **GitHub Pages insights**: Basic traffic statistics

---

**Document Version:** 1.0  
**Last Updated:** August 2, 2025  
**Technology Stack Version:** React 18 + MUI 5 + Tailwind CSS 3
