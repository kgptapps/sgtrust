import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Tabs,
  Tab,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  Chip
} from '@mui/material';
import {
  Close as CloseIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Event as EventIcon,
  EmojiEvents as AwardIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Sample gallery data
const galleryData = {
  personal: [
    {
      id: 1,
      src: "/sgtrust/media/images/gallery/personal/family-1.jpg",
      title: "Family Portrait",
      description: "Professor with family members",
      year: "2020"
    },
    {
      id: 2,
      src: "/sgtrust/media/images/gallery/personal/village-1.jpg",
      title: "Village Roots",
      description: "Visiting childhood village",
      year: "2019"
    }
  ],
  academic: [
    {
      id: 3,
      src: "/sgtrust/media/images/gallery/academic/lecture-1.jpg",
      title: "Teaching Excellence",
      description: "Professor delivering a lecture",
      year: "2021"
    },
    {
      id: 4,
      src: "/sgtrust/media/images/gallery/academic/research-1.jpg",
      title: "Research Work",
      description: "In the research laboratory",
      year: "2020"
    }
  ],
  students: [
    {
      id: 5,
      src: "/sgtrust/media/images/gallery/students/graduation-1.jpg",
      title: "PhD Graduation",
      description: "With graduating PhD students",
      year: "2022"
    },
    {
      id: 6,
      src: "/sgtrust/media/images/gallery/students/group-1.jpg",
      title: "Student Group",
      description: "Annual student gathering",
      year: "2021"
    }
  ],
  events: [
    {
      id: 7,
      src: "/sgtrust/media/images/gallery/events/conference-1.jpg",
      title: "International Conference",
      description: "Speaking at academic conference",
      year: "2022"
    },
    {
      id: 8,
      src: "/sgtrust/media/images/gallery/events/award-1.jpg",
      title: "Award Ceremony",
      description: "Receiving academic recognition",
      year: "2021"
    }
  ]
};

const GalleryPage: React.FC = () => {
  const { t } = useTranslation(['content']);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = [
    { key: 'all', label: 'All Photos', icon: <PersonIcon /> },
    { key: 'personal', label: 'Personal', icon: <PersonIcon /> },
    { key: 'academic', label: 'Academic', icon: <SchoolIcon /> },
    { key: 'students', label: 'Students', icon: <SchoolIcon /> },
    { key: 'events', label: 'Events', icon: <EventIcon /> }
  ];

  const getAllPhotos = () => {
    return [
      ...galleryData.personal,
      ...galleryData.academic,
      ...galleryData.students,
      ...galleryData.events
    ];
  };

  const getPhotosForCategory = (category: string) => {
    if (category === 'all') return getAllPhotos();
    return galleryData[category as keyof typeof galleryData] || [];
  };

  const currentPhotos = getPhotosForCategory(categories[selectedTab].key);

  const handleImageClick = (photo: any) => {
    setSelectedImage(photo);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:galleryTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        {t('content:galleryDescription')}
      </Typography>

      {/* Category Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 3 }}
        >
          {categories.map((category, index) => (
            <Tab
              key={category.key}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {category.icon}
                  {category.label}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>

      {/* Photo Grid */}
      <Grid container spacing={3}>
        {currentPhotos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
              onClick={() => handleImageClick(photo)}
            >
              <CardMedia
                component="img"
                height="250"
                image={photo.src}
                alt={photo.title}
                sx={{
                  objectFit: 'cover',
                  backgroundColor: 'grey.200'
                }}
                onError={(e) => {
                  // Fallback for missing images
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {photo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {photo.description}
                </Typography>
                <Chip label={photo.year} size="small" color="primary" />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {currentPhotos.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary">
            No photos available in this category yet.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Photos will be added soon to showcase Professor S. Govindasamy's journey.
          </Typography>
        </Box>
      )}

      {/* Image Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain'
                }}
              />
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {selectedImage.description}
                </Typography>
                <Chip label={selectedImage.year} color="primary" />
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default GalleryPage;
