import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Grid
} from '@mui/material';
import {
  EmojiEvents as AwardIcon,
  MenuBook as PublicationIcon,
  School as ResearchIcon,
  Star as HonorIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Sample achievements data
const achievementsData = {
  awards: [
    {
      title: "Excellence in Teaching Award",
      year: "2022",
      organization: "University Academic Council",
      description: "Recognition for outstanding contribution to doctoral education"
    },
    {
      title: "Research Excellence Award",
      year: "2020",
      organization: "National Engineering Society",
      description: "For significant contributions to engineering research"
    },
    {
      title: "Mentor of the Year",
      year: "2019",
      organization: "Graduate Student Association",
      description: "Voted by students for exceptional mentorship"
    },
    {
      title: "Lifetime Achievement Award",
      year: "2018",
      organization: "State Education Board",
      description: "For 35+ years of dedicated service to education"
    }
  ],
  publications: [
    {
      title: "Advanced Engineering Principles in Modern Applications",
      year: "2023",
      journal: "International Journal of Engineering",
      type: "Journal Article",
      citations: 45
    },
    {
      title: "Mentorship Strategies for Doctoral Success",
      year: "2022",
      journal: "Educational Research Quarterly",
      type: "Journal Article",
      citations: 32
    },
    {
      title: "Engineering Education: A Comprehensive Guide",
      year: "2021",
      journal: "Academic Press",
      type: "Book",
      citations: 78
    },
    {
      title: "Innovation in Graduate Research Methodology",
      year: "2020",
      journal: "Research in Higher Education",
      type: "Journal Article",
      citations: 56
    }
  ],
  research: [
    {
      title: "Sustainable Engineering Solutions",
      period: "2020-2023",
      funding: "$250,000",
      agency: "National Science Foundation"
    },
    {
      title: "Advanced Materials Research",
      period: "2018-2021",
      funding: "$180,000",
      agency: "Department of Energy"
    },
    {
      title: "Educational Technology Integration",
      period: "2019-2022",
      funding: "$120,000",
      agency: "Education Research Council"
    }
  ],
  honors: [
    {
      title: "Fellow, National Academy of Engineering",
      year: "2021",
      description: "Elected for contributions to engineering education"
    },
    {
      title: "Distinguished Professor Emeritus",
      year: "2020",
      description: "Highest academic honor from the university"
    },
    {
      title: "International Visiting Scholar",
      year: "2019",
      description: "Invited positions at leading universities worldwide"
    }
  ]
};

const AchievementsPage: React.FC = () => {
  const { t } = useTranslation(['content']);
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { label: 'Awards', icon: <AwardIcon />, data: achievementsData.awards },
    { label: 'Publications', icon: <PublicationIcon />, data: achievementsData.publications },
    { label: 'Research', icon: <ResearchIcon />, data: achievementsData.research },
    { label: 'Honors', icon: <HonorIcon />, data: achievementsData.honors }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:achievementsTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        {t('content:achievementsDescription')}
      </Typography>

      {/* Summary Statistics */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={6} md={3}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h4" color="primary" fontWeight="bold">
              25+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Awards Received
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h4" color="success.main" fontWeight="bold">
              100+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publications
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h4" color="warning.main" fontWeight="bold">
              15+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Research Projects
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h4" color="error.main" fontWeight="bold">
              2000+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Citations
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs */}
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {tab.icon}
                  {tab.label}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>

      {/* Content */}
      <Card>
        <CardContent sx={{ p: 4 }}>
          {selectedTab === 0 && (
            <List>
              {achievementsData.awards.map((award, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <AwardIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Typography variant="h6">{award.title}</Typography>
                          <Chip label={award.year} color="primary" size="small" />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                            {award.organization}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {award.description}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < achievementsData.awards.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}

          {selectedTab === 1 && (
            <List>
              {achievementsData.publications.map((pub, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <PublicationIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                          <Typography variant="h6">{pub.title}</Typography>
                          <Chip label={pub.year} color="primary" size="small" />
                          <Chip label={pub.type} variant="outlined" size="small" />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                            {pub.journal}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Citations: {pub.citations}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < achievementsData.publications.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}

          {selectedTab === 2 && (
            <List>
              {achievementsData.research.map((research, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <ResearchIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                          <Typography variant="h6">{research.title}</Typography>
                          <Chip label={research.period} color="primary" size="small" />
                          <Chip label={research.funding} color="success" size="small" />
                        </Box>
                      }
                      secondary={
                        <Typography variant="body2" color="primary" sx={{ fontWeight: 'medium' }}>
                          Funded by: {research.agency}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < achievementsData.research.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}

          {selectedTab === 3 && (
            <List>
              {achievementsData.honors.map((honor, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <HonorIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Typography variant="h6">{honor.title}</Typography>
                          <Chip label={honor.year} color="primary" size="small" />
                        </Box>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {honor.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < achievementsData.honors.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default AchievementsPage;
