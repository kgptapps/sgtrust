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
    }
  ]
};

const AchievementsPage: React.FC = () => {
  const [legacyAchievementsData, setLegacyAchievementsData] = useState<AchievementsMetadata | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [expandedYear, setExpandedYear] = useState<string | false>(false);
  const [selectedCategory, setSelectedCategory] = useState<'academic' | 'professional'>('academic');

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
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  // Filter achievements based on selected category and subcategory
  const getFilteredAchievements = () => {
    return achievementsData[selectedCategory];
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
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
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
    </Container>
  );
};

export default AchievementsPage;
