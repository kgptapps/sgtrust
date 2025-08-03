import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge
} from '@mui/material';
import {
  EmojiEvents as AwardIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  School as SchoolIcon,
  Sports as SportsIcon,
  Work as WorkIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface Certificate {
  filename: string;
  institution: string;
  activity: string;
  year: number;
  path: string;
}

interface YearData {
  count: number;
  certificates: Certificate[];
}

interface AchievementsMetadata {
  title: string;
  description: string;
  total_certificates: number;
  year_range: { start: number; end: number };
  categories: {
    sports: string[];
    academic: string[];
    professional: string[];
  };
  years: Record<string, YearData>;
}

const AchievementsPage: React.FC = () => {
  const { t } = useTranslation(['content']);
  const [achievementsData, setAchievementsData] = useState<AchievementsMetadata | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [expandedYear, setExpandedYear] = useState<string | false>(false);

  useEffect(() => {
    // Load achievements metadata
    fetch('/sgtrust/media/achievements/achievements_metadata.json')
      .then(response => response.json())
      .then(data => setAchievementsData(data))
      .catch(error => console.error('Error loading achievements data:', error));
  }, []);

  const getCategoryIcon = (activity: string) => {
    const activityLower = activity.toLowerCase();
    if (achievementsData?.categories.sports.includes(activity)) {
      return <SportsIcon color="primary" />;
    } else if (achievementsData?.categories.academic.includes(activity)) {
      return <SchoolIcon color="secondary" />;
    } else {
      return <WorkIcon color="action" />;
    }
  };

  const getCategoryColor = (activity: string) => {
    if (achievementsData?.categories.sports.includes(activity)) {
      return 'primary';
    } else if (achievementsData?.categories.academic.includes(activity)) {
      return 'secondary';
    } else {
      return 'default';
    }
  };

  if (!achievementsData) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h6" textAlign="center">
          Loading achievements...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {achievementsData.title}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        {achievementsData.description}
      </Typography>

      {/* Summary Statistics */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 6 }}>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            {achievementsData.total_certificates}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Certificates
          </Typography>
        </Card>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <Typography variant="h4" color="success.main" fontWeight="bold">
            {achievementsData.categories.sports.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sports Activities
          </Typography>
        </Card>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <Typography variant="h4" color="warning.main" fontWeight="bold">
            {achievementsData.year_range.end - achievementsData.year_range.start + 1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Years Span
          </Typography>
        </Card>
        <Card sx={{ textAlign: 'center', p: 2 }}>
          <Typography variant="h4" color="error.main" fontWeight="bold">
            {achievementsData.categories.academic.length + achievementsData.categories.professional.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Academic & Professional
          </Typography>
        </Card>
      </Box>

      {/* Year-based Achievements */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Certificates by Year ({achievementsData.year_range.start} - {achievementsData.year_range.end})
      </Typography>

      {/* Year Accordions */}
      {Object.entries(achievementsData.years)
        .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Sort years in descending order
        .map(([year, yearData]) => (
          <Accordion
            key={year}
            expanded={expandedYear === year}
            onChange={(_, isExpanded) => setExpandedYear(isExpanded ? year : false)}
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <AwardIcon color="primary" />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  {year}
                </Typography>
                <Badge badgeContent={yearData.count} color="primary">
                  <Chip
                    label={`${yearData.count} certificate${yearData.count !== 1 ? 's' : ''}`}
                    size="small"
                    variant="outlined"
                  />
                </Badge>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {yearData.certificates.map((certificate, index) => (
                  <Card key={index} sx={{ overflow: 'hidden' }}>
                    <CardContent sx={{ p: 3 }}>
                      {/* Certificate Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        {getCategoryIcon(certificate.activity)}
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" component="h3">
                            {certificate.activity}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {certificate.institution}
                          </Typography>
                        </Box>
                        <Chip
                          label={certificate.year}
                          color="primary"
                          size="small"
                        />
                        <Chip
                          label={certificate.activity}
                          size="small"
                          color={getCategoryColor(certificate.activity) as any}
                          variant="outlined"
                        />
                      </Box>

                      {/* Full Certificate Image */}
                      <Box
                        sx={{
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.02)'
                          }
                        }}
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <img
                          src={certificate.path}
                          alt={`${certificate.institution} - ${certificate.activity}`}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            border: '1px solid #e0e0e0'
                          }}
                        />
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            display: 'block',
                            mt: 1,
                            fontStyle: 'italic'
                          }}
                        >
                          Click to view in full screen
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}

      {/* Certificate Detail Dialog */}
      <Dialog
        open={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedCertificate && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">
                  {selectedCertificate.activity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedCertificate.institution} • {selectedCertificate.year}
                </Typography>
              </Box>
              <IconButton onClick={() => setSelectedCertificate(null)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={selectedCertificate.path}
                  alt={`${selectedCertificate.institution} - ${selectedCertificate.activity}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default AchievementsPage;
