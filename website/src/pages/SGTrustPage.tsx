import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const SGTrustPage: React.FC = () => {
  const { t } = useTranslation(['content', 'common']);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: 'primary.main',
          fontWeight: 600,
          mb: 4
        }}
      >
        S. Govindasamy Trust
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          About the Trust
        </Typography>
        <Typography variant="body1" paragraph>
          The S. Govindasamy Trust was established to honor the memory and continue the legacy 
          of Professor S. Govindasamy, a distinguished educator and researcher who dedicated 
          his life to academic excellence and student welfare.
        </Typography>
        <Typography variant="body1" paragraph>
          The trust serves as a beacon of educational support, carrying forward the professor's 
          vision of accessible quality education and academic research.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                Mission
              </Typography>
              <Typography variant="body2">
                To promote educational excellence, support deserving students, and advance 
                research in the fields that Professor Govindasamy was passionate about.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                Vision
              </Typography>
              <Typography variant="body2">
                To create a lasting impact on education by providing opportunities for 
                academic growth and research advancement in honor of Professor S. Govindasamy's legacy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                Objectives
              </Typography>
              <Typography variant="body2">
                • Support educational initiatives<br/>
                • Provide scholarships to deserving students<br/>
                • Promote research and academic excellence<br/>
                • Preserve and share Professor's academic contributions
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary.main">
                Activities
              </Typography>
              <Typography variant="body2">
                • Educational scholarships and grants<br/>
                • Academic conferences and seminars<br/>
                • Research publication support<br/>
                • Student mentorship programs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Trust Information
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph>
          The S. Govindasamy Trust operates with the highest standards of transparency 
          and accountability, ensuring that all contributions are utilized effectively 
          for educational advancement.
        </Typography>
        <Typography variant="body1">
          For more information about the trust's activities, contributions, or how to 
          get involved, please contact us through the contact page.
        </Typography>
      </Paper>
    </Container>
  );
};

export default SGTrustPage;
