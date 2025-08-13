import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Chip
} from '@mui/material';
import {
  Close as CloseIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Photo interface
interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  year: string;
}

// Gallery photos data - Real photos from Professor S. Govindasamy's collection
const galleryPhotos: Photo[] = [
  // BLACK AND WHITE PHOTOS (Historical/Older Photos)
  {
    id: 1,
    src: "/media/images/newgalleryphotos/graduationphoto.jpeg",
    title: "Graduation Photo",
    description: "Professor's graduation ceremony moment",
    year: "Academic Milestones"
  },
  {
    id: 2,
    src: "/media/images/newgalleryphotos/graduationphotowithfriends.jpeg",
    title: "Graduation with Friends",
    description: "Celebrating graduation with fellow graduates and friends",
    year: "Academic Milestones"
  },
  {
    id: 3,
    src: "/media/images/gallery/youngprofessors.govindasamy.jpg",
    title: "Young Professor Govindasamy",
    description: "Professor S. Govindasamy in his younger days",
    year: "Early Career"
  },
  {
    id: 4,
    src: "/media/images/gallery/withhisgrandmaandolderbrother.jpg",
    title: "With Grandma and Older Brother",
    description: "Precious family moment with grandmother and brother",
    year: "Family"
  },
  {
    id: 5,
    src: "/media/images/gallery/familyphoto.jpg",
    title: "Family Photo",
    description: "Professor with his beloved family",
    year: "Family"
  },
  {
    id: 6,
    src: "/media/images/gallery/familypicture.jpg",
    title: "Family Picture",
    description: "Another cherished family moment",
    year: "Family"
  },
  {
    id: 7,
    src: "/media/images/gallery/withhisphdguide.jpg",
    title: "With His PhD Guide",
    description: "With his respected PhD supervisor and guide",
    year: "Academic"
  },
  {
    id: 8,
    src: "/media/images/newgalleryphotos/inthelab.jpeg",
    title: "In the Laboratory",
    description: "Professor conducting research in the biochemistry laboratory",
    year: "Research"
  },
  {
    id: 9,
    src: "/media/images/gallery/photowithcousin.jpg",
    title: "With Librarian M. Veerasamy",
    description: "With respected librarian M. Veerasamy",
    year: "Professional"
  },
  {
    id: 10,
    src: "/media/images/gallery/photowithcollegues.jpg",
    title: "Photo with Colleagues",
    description: "Group photo with university colleagues",
    year: "Professional"
  },
  {
    id: 11,
    src: "/media/images/gallery/withcolleagues.jpg",
    title: "With Colleagues",
    description: "Group moment with university colleagues",
    year: "Professional"
  },
  {
    id: 12,
    src: "/media/images/gallery/withmorecolleauges.jpg",
    title: "With More Colleagues",
    description: "Another group photo with colleagues",
    year: "Professional"
  },
  {
    id: 13,
    src: "/media/images/newgalleryphotos/withuniversitypersonnel.jpeg",
    title: "With University Personnel",
    description: "Group photo with university administrative personnel",
    year: "Professional"
  },
  {
    id: 14,
    src: "/media/images/gallery/addressingstudents.jpg",
    title: "Addressing Students",
    description: "Professor delivering a lecture to students",
    year: "Teaching"
  },
  {
    id: 15,
    src: "/media/images/gallery/athisoffice.jpg",
    title: "At His Office",
    description: "Professor at his university office",
    year: "Professional"
  },
  {
    id: 16,
    src: "/media/images/gallery/attendingexecutivemeeting.jpg",
    title: "Executive Meeting",
    description: "Attending university executive meeting",
    year: "Administrative"
  },
  {
    id: 17,
    src: "/media/images/gallery/debate.jpg",
    title: "Academic Debate",
    description: "Participating in academic debate or discussion",
    year: "Academic"
  },
  {
    id: 18,
    src: "/media/images/gallery/discussion.jpg",
    title: "Discussion",
    description: "Engaged in academic discussion with peers",
    year: "Academic"
  },
  {
    id: 19,
    src: "/media/images/gallery/vistingprofessor.jpg",
    title: "Visiting Professor",
    description: "With visiting professor at university",
    year: "Academic"
  },
  {
    id: 20,
    src: "/media/images/gallery/withdelegate.jpg",
    title: "With Delegate",
    description: "Meeting with academic delegate",
    year: "Professional"
  },
  {
    id: 21,
    src: "/media/images/gallery/valedictoryfunction.jpg",
    title: "Valedictory Function",
    description: "At university valedictory function",
    year: "Academic"
  },
  {
    id: 22,
    src: "/media/images/gallery/awardscermony.jpg",
    title: "Awards Ceremony",
    description: "Receiving academic recognition and awards",
    year: "Recognition"
  },
  {
    id: 23,
    src: "/media/images/gallery/congratulations.jpg",
    title: "Congratulations",
    description: "Receiving congratulations from colleagues",
    year: "Achievement"
  },
  {
    id: 24,
    src: "/media/images/gallery/celebration.jpg",
    title: "Celebration",
    description: "Academic celebration with colleagues",
    year: "Events"
  },
  {
    id: 25,
    src: "/media/images/gallery/unniversitycelebration.jpg",
    title: "University Celebration",
    description: "University celebration and festivities",
    year: "Events"
  },
  {
    id: 26,
    src: "/media/images/gallery/distinguishedguest.jpg",
    title: "Distinguished Guest",
    description: "With distinguished guests at university event",
    year: "Events"
  },
  {
    id: 27,
    src: "/media/images/gallery/playingvolleyball.jpg",
    title: "Playing Volleyball",
    description: "Professor enjoying volleyball game",
    year: "Sports"
  },
  {
    id: 28,
    src: "/media/images/gallery/longjump.jpg",
    title: "Long Jump",
    description: "Professor participating in sports - long jump",
    year: "Sports"
  },
  {
    id: 29,
    src: "/media/images/gallery/shotput.jpg",
    title: "Shot Put",
    description: "Professor participating in shot put event",
    year: "Sports"
  },
  {
    id: 30,
    src: "/media/images/newgalleryphotos/badminton.jpeg",
    title: "Playing Badminton",
    description: "Professor enjoying a game of badminton",
    year: "Sports"
  },
  {
    id: 31,
    src: "/media/images/newgalleryphotos/cricket.jpeg",
    title: "Playing Cricket",
    description: "Professor participating in a cricket match",
    year: "Sports"
  },
  {
    id: 32,
    src: "/media/images/newgalleryphotos/asastageactor.jpeg",
    title: "As a Stage Actor",
    description: "Professor showcasing his theatrical talents as a stage actor",
    year: "Arts & Culture"
  },
  {
    id: 33,
    src: "/media/images/gallery/cyclingthroughtown.jpg",
    title: "Cycling Through Town",
    description: "Professor cycling through the town",
    year: "Personal"
  },
  {
    id: 34,
    src: "/media/images/gallery/funtimewithfriends.jpg",
    title: "Fun Time with Friends",
    description: "Enjoying leisure time with friends and colleagues",
    year: "Social"
  },
  {
    id: 35,
    src: "/media/images/gallery/hangoutwithprof.jpg",
    title: "Hangout with Professor",
    description: "Casual time with fellow professors",
    year: "Social"
  },
  {
    id: 36,
    src: "/media/images/gallery/tripwithfriends.jpg",
    title: "Trip with Friends",
    description: "Enjoying trip with friends and colleagues",
    year: "Travel"
  },

  // COLORED PHOTOS (More Recent Photos)
  {
    id: 37,
    src: "/media/images/newgalleryphotos/withformergovernoroftamilnadu.jpeg",
    title: "With Former Governor of Tamil Nadu",
    description: "Professor with the former Governor of Tamil Nadu",
    year: "Public Service"
  },
  {
    id: 38,
    src: "/media/images/newgalleryphotos/withcongressmanARM.jpeg",
    title: "With Congressman ARM",
    description: "Meeting with distinguished Congressman ARM",
    year: "Public Service"
  },
  {
    id: 39,
    src: "/media/images/gallery/politicalleader.jpg",
    title: "With Political Leader",
    description: "Meeting with political leader",
    year: "Public Service"
  },
  {
    id: 40,
    src: "/media/images/gallery/politicalpartyleader.jpg",
    title: "Political Party Leader",
    description: "With political party leader",
    year: "Public Service"
  },
  {
    id: 41,
    src: "/media/images/gallery/anotherpoliticalleader.jpeg",
    title: "Another Political Leader",
    description: "Meeting with another distinguished political leader",
    year: "Public Service"
  },
  {
    id: 42,
    src: "/media/images/gallery/ataconfrenceinsingapore.jpg",
    title: "Conference in Singapore",
    description: "At an academic conference in Singapore",
    year: "International"
  },
  {
    id: 43,
    src: "/media/images/gallery/withhisstudentinsingapore.jpg",
    title: "With Student in Singapore",
    description: "With his student during Singapore visit",
    year: "International"
  },
  {
    id: 44,
    src: "/media/images/gallery/wholecampus.jpeg",
    title: "Whole Campus",
    description: "View of the entire university campus",
    year: "Campus Life"
  }
];

const GalleryPage: React.FC = () => {
  const { t } = useTranslation(['content']);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageClick = (photo: Photo) => {
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
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('content:galleryDescription')}
      </Typography>

      {/* Photo Grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
        {galleryPhotos.map((photo) => (
          <Box key={photo.id}>
            <Card
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
              onClick={() => handleImageClick(photo)}
            >
              <Box sx={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={photo.src}
                  alt={photo.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    backgroundColor: 'grey.200'
                  }}
                  onError={(e) => {
                    // Fallback for missing images
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </Box>
              <Box sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {photo.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, flexGrow: 1, fontSize: '0.75rem' }}>
                  {photo.description}
                </Typography>
                <Chip label={photo.year} size="small" color="primary" sx={{ alignSelf: 'flex-start', fontSize: '0.7rem', height: '20px' }} />
              </Box>
            </Card>
          </Box>
        ))}
      </Box>

      {galleryPhotos.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary">
            No photos available yet.
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
