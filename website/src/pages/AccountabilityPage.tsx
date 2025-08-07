import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid
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
            <FundIcon sx={{ fontSize: 32, color: 'success.main', mr: 2 }} />
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






      {/* Establishing the Endowment Fund */}
      <Card sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <FundIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h5" component="h2" color="primary.main">
              Establishing the Endowment Fund
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, textAlign: 'justify' }}>
            The establishment of the Professor S. Govindasamy Educational Endowment Fund represents a collaborative
            effort by his students, colleagues, and admirers to honor his legacy and continue his mission of
            educational excellence. These images document the journey of creating this meaningful tribute to
            Professor's lifelong dedication to education and mentorship.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.open('/sgtrust/media/images/endownmentfundimages/WhatsApp Image 2025-08-05 at 16.26.39.jpeg', '_blank')}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/sgtrust/media/images/endownmentfundimages/WhatsApp Image 2025-08-05 at 16.26.39.jpeg"
                  alt="Endowment Fund Establishment - Document 1"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Fund Documentation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Official documentation and planning materials for the endowment fund establishment
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.open('/sgtrust/media/images/endownmentfundimages/WhatsApp Image 2025-08-05 at 16.26.39 (1).jpeg', '_blank')}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/sgtrust/media/images/endownmentfundimages/WhatsApp Image 2025-08-05 at 16.26.39 (1).jpeg"
                  alt="Endowment Fund Establishment - Document 2"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Planning Process
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Collaborative planning and organizational efforts by students and colleagues
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => window.open('/sgtrust/media/images/endownmentfundimages/WhatsApp Image 2025-08-05 at 16.26.39 (2).jpeg', '_blank')}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/sgtrust/media/images/endownmentfundimages/WhatsApp Image 2025-08-05 at 16.26.39 (2).jpeg"
                  alt="Endowment Fund Establishment - Document 3"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Implementation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Implementation and execution of the endowment fund initiative
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Container>
  );
};

export default AccountabilityPage;
