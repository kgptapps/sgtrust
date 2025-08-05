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
  Business as BusinessIcon,
  Psychology as PsychologyIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Import achievements data
const achievementsData = {
  professional: [
    {
      id: 'school-teacher-1968',
      title: 'School Teacher',
      description: 'Commenced professional career in education, laying the foundation for a distinguished academic journey in teaching and mentorship',
      institution: 'Primary Education Sector',
      year: 1968,
      category: 'professional' as const,
      type: 'Teaching Position'
    },
    {
      id: 'demonstrator-stanley-1970',
      title: 'Demonstrator in Biochemistry',
      description: 'Advanced to specialized biochemistry instruction, bridging theoretical knowledge with practical laboratory applications in medical education',
      institution: 'Stanley Medical College',
      year: 1970,
      category: 'professional' as const,
      type: 'Academic Position'
    },
    {
      id: 'lecturer-madras-1974',
      title: 'Lecturer in Biochemistry',
      description: 'Elevated to full lectureship, assuming comprehensive teaching responsibilities while pursuing advanced research in biochemical sciences',
      institution: 'University of Madras',
      year: 1974,
      category: 'professional' as const,
      type: 'Academic Position'
    },
    {
      id: 'reader-madras-1983',
      title: 'Reader in Biochemistry',
      description: 'Promoted to senior academic rank, recognizing excellence in teaching, research, and scholarly contributions to the field of biochemistry',
      institution: 'University of Madras',
      year: 1983,
      category: 'professional' as const,
      type: 'Senior Academic Position'
    },
    {
      id: 'professor-madras-1989',
      title: 'Professor in Biochemistry',
      description: 'Achieved the pinnacle of academic excellence, leading cutting-edge research initiatives and shaping the next generation of biochemists until retirement',
      institution: 'University of Madras',
      year: 1989,
      category: 'professional' as const,
      type: 'Professorial Position'
    },
    {
      id: 'head-department-1992',
      title: 'Head of Department of Biochemistry',
      description: 'Appointed to departmental leadership, orchestrating academic excellence, research innovation, and institutional development during a transformative period',
      institution: 'University of Madras',
      year: 1992,
      category: 'professional' as const,
      type: 'Administrative Leadership'
    }
  ]
};

// Timeline event interface
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: string;
  icon: React.ReactElement;
  color: 'primary' | 'success' | 'warning' | 'error';
}

// Create timeline from professional achievements data
const createTimelineFromAchievements = () => {
  // Sort professional achievements by year
  const sortedAchievements = [...achievementsData.professional].sort((a, b) => a.year - b.year);

  return sortedAchievements.map((achievement) => {
    let icon = <WorkIcon />;
    let color: "primary" | "success" | "error" | "warning" = "success";

    // Assign icons and colors based on position type
    switch (achievement.type) {
      case 'Teaching Position':
        icon = <SchoolIcon />;
        color = "primary";
        break;
      case 'Academic Position':
        icon = <PsychologyIcon />;
        color = "success";
        break;
      case 'Senior Academic Position':
        icon = <BusinessIcon />;
        color = "warning";
        break;
      case 'Professorial Position':
        icon = <AwardIcon />;
        color = "error";
        break;
      case 'Administrative Leadership':
        icon = <StudentsIcon />;
        color = "warning";
        break;
      default:
        icon = <WorkIcon />;
        color = "success";
    }

    return {
      year: achievement.year.toString(),
      title: achievement.title,
      description: `${achievement.description} - ${achievement.institution}`,
      type: "career" as const,
      icon,
      color
    };
  });
};

const timelineEvents: TimelineEvent[] = createTimelineFromAchievements();

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
                      color={event.color}
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

      {/* Govindasamy's Goals and Ambitions */}
      <Box sx={{
        mt: 8,
        p: 4,
        backgroundColor: (theme) => theme.palette.mode === 'dark'
          ? theme.palette.grey[800]
          : theme.palette.grey[100],
        borderRadius: 2,
        border: '2px solid',
        borderColor: 'primary.main'
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>
          📋 Professor S. Govindasamy's Goals and Ambitions
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary', textAlign: 'center', fontStyle: 'italic', mb: 3 }}>
          Unrealized Due to Premature Retirement
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.primary', mb: 3, lineHeight: 1.7 }}>
          Professor Govindasamy's distinguished 27-year career at the University of Madras was abruptly curtailed, leaving behind ambitious projects and dreams that would have significantly benefited the academic community and the state of Tamil Nadu.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mb: 3 }}>
          <Box sx={{
            p: 3,
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? theme.palette.grey[700]
              : theme.palette.grey[200],
            borderRadius: 1
          }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              🔬 Research Legacy
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              • 26 Ph.D. scholars successfully guided
              • 70 M.Phil. scholars mentored
              • 10 Ph.D. scholars in final stages left without guidance
              • International recognition in cancer biology, diabetology & drug addiction
            </Typography>
          </Box>

          <Box sx={{
            p: 3,
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? theme.palette.grey[700]
              : theme.palette.grey[200],
            borderRadius: 1
          }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              💰 Funding Achievements
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              • Research projects worth ₹1 crore completed
              • Funding from UGC, CSIR, DST, ICMR, ICAR, DRDO
              • ₹45 lakhs DST award pending approval
              • Multiple private and philanthropic collaborations
            </Typography>
          </Box>
        </Box>

        <Box sx={{
          p: 3,
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? theme.palette.grey[700]
            : theme.palette.grey[200],
          borderRadius: 1,
          mb: 3
        }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            🎯 Unrealized Ambitions
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', mb: 2 }}>
            <strong>Special Assistance Programme (SAP) - ₹2 Crores:</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', ml: 2 }}>
            • 2 new professorships for academic excellence
            • 3 readerships for senior research positions
            • 4 lectureships for emerging scholars
            • Short-listed as one of four finalists nationally
            • Would have benefited University of Madras and regional scientific community
          </Typography>
        </Box>

        <Box sx={{
          textAlign: 'center',
          p: 2,
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? theme.palette.grey[600]
            : theme.palette.grey[300],
          borderRadius: 1
        }}>
          <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'medium', fontStyle: 'italic' }}>
            "My only concern of anxiety is that this should not be lost since it will be a great loss to our State..."
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            - Professor S. Govindasamy's final appeal for academic justice
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TimelinePage;
