import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const StudentsPage: React.FC = () => {
  const { t } = useTranslation(['content']);

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
        Students
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Professor S. Govindasamy's Academic Legacy
        </Typography>
        <Typography variant="body1" paragraph>
          Professor S. Govindasamy was a dedicated educator who guided numerous students
          throughout his distinguished academic career. His commitment to excellence in
          teaching and research supervision left a lasting impact on the academic community.
        </Typography>
        <Typography variant="body1" paragraph>
          During his tenure at the University of Madras, Professor Govindasamy mentored
          students across various disciplines, fostering their intellectual growth and
          research capabilities.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Teaching Philosophy
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph>
          Professor Govindasamy believed in nurturing critical thinking and independent
          research among his students. His approach emphasized both theoretical understanding
          and practical application of knowledge.
        </Typography>
        <Typography variant="body1" paragraph>
          He was known for his patient guidance, encouraging students to explore new ideas
          and push the boundaries of their chosen fields of study.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Academic Mentorship
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph>
          Throughout his career, Professor Govindasamy supervised research projects and
          guided students in their academic pursuits. His mentorship extended beyond
          formal education, providing career guidance and professional development support.
        </Typography>
        <Typography variant="body1" paragraph>
          Many of his former students have gone on to successful careers in academia,
          research, and industry, carrying forward the values and knowledge he imparted.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Continuing Impact
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph>
          The influence of Professor S. Govindasamy's teaching and mentorship continues
          to resonate in the academic community. His dedication to education and student
          development serves as an inspiration for current and future educators.
        </Typography>
        <Typography variant="body1">
          His legacy lives on through the knowledge, skills, and values he instilled
          in his students, who continue to contribute to their respective fields and
          society at large.
        </Typography>
      </Paper>
    </Container>
  );
};

export default StudentsPage;
