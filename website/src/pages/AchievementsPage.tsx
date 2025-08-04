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
  Button
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
  Star as StarIcon
} from '@mui/icons-material';
import { publications } from '../data/publications';

interface Achievement {
  id: string;
  title: string;
  description: string;
  institution?: string;
  year?: number;
  category: 'academic' | 'professional';
  subcategory?: 'research-projects' | 'publications' | 'magazines-newspapers';
  type: string;
  image?: string;
  certificate?: string;
  details?: string[];
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
    // Magazines and Newspapers

    {
      id: 'drug-proven-correct',
      title: 'Drug Proven Correct',
      description: 'Drug research validation coverage',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/drugprovencorrect.JPG'
    },
    {
      id: 'educational-trust',
      title: 'Educational Trust',
      description: 'Educational trust coverage',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/educationaltrust.JPG'
    },
    {
      id: 'felicitation',
      title: 'Felicitation',
      description: 'Felicitation ceremony coverage',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/felicitation.JPG'
    },
    {
      id: 'first-trial-result',
      title: 'First Trial Result',
      description: 'First trial result announcement',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/firsttrialresult.JPG'
    },
    {
      id: 'magazine',
      title: 'Magazine',
      description: 'Magazine feature',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Magazine',
      image: '/sgtrust/media/newspapers/magazine.JPG'
    },
    {
      id: 'newspaper-article',
      title: 'Newspaper Article',
      description: 'Newspaper article feature',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/newspaperarticle.JPG'
    },
    {
      id: 'newspaper-award',
      title: 'Newspaper Award',
      description: 'Newspaper award coverage',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/newspaperaward.JPG'
    },
    {
      id: 'statue-request',
      title: 'Statue Request',
      description: 'Statue request coverage',
      category: 'professional' as const,
      subcategory: 'magazines-newspapers' as const,
      type: 'Newspaper',
      image: '/sgtrust/media/newspapers/statuerequest.JPG'
    },

    // Professional Recognition
    {
      id: 'best-teacher-2015',
      title: 'Best Teacher Award',
      description: 'State-level recognition for excellence in teaching',
      institution: 'Tamil Nadu Government',
      year: 2015,
      category: 'professional' as const,
      type: 'Award',
      details: [
        'Selected from 10,000+ teachers statewide',
        'Innovative teaching methodologies',
        'Student feedback excellence'
      ]
    },
    {
      id: 'industry-collaboration-2018',
      title: 'Industry Collaboration Excellence',
      description: 'Recognition for bridging academia and industry',
      institution: 'Confederation of Indian Industry',
      year: 2018,
      category: 'professional' as const,
      type: 'Recognition',
      details: [
        'Established 15+ industry partnerships',
        'Technology transfer initiatives',
        'Student placement excellence'
      ]
    },

    // Publications Preview - Top 20 most recent publications
    ...publications
      .sort((a, b) => b.year - a.year) // Sort by year descending
      .slice(0, 20) // Take only the first 20
      .map(pub => ({
        id: pub.id,
        title: pub.title,
        description: `${pub.authors.join(', ')} (${pub.year})`,
        institution: pub.journal,
        year: pub.year,
        category: 'professional' as const,
        subcategory: 'publications' as const,
        type: 'Publication',
        details: [
          `Authors: ${pub.authors.join(', ')}`,
          `Journal: ${pub.journal}`,
          `Year: ${pub.year}`,
          ...(pub.volume ? [`Volume: ${pub.volume}`] : []),
          ...(pub.pages ? [`Pages: ${pub.pages}`] : []),
          ...(pub.doi ? [`DOI: ${pub.doi}`] : []),
          ...(pub.url ? [`URL: ${pub.url}`] : [])
        ]
      }))
  ]
};

const AchievementsPage: React.FC = () => {
  const [legacyAchievementsData, setLegacyAchievementsData] = useState<AchievementsMetadata | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [expandedYear, setExpandedYear] = useState<string | false>(false);
  const [selectedCategory, setSelectedCategory] = useState<'academic' | 'professional'>('academic');
  const [selectedSubcategory, setSelectedSubcategory] = useState<'research-projects' | 'publications' | 'magazines-newspapers'>('research-projects');
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
      default:
        return <StarIcon color="action" />;
    }
  };

  const getCategoryColor = (category: string): 'primary' | 'secondary' | 'default' => {
    switch (category) {
      case 'academic':
        return 'primary';
      case 'professional':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getSubcategoryColor = (subcategory?: string): 'info' | 'success' | 'error' | 'default' => {
    switch (subcategory) {
      case 'research-projects':
        return 'success';
      case 'publications':
        return 'info';
      case 'magazines-newspapers':
        return 'error';
      default:
        return 'default';
    }
  };

  const getSubcategoryLabel = (subcategory?: string): string => {
    switch (subcategory) {
      case 'research-projects':
        return 'Research';
      case 'publications':
        return 'Publication';
      case 'magazines-newspapers':
        return 'Media';
      default:
        return '';
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

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: 'academic' | 'professional') => {
    setSelectedCategory(newValue);
    setSelectedSubcategory('research-projects'); // Reset subcategory when changing main category
  };

  const handleSubcategoryChange = (_event: React.SyntheticEvent, newValue: 'research-projects' | 'publications' | 'magazines-newspapers') => {
    setSelectedSubcategory(newValue);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  // Filter achievements based on selected category and subcategory
  const getFilteredAchievements = () => {
    const categoryAchievements = achievementsData[selectedCategory];

    if (selectedCategory === 'academic') {
      return categoryAchievements;
    }

    return categoryAchievements.filter(achievement =>
      'subcategory' in achievement && achievement.subcategory === selectedSubcategory
    );
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
          variant="fullWidth"
        >
          <Tab
            label="Academic Achievements"
            value="academic"
            icon={<AcademicIcon />}
            iconPosition="start"
          />
          <Tab
            label="Professional Achievements"
            value="professional"
            icon={<BusinessIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {/* Subcategory Tabs for Professional Achievements */}
      {selectedCategory === 'professional' && (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Research Projects" value="research-projects" />
            <Tab label="Publications" value="publications" />
            <Tab label="Magazines & Newspapers" value="magazines-newspapers" />
          </Tabs>
        </Box>
      )}

      {/* Publications Preview Notice */}
      {selectedCategory === 'professional' && selectedSubcategory === 'publications' && (
        <Box sx={{ mb: 3, p: 3, backgroundColor: 'primary.light', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ color: 'primary.contrastText', mb: 1 }}>
                Publications Preview
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.contrastText', opacity: 0.9 }}>
                Showing 20 most recent publications out of {publications.length} total publications
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.open('/sgtrust/publications', '_blank')}
              sx={{
                fontWeight: 'bold',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4
                }
              }}
            >
              View All {publications.length} Publications
            </Button>
          </Box>
        </Box>
      )}

      {/* Publications Scientific Format */}
      {selectedCategory === 'professional' && selectedSubcategory === 'publications' ? (
        <Box>
          {getFilteredAchievements().map((achievement, index) => (
            <Box key={achievement.id} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2, backgroundColor: 'background.paper', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 30 }}>
                  {index + 1}.
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                    {achievement.description}. <em>{achievement.institution}</em>. {achievement.year}.
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                    <Chip
                      label={achievement.type}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    {achievement.details && achievement.details.some(detail => detail.includes('DOI:')) && (
                      <Link
                        href={`https://doi.org/${achievement.details.find(detail => detail.includes('DOI:'))?.replace('DOI: ', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ ml: 1 }}
                      >
                        DOI
                      </Link>
                    )}
                    {achievement.details && achievement.details.some(detail => detail.includes('URL:')) && (
                      <Link
                        href={achievement.details.find(detail => detail.includes('URL:'))?.replace('URL: ', '')}
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
            </Box>
          ))}
        </Box>
      ) : getFilteredAchievements().length === 0 ? (
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
        /* Regular Achievements Grid */
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4
        }}>
          {getFilteredAchievements().map((achievement) => (
            <Box key={achievement.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
                onClick={() => handleAchievementClick(achievement)}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Achievement Image */}
                  {'image' in achievement && achievement.image && (
                    <Box sx={{ mb: 2 }}>
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </Box>
                  )}

                  {/* Achievement Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {getCategoryIcon(achievement.category)}
                    <Box sx={{ ml: 2, flexGrow: 1 }}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {achievement.title}
                      </Typography>
                      {achievement.year && (
                        <Chip
                          label={achievement.year}
                          color={getCategoryColor(achievement.category)}
                          size="small"
                        />
                      )}
                    </Box>
                  </Box>

                  {/* Achievement Details */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {achievement.description}
                  </Typography>

                  {achievement.institution && (
                    <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                      {achievement.institution}
                    </Typography>
                  )}

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip
                      label={achievement.type}
                      variant="outlined"
                      size="small"
                      color={getCategoryColor(achievement.category)}
                    />
                    {'subcategory' in achievement && achievement.subcategory && (
                      <Chip
                        label={getSubcategoryLabel(achievement.subcategory)}
                        size="small"
                        color={getSubcategoryColor(achievement.subcategory)}
                        variant="filled"
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
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
    </Container>
  );
};

export default AchievementsPage;
