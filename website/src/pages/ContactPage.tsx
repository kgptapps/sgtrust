import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Divider
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  School as SchoolIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation(['content']);

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      value: 'professor.govindasamy@university.edu',
      description: 'For academic inquiries and collaboration'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Office hours: Monday-Friday, 9 AM - 5 PM'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'Office Address',
      value: 'Department of Engineering\nUniversity Campus\nCity, State 12345',
      description: 'Visitors welcome by appointment'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'error.main' }} />,
      title: 'Academic Profile',
      value: 'Professor Emeritus',
      description: 'Department of Engineering Sciences'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:contactTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('content:contactDescription')}
      </Typography>

      {/* Contact Information Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 6 }}>
        {contactInfo.map((contact, index) => (
          <Card key={index} sx={{ height: '100%', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Box sx={{ mb: 2 }}>
                {contact.icon}
              </Box>
              <Typography variant="h6" component="div" sx={{ mb: 1, color: 'primary.main' }}>
                {contact.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 500, whiteSpace: 'pre-line' }}>
                {contact.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {contact.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Legacy and Impact Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Academic Legacy & Impact
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
          Professor S. Govindasamy's legacy continues through his students who are making significant contributions
          in academia and industry worldwide. His mentorship has shaped the careers of over 50 PhD graduates,
          with 80% achieving success in the United States.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 3, mb: 4 }}>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary.main" fontWeight="bold">
              50+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              PhD Students Mentored
            </Typography>
          </Card>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="success.main" fontWeight="bold">
              80%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Success Rate in USA
            </Typography>
          </Card>
          <Card sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="warning.main" fontWeight="bold">
              40+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Years of Teaching
            </Typography>
          </Card>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: 'grey.50', p: 4, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Connect with the Academic Community
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Join the network of Professor S. Govindasamy's students and colleagues
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            href="mailto:professor.govindasamy@university.edu"
          >
            Send Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="#"
            target="_blank"
          >
            LinkedIn Profile
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/kgptapps/sgtrust"
            target="_blank"
          >
            Website Repository
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
