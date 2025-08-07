import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import {
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

      {/* Expressing Our Gratitude */}
      <Card sx={{ mb: 6, backgroundColor: 'success.50' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <HeartIcon sx={{ fontSize: 32, color: 'success.main', mr: 2 }} />
            <Typography variant="h5" component="h2" color="success.main">
              Expressing Our Gratitude
            </Typography>
          </Box>

          {/* Acknowledgment Box */}
          <Card sx={{ mb: 3, backgroundColor: 'white', border: '1px solid', borderColor: 'success.200' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: 'justify' }}>
                We extend our deepest appreciation and heartfelt gratitude to all the dedicated organizers,
                generous donors, and compassionate supporters who have made the Professor S. Govindasamy
                Educational Endowment Fund a reality. Your unwavering commitment to honoring Professor
                Govindasamy's legacy and your belief in the transformative power of education have been
                instrumental in establishing this meaningful tribute.
              </Typography>
            </CardContent>
          </Card>

          {/* Additional Information Box */}
          <Card sx={{ backgroundColor: 'white', border: '1px solid', borderColor: 'success.200' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                Comprehensive Information & Documentation
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: 'justify', mb: 2 }}>
                For those seeking detailed information about the complete process of establishing this
                endowment fund, including the journey of organizing this tribute, the challenges encountered,
                and the collaborative efforts that brought this initiative to fruition, we have compiled
                comprehensive documentation and resources.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: 'justify', mb: 2 }}>
                This documentation provides valuable insights into the organizational process, the vision
                behind the endowment fund, and the collective commitment of Professor Govindasamy's students,
                colleagues, and supporters in creating this lasting educational legacy.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: 'justify' }}>
                <strong>Complete documentation and additional information can be accessed at:</strong>
                <br />
                <a
                  href="https://sites.google.com/site/professorsaminathangovindasamy/#5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#1976d2',
                    textDecoration: 'none',
                    fontWeight: 500,
                    borderBottom: '1px solid #1976d2'
                  }}
                >
                  https://sites.google.com/site/professorsaminathangovindasamy/#5
                </a>
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>






    </Container>
  );
};

export default AccountabilityPage;
