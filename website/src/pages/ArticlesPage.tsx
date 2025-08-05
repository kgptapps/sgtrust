import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  Tab,
  Tabs
} from '@mui/material';
import {
  Close as CloseIcon,
  PhotoCamera as PhotoIcon,
  Article as ArticleIcon,
  History as HistoryIcon,
  School as SchoolIcon
} from '@mui/icons-material';

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

// Articles data including magazines and newspapers
const articlesData = {
  magazines_newspapers: [
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
      description: 'Newspaper article feature',
      image: '/sgtrust/media/newspapers/newspaperarticle.JPG',
      date: 'Feature Story',
      category: 'newspaper',
      content: 'Feature newspaper article highlighting Professor Govindasamy\'s work...'
    },
    {
      id: 7,
      title: 'Newspaper Award',
      description: 'Newspaper award coverage',
      image: '/sgtrust/media/newspapers/newspaperaward.JPG',
      date: 'Award Recognition',
      category: 'newspaper',
      content: 'Newspaper coverage of award recognition for Professor Govindasamy...'
    },
    {
      id: 8,
      title: 'Statue Request',
      description: 'Statue request coverage',
      image: '/sgtrust/media/newspapers/statuerequest.JPG',
      date: 'Memorial Initiative',
      category: 'newspaper',
      content: 'Coverage of community request for memorial statue...'
    },
    {
      id: 9,
      title: '2-Day Fasting for Pay Raise',
      description: 'Professor\'s protest for academic justice and fair compensation',
      image: '/sgtrust/media/images/articles/2dayfastingforpayraise.jpeg',
      date: 'Academic Protest',
      category: 'newspaper',
      content: 'Documentation of Professor S. Govindasamy\'s principled stand through a 2-day fasting protest demanding fair pay raise and academic justice. This demonstrates his commitment to fighting for the rights of educators and his unwavering dedication to academic principles even in the face of institutional challenges.'
    }
  ],
  photographs: [
    {
      id: 10,
      title: "Early Academic Years",
      description: "Rare photographs from Professor's early teaching career",
      image: "/sgtrust/media/images/articles/early-academic.jpg",
      date: "1970-1980",
      category: "academic",
      content: "These rare photographs capture Professor S. Govindasamy during his early years as an educator..."
    },
    {
      id: 11,
      title: "Village Roots Documentation",
      description: "Photographic evidence of humble beginnings",
      image: "/sgtrust/media/images/articles/village-roots.jpg",
      date: "1950-1970",
      category: "personal",
      content: "A collection of photographs documenting the professor's village origins and family background..."
    },
    {
      id: 15,
      title: "Appa - Family Portrait 1",
      description: "Precious family moments with father and relatives",
      image: "/sgtrust/media/images/articles/Muta1.jpg",
      date: "Family Heritage",
      category: "family",
      content: "A cherished family photograph showing Professor S. Govindasamy with his father (Appa) and family members, capturing precious moments of family bonds and heritage."
    },
    {
      id: 16,
      title: "Appa - Family Portrait 2",
      description: "Another treasured family gathering",
      image: "/sgtrust/media/images/articles/Muta2.jpg",
      date: "Family Heritage",
      category: "family",
      content: "Another beautiful family photograph documenting the close-knit family relationships and the importance of family in Professor's life."
    },
    {
      id: 17,
      title: "Appa - Family Portrait 3",
      description: "Family celebration and togetherness",
      image: "/sgtrust/media/images/articles/Muta3.jpg",
      date: "Family Heritage",
      category: "family",
      content: "A family celebration photograph showing the joy and togetherness that characterized Professor's family life and values."
    },
    {
      id: 18,
      title: "Appa - Family Portrait 4",
      description: "Multi-generational family bonds",
      image: "/sgtrust/media/images/articles/Muta4.jpg",
      date: "Family Heritage",
      category: "family",
      content: "A multi-generational family photograph highlighting the strong family traditions and bonds that shaped Professor's character and values."
    },
    {
      id: 19,
      title: "Appa - Family Portrait 5",
      description: "Family legacy and heritage",
      image: "/sgtrust/media/images/articles/Muta5.jpg",
      date: "Family Heritage",
      category: "family",
      content: "The final photograph in this precious family collection, representing the enduring legacy and heritage that influenced Professor's journey from humble beginnings to academic excellence."
    }
  ],
  documents: [
    {
      id: 20,
      title: "Original Research Papers",
      description: "Handwritten research notes and early publications",
      image: "/sgtrust/media/images/articles/research-papers.jpg",
      date: "1975-1985",
      category: "research",
      content: "Original manuscripts and research documentation showing the evolution of academic thought..."
    },
    {
      id: 21,
      title: "Student Testimonials",
      description: "Letters and testimonials from former students",
      image: "/sgtrust/media/images/articles/testimonials.jpg",
      date: "1980-2020",
      category: "students",
      content: "A compilation of heartfelt letters and testimonials from students across decades..."
    }
  ],
  historical: [
    {
      id: 22,
      title: "University Archives",
      description: "Historical records from university archives",
      image: "/sgtrust/media/images/articles/university-archives.jpg",
      date: "1970-2020",
      category: "institutional",
      content: "Official university records documenting the professor's contributions and achievements..."
    }
  ]
};

const ArticlesPage: React.FC = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = [
    { key: 'all', label: 'All Articles', icon: <ArticleIcon /> },
    { key: 'magazines_newspapers', label: 'Magazines & Newspapers', icon: <ArticleIcon /> },
    { key: 'photographs', label: 'Photographs', icon: <PhotoIcon /> },
    { key: 'documents', label: 'Documents', icon: <ArticleIcon /> },
    { key: 'historical', label: 'Historical Records', icon: <HistoryIcon /> }
  ];

  const getAllArticles = () => {
    return [
      ...articlesData.magazines_newspapers,
      ...articlesData.photographs,
      ...articlesData.documents,
      ...articlesData.historical
    ];
  };

  const getArticlesByCategory = (category: string) => {
    if (category === 'all') return getAllArticles();
    return articlesData[category as keyof typeof articlesData] || [];
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedArticle(null);
  };

  const currentArticles = getArticlesByCategory(categories[selectedTab].key);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 40%, ${theme.palette.primary.main}20 100%)`,
          color: theme.palette.text.primary,
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              📚 Articles & Documentation
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
              Photographic Evidence & Historical Records
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '800px', mx: 'auto' }}>
              Explore rare photographs, original documents, and historical records that chronicle 
              Professor S. Govindasamy's remarkable journey from village to academic excellence.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500
              }
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category.key}
                icon={category.icon}
                label={category.label}
                iconPosition="start"
                sx={{ gap: 1 }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Articles Grid */}
        <Grid container spacing={4}>
          {currentArticles.map((article) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={article.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${theme.palette.primary.main}20`
                  }
                }}
                onClick={() => handleArticleClick(article)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: theme.palette.grey[200]
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {article.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={article.date}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label={article.category}
                      size="small"
                      sx={{
                        backgroundColor: `${theme.palette.secondary.main}20`,
                        color: theme.palette.secondary.main
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {currentArticles.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <SchoolIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No articles found in this category
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Articles and documentation will be added soon.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Article Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxHeight: '90vh'
          }
        }}
      >
        {selectedArticle && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="h2">
                {selectedArticle.title}
              </Typography>
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    maxHeight: '400px',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                <Chip label={selectedArticle.date} color="primary" />
                <Chip label={selectedArticle.category} variant="outlined" />
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                {selectedArticle.content}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ArticlesPage;
