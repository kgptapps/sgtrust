import React from 'react';
import {
  Container,
  Typography
} from '@mui/material';

const SGTrustPage: React.FC = () => {

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
        Memorial Tribute
      </Typography>

      {/* Content to be added */}
    </Container>
  );
};

export default SGTrustPage;
