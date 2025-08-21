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
      image: '/media/newspapers/drugprovencorrect.JPG',
      date: 'Research Coverage',
      category: 'newspaper',
      content: 'Newspaper coverage of Professor Govindasamy\'s drug research validation work...'
    },
    {
      id: 2,
      title: 'Educational Trust',
      description: 'Educational trust coverage',
      image: '/media/newspapers/educationaltrust.JPG',
      date: 'Community Service',
      category: 'newspaper',
      content: 'Coverage of Professor Govindasamy\'s educational trust initiatives...'
    },
    {
      id: 3,
      title: 'Felicitation',
      description: 'Felicitation ceremony coverage',
      image: '/media/newspapers/felicitation.JPG',
      date: 'Recognition',
      category: 'newspaper',
      content: 'Newspaper coverage of felicitation ceremony honoring Professor Govindasamy...'
    },
    {
      id: 4,
      title: 'First Trial Result',
      description: 'First trial result announcement',
      image: '/media/newspapers/firsttrialresult.JPG',
      date: 'Research Milestone',
      category: 'newspaper',
      content: 'Coverage of significant research trial results...'
    },
    {
      id: 5,
      title: 'Magazine Feature',
      description: 'Magazine feature article',
      image: '/media/newspapers/magazine.JPG',
      date: 'Profile',
      category: 'magazine',
      content: 'In-depth magazine profile of Professor Govindasamy\'s contributions...'
    },
    {
      id: 6,
      title: 'Newspaper Article',
      description: 'Newspaper article feature',
      image: '/media/newspapers/newspaperarticle.JPG',
      date: 'Feature Story',
      category: 'newspaper',
      content: 'Feature newspaper article highlighting Professor Govindasamy\'s work...'
    },
    {
      id: 7,
      title: 'Newspaper Award',
      description: 'Newspaper award coverage',
      image: '/media/newspapers/newspaperaward.JPG',
      date: 'Award Recognition',
      category: 'newspaper',
      content: 'Newspaper coverage of award recognition for Professor Govindasamy...'
    },
    {
      id: 8,
      title: 'Statue Request',
      description: 'Statue request coverage',
      image: '/media/newspapers/statuerequest.JPG',
      date: 'Memorial Initiative',
      category: 'newspaper',
      content: 'Coverage of community request for memorial statue...'
    },
    {
      id: 9,
      title: '2-Day Fasting for Pay Raise',
      description: 'Professor\'s protest for academic justice and fair compensation',
      image: '/media/images/articles/2dayfastingforpayraise.jpeg',
      date: 'Academic Protest',
      category: 'newspaper',
      content: 'Documentation of Professor S. Govindasamy\'s principled stand through a 2-day fasting protest demanding fair pay raise and academic justice. This demonstrates his commitment to fighting for the rights of educators and his unwavering dedication to academic principles even in the face of institutional challenges.'
    }
  ],
  photographs: [
  ],
  documents: [
    {
      id: 12,
      title: "MUTA 1",
      description: "",
      image: "/media/images/articles/Muta1.jpg",
      date: "Family Heritage",
      category: "family",
      content: "A cherished family document showing Professor S. Govindasamy with his father (Appa) and family members, capturing precious moments of family bonds and heritage."
    },
    {
      id: 13,
      title: "MUTA 2",
      description: "",
      image: "/media/images/articles/Muta2.jpg",
      date: "Family Heritage",
      category: "family",
      content: "Family documentation showing the close-knit family relationships and the importance of family in Professor's life."
    },
    {
      id: 14,
      title: "MUTA 3",
      description: "",
      image: "/media/images/articles/Muta3.jpg",
      date: "Family Heritage",
      category: "family",
      content: "Family celebration documentation showing the joy and togetherness that characterized Professor's family life and values."
    },
    {
      id: 15,
      title: "MUTA 4",
      description: "",
      image: "/media/images/articles/Muta4.jpg",
      date: "Family Heritage",
      category: "family",
      content: "Multi-generational family documentation highlighting the strong family traditions and bonds that shaped Professor's character and values."
    },
    {
      id: 16,
      title: "MUTA 5",
      description: "",
      image: "/media/images/articles/Muta5.jpg",
      date: "Family Heritage",
      category: "family",
      content: "Family legacy documentation representing the enduring heritage that influenced Professor's journey from humble beginnings to academic excellence."
    },

  ],
  historical: [
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
