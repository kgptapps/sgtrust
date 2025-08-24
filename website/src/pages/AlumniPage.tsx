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
    name: "S. Subramanian",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 2,
    name: "A. Kandasamy",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 3,
    name: "Samuel William",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 4,
    name: "N. Sekar",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 5,
    name: "N. Balasubramanian",
    title: "Associate Professor",
    department: "University of Colorado Anschutz Medical Campus",
    institution: "Aurora, CO 80045",
    image: "/media/images/alumni/N. Balasubramanian.jpeg"
  },
  {
    id: 6,
    name: "P. Kamaraj",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 7,
    name: "S. Manonmani",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 8,
    name: "V. Bhuvaragamurthy",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 9,
    name: "Professor V. Elangovan",
    title: "Professor",
    department: "Department of Biochemistry",
    institution: "University of Madras",
    tenure: "Since 2007 to till date",
    image: "/media/images/alumni/professorv.elangovan.jpeg"
  },
  {
    id: 10,
    name: "Dr. S. Maneemegalai",
    title: "Associate Professor in Biochemistry",
    department: "Centre for Distance and Online Education",
    institution: "Bharathidasan University",
    location: "Tiruchirapalli - 620024, Tamil Nadu, India",
    image: "/media/images/alumni/professors.maneemegalai.png"
  },
  {
    id: 11,
    name: "D. Nandini",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 12,
    name: "S. Balasubramanian",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 13,
    name: "G. Vijayan Siva",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 14,
    name: "P. Ravichandran",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 15,
    name: "P. Latha",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 16,
    name: "V. Saraswathi",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 17,
    name: "R. Saraswathi",
    title: "Staff Scientist · Research specialist · GUEST FACULTY",
    department: "Woman scientist",
    institution: "DST, Delhi",
    image: "/media/images/alumni/rsaraswathi.jpeg"
  },
  {
    id: 18,
    name: "V. Palani",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 19,
    name: "R. Ravi",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 20,
    name: "K. Karthikeyan",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "Singapore",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 21,
    name: "R. K. Senthilkumaran",
    title: "PhD",
    department: "Biochemistry",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 22,
    name: "Shamaladevi",
    title: "Alumni Profile",
    department: "Information coming soon",
    institution: "USA",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 23,
    name: "Dr. Vallikkannu Govindaraj",
    title: "Retd Professor",
    department: "Kaithemillath College of Arts and Science",
    institution: "Chennai, India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 24,
    name: "Gulnaz Begam",
    title: "PhD",
    department: "Biochemistry",
    institution: "India",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 25,
    name: "Dr. Kalaiarasi Kaliappan",
    title: "Associate Professor, MPhil., PhD",
    department: "Department of Home Science (Textile and Clothing)",
    institution: "Avinashilingam University, Coimbatore, Tamil Nadu",
    location: "From: Namakkal, Tamil Nadu",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 26,
    name: "Dr. Sundaravel Sengodan",
    title: "Assistant Professor, MPhil., PhD",
    department: "Department of Zoology",
    institution: "Government Arts and Science College, Salem, Tamil Nadu",
    location: "From: Komarapalayam, Namakkal District, Tamil Nadu",
    image: "/media/images/placeholder-alumni.png"
  },
  {
    id: 27,
    name: "Dr. Palanivel Rengasamy",
    title: "Research Scientist, MPhil, PhD",
    department: "School of Medicine",
    institution: "Case Western Reserve University, Cleveland, Ohio, USA 44124",
    location: "From: Vattakudi North, Pattukkottai, Thanjavur",
    image: "/media/images/placeholder-alumni.png"
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
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
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
            {alumni.image.includes('placeholder') ? (
              <Box
                sx={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.100',
                  border: '2px dashed',
                  borderColor: 'grey.300'
                }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                  Image coming soon
                </Typography>
              </Box>
            ) : (
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
            )}
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
