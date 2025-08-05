import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper
} from '@mui/material';
import {
  School as EducationIcon,
  Favorite as HeartIcon,
  AccountBalance as FundIcon
} from '@mui/icons-material';

const AccountabilityPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <FundIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Professor S. Govindasamy Educational Endowment Fund
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Honoring his legacy through educational support for future generations
        </Typography>
      </Box>

      {/* Memorial Message */}
      <Card sx={{ mb: 6, backgroundColor: 'grey.50' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <HeartIcon sx={{ fontSize: 32, color: 'error.main', mr: 2 }} />
            <Typography variant="h5" component="h2" color="primary.main">
              In Loving Memory
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            The sudden and unexpected loss of our beloved Professor, mentor, friend, and guiding light to cardiac arrest in Chennai
            remains difficult to comprehend. Though Professor S. Govindasamy has departed from this physical world, his profound
            love, wisdom, and dedication continue to live within each of us. We find comfort knowing that his spirit watches over
            our endeavors and well-being from above.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            In tribute to his extraordinary life and unwavering commitment to education, we have embarked on establishing the
            Professor S. Govindasamy Educational Endowment Fund. This initiative serves as a lasting testament to his belief
            in the transformative power of education and his lifelong dedication to nurturing young minds.
          </Typography>
        </CardContent>
      </Card>

      {/* Fund Mission */}
      <Card sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <EducationIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h5" component="h2" color="primary.main">
              Educational Mission & Vision
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            The Professor S. Govindasamy Educational Endowment Fund is designed to provide meaningful support to deserving
            students pursuing Master's degrees and research opportunities. Our primary focus centers on assisting students
            from rural communities and economically disadvantaged backgrounds, ensuring that financial constraints do not
            hinder their academic aspirations.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            Beyond student support, our vision encompasses providing research funding to emerging young scientists who
            demonstrate exceptional promise but face financial barriers. Additionally, we remain open to developing innovative
            educational initiatives and programs within the Department of Biochemistry at the University of Chennai, guided
            by contributions and suggestions from Professor Govindasamy's students and colleagues.
          </Typography>
        </CardContent>
      </Card>

      {/* Challenges & Transparency */}
      <Card sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom color="primary.main">
            Organizational Challenges & Our Commitment to Transparency
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We have made extensive efforts, both individually and collectively, to establish a formal non-profit organization
            bearing Professor Govindasamy's name and to create a dedicated institutional bank account for the Educational
            Endowment Fund. Unfortunately, despite our persistent attempts, complex regulatory requirements, administrative
            procedures, and tax-related complications have prevented us from successfully completing this formal establishment.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We recognize and deeply appreciate your understanding of these institutional challenges, which currently limit
            our ability to provide immediate, formal fund management structures. These regulatory obstacles do not align
            with our urgent desire to honor Professor Govindasamy's memory and begin supporting deserving students without delay.
          </Typography>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card sx={{ mb: 6, backgroundColor: 'primary.50' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom color="primary.main">
            Your Support Makes the Difference
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We earnestly invite you to join us in this meaningful endeavor by contributing generously to the Professor S.
            Govindasamy Educational Endowment Fund. Your support will help us create a lasting tribute that reflects the
            selfless life he dedicated to empowering others through education and mentorship.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            We fully acknowledge the legitimate concerns regarding financial accountability, fund management, and the proper
            establishment of this endowment within university frameworks. Please be assured that we are committed to maintaining
            complete transparency throughout every stage of this process. We will provide regular updates, detailed financial
            reporting, and open communication as we work toward formalizing this fund through appropriate institutional channels.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, fontWeight: 500 }}>
            Together, we can ensure that Professor Govindasamy's legacy of educational excellence and compassionate mentorship
            continues to inspire and support future generations of students and researchers.
          </Typography>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Paper sx={{ p: 3, backgroundColor: 'grey.100', textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom color="primary.main">
          For More Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          If you would like to contribute to the Professor S. Govindasamy Educational Endowment Fund
          or have questions about our transparency initiatives, please reach out to us through the contact page.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AccountabilityPage;
