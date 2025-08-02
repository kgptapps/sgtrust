import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar
} from '@mui/material';
import {
  School as SchoolIcon,
  Work as WorkIcon,
  EmojiEvents as AwardIcon,
  Groups as StudentsIcon,
  MenuBook as BookIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Timeline data
const timelineEvents = [
  {
    year: "1960",
    title: "Early Life",
    description: "Born in a small village, showing early promise in academics",
    type: "personal",
    icon: <SchoolIcon />,
    color: "primary"
  },
  {
    year: "1982",
    title: "PhD Completion",
    description: "Completed PhD in Engineering, beginning of academic journey",
    type: "education",
    icon: <SchoolIcon />,
    color: "primary"
  },
  {
    year: "1985",
    title: "First Teaching Position",
    description: "Started as Assistant Professor, beginning 40+ year teaching career",
    type: "career",
    icon: <WorkIcon />,
    color: "success"
  },
  {
    year: "1990",
    title: "First PhD Student",
    description: "Mentored first doctoral student, establishing mentorship legacy",
    type: "students",
    icon: <StudentsIcon />,
    color: "warning"
  },
  {
    year: "1995",
    title: "Research Excellence Award",
    description: "Received first major academic recognition for research contributions",
    type: "award",
    icon: <AwardIcon />,
    color: "error"
  },
  {
    year: "2000",
    title: "Professor Promotion",
    description: "Promoted to full Professor, recognition of academic excellence",
    type: "career",
    icon: <WorkIcon />,
    color: "success"
  },
  {
    year: "2005",
    title: "10th PhD Graduate",
    description: "Milestone achievement in student mentorship",
    type: "students",
    icon: <StudentsIcon />,
    color: "warning"
  },
  {
    year: "2010",
    title: "International Recognition",
    description: "Received international award for contributions to education",
    type: "award",
    icon: <AwardIcon />,
    color: "error"
  },
  {
    year: "2015",
    title: "30th PhD Graduate",
    description: "Continued excellence in doctoral student mentorship",
    type: "students",
    icon: <StudentsIcon />,
    color: "warning"
  },
  {
    year: "2020",
    title: "50th PhD Graduate",
    description: "Remarkable milestone - 50+ students successfully mentored",
    type: "students",
    icon: <StudentsIcon />,
    color: "warning"
  },
  {
    year: "2023",
    title: "Legacy Continues",
    description: "Ongoing impact with 80% of students achieving success in USA",
    type: "legacy",
    icon: <BookIcon />,
    color: "primary"
  }
];

const TimelinePage: React.FC = () => {
  const { t } = useTranslation(['content']);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:timelineTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('content:timelineDescription')}
      </Typography>

      {/* Timeline */}
      <Box sx={{ position: 'relative' }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '30px', md: '50%' },
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'primary.main',
            transform: { md: 'translateX(-50%)' }
          }}
        />

        {timelineEvents.map((event, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              mb: 4,
              display: 'flex',
              flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
              alignItems: 'center'
            }}
          >
            {/* Timeline dot */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '22px', md: '50%' },
                transform: { md: 'translateX(-50%)' },
                zIndex: 2
              }}
            >
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: `${event.color}.main`,
                  border: '3px solid white',
                  boxShadow: 2
                }}
              >
                {event.icon}
              </Avatar>
            </Box>

            {/* Content */}
            <Box
              sx={{
                width: { xs: 'calc(100% - 80px)', md: '45%' },
                ml: { xs: '80px', md: index % 2 === 0 ? 0 : '55%' },
                mr: { xs: 0, md: index % 2 === 0 ? '55%' : 0 }
              }}
            >
              <Card
                sx={{
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={event.year}
                      color={event.color as any}
                      size="small"
                      sx={{ mr: 2, fontWeight: 'bold' }}
                    />
                    <Chip
                      label={event.type}
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Summary */}
      <Box sx={{ mt: 8, textAlign: 'center', p: 4, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          A Legacy of Excellence
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Over 40 years of dedicated service to education, mentoring 50+ PhD students
          with remarkable success in their careers, particularly in the United States.
        </Typography>
      </Box>
    </Container>
  );
};

export default TimelinePage;
