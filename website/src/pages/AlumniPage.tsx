import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

// Alumni data
interface AlumniProfile {
  id: number;
  name: string;
  title: string;
  department: string;
  institution: string;
  location?: string;
  tenure?: string;
  image: string;
}

const alumniProfiles: AlumniProfile[] = [
  {
    id: 1,
    name: "Professor V. Elangovan",
    title: "Professor",
    department: "Department of Biochemistry",
    institution: "University of Madras",
    tenure: "Since 2007 to till date",
    image: "/sgtrust/media/images/alumni/professorv.elangovan.jpeg"
  },
  {
    id: 2,
    name: "Dr. S. Maneemegalai",
    title: "Associate Professor in Biochemistry",
    department: "Centre for Distance and Online Education",
    institution: "Bharathidasan University",
    location: "Tiruchirapalli - 620024, Tamil Nadu, India",
    image: "/sgtrust/media/images/alumni/professors.maneemegalai.png"
  }
];

const AlumniPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <SchoolIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Alumni
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Distinguished alumni who were mentored by Professor S. Govindasamy
        </Typography>
      </Box>

      {/* Alumni Profiles */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
          justifyContent: 'center'
        }}
      >
        {alumniProfiles.map((alumni) => (
          <Card
            key={alumni.id}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6
              }
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image={alumni.image}
              alt={alumni.name}
              sx={{
                objectFit: 'contain',
                backgroundColor: 'grey.50',
                objectPosition: 'center top'
              }}
            />
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                {alumni.name}
              </Typography>

              <Typography variant="h6" color="text.primary" sx={{ mb: 1, fontWeight: 500 }}>
                {alumni.title}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                {alumni.department}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1, fontWeight: 500 }}>
                {alumni.institution}
              </Typography>

              {alumni.location && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {alumni.location}
                </Typography>
              )}

              {alumni.tenure && (
                <Typography variant="body2" color="primary.main" sx={{ fontWeight: 500 }}>
                  {alumni.tenure}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Legacy Note */}
      <Box sx={{ mt: 6, textAlign: 'center', p: 4, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" color="primary.main" gutterBottom>
          Academic Legacy
        </Typography>
        <Typography variant="body1" color="text.secondary">
          These distinguished alumni represent the continuing impact of Professor S. Govindasamy's
          mentorship and dedication to academic excellence. Their achievements in biochemistry and
          education honor his legacy of scholarly pursuit and knowledge dissemination.
        </Typography>
      </Box>
    </Container>
  );
};

export default AlumniPage;
