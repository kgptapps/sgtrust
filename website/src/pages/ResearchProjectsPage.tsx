import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Close as CloseIcon,
  Science as ScienceIcon,
  Biotech as BiotechIcon,
  LocalHospital as MedicalIcon,
  Psychology as PsychologyIcon,
  School as EducationIcon,
  Groups as CollaborationIcon
} from '@mui/icons-material';

// Research Project interface
interface ResearchProject {
  id: string;
  title: string;
  description?: string;
  category: 'major' | 'minor';
  duration: string;
  fundingAgency: string;
  totalEstimate: string;
  collaborators?: string[];
  outcomes?: string[];
  publications?: string[];
  status: 'completed' | 'ongoing' | 'published';
  significance?: string;
  researchArea?: string;
}

// Authentic research projects data
const researchProjectsData: ResearchProject[] = [
  {
    id: 'cauvery-100-ayurvedic',
    title: 'Biochemical effects of Cauvery-100 an Ayurvedic Formulation to treat Gastrointestinal Tract Complications on Mammalian System',
    category: 'major',
    duration: 'Two years (1991-93)',
    fundingAgency: 'Cauvery Ayurvedics, 16, Vannarpathi, Kodambakkam Madras',
    totalEstimate: 'Rs. 1,70,000',
    status: 'completed'
  },
  {
    id: 'narcotic-rehabilitation',
    title: 'Biochemical Concept of Narcotic Addict\'s Rehabilitation to Restrain Border Disturbances',
    category: 'major',
    duration: 'Three years (1993-96)',
    fundingAgency: 'Defence Grants-in-Aid Scheme, Ministry of Defence, Government of India',
    totalEstimate: 'Rs. 2,66,940',
    status: 'completed'
  },
  {
    id: 'echitamine-anticancer',
    title: 'Evaluation of the Anticancer effects of Echitamine chloride in Experimental Fibrosarcoma and Ehrlich Ascites Carcinoma (EAC)',
    category: 'major',
    duration: 'Three years (1994-97)',
    fundingAgency: 'University Grants Commission, New Delhi',
    totalEstimate: 'Rs. 1,81,940',
    status: 'completed'
  },
  {
    id: 'asshiffa-500-unani',
    title: 'Asshiffa-500, An Unani formulation. A prospective drug to treat kidney disease',
    category: 'major',
    duration: '1995-98',
    fundingAgency: 'Alkausar Unani Kidney Foundation Centre',
    totalEstimate: 'Rs. 1,23,000',
    status: 'completed'
  },
  {
    id: 'gangetin-antifertility',
    title: 'Evaluation of the antifertility effects of gangetin - a plant petrocarpan on male albino rats',
    category: 'major',
    duration: '1998-2001',
    fundingAgency: 'University Grants Commission, New Delhi',
    totalEstimate: 'Rs. 3,16,940',
    status: 'completed'
  },
  // Minor projects - authentic data
  {
    id: 'prosopis-alkaloids',
    title: 'Biochemical studies on the effects of Alkaloids of Prosopis juliflora in Rats',
    category: 'minor',
    duration: '1986-1988: Two years',
    fundingAgency: 'Bureau of Police Research and Development',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'vanadate-diabetes',
    title: 'Evaluation of hypoglycemic and hypolipidemic effects of Vanadate on chronic experimental diabetes',
    category: 'minor',
    duration: '1988-90: Two years',
    fundingAgency: 'Indian Council of Medical Research',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'morphine-naloxone',
    title: 'Biochemical studies on the adverse effects of Morphine and antagonistic influences of Naloxone in Rats',
    category: 'minor',
    duration: '1988-90: Two years',
    fundingAgency: 'Bureau of Police Research and Development',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'glycosyl-transferases',
    title: 'Studies on glycosyl transferases activity and evaluation of their diagnostic value in cervical cancer patients',
    category: 'minor',
    duration: '1987-90: Three years',
    fundingAgency: 'Indian Council of Medical Research',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'echitamine-fibrosarcoma',
    title: 'Biochemical studies on the Anti-cancer nature of Echitamine chloride in Methylcholanthrene induced fibro Sarcoma rats',
    category: 'minor',
    duration: '1989-92: Three years',
    fundingAgency: 'Director General of Health Services',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'luteolin-anticancer',
    title: 'Anticancer effects of Luteolin in Tumour bearing mice in vivo study',
    category: 'minor',
    duration: '1993-94: One year',
    fundingAgency: 'Tamil Nadu State Research Committee',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'herbal-hypoglycemic',
    title: 'A study on hypoglycemic effects of Terminalia chebula, Embilica officinalis and Murraya Keonjii on Alloxan diabetic rats',
    category: 'minor',
    duration: '1994-95: One year',
    fundingAgency: 'Tamilnadu state council for Science and Technology',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'morphine-antagonist',
    title: 'Selection of suitable antagonist for Morphine addiction',
    category: 'minor',
    duration: '1997-2000: Three years',
    fundingAgency: 'Bureau of Police Research and Development',
    totalEstimate: 'Not specified',
    status: 'completed'
  },
  {
    id: 'ocimum-chemopreventive',
    title: 'Studies on the chemopreventive effect of Ocimum sanctum on DMBA-induced hamster buccal carcinogenesis',
    category: 'minor',
    duration: '1998-2000: Two years',
    fundingAgency: 'Lady Tata Memorial Trust',
    totalEstimate: 'Not specified',
    status: 'completed'
  }
];

const ResearchProjectsPage: React.FC = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = [
    { key: 'all', label: 'All Projects', icon: <ScienceIcon /> },
    { key: 'major', label: 'Major Projects', icon: <BiotechIcon /> },
    { key: 'minor', label: 'Minor Projects', icon: <PsychologyIcon /> }
  ];

  const getProjectsByCategory = (category: string) => {
    if (category === 'all') return researchProjectsData;
    return researchProjectsData.filter(project => project.category === category);
  };

  const handleProjectClick = (project: ResearchProject) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProject(null);
  };



  const getStatusColor = (status: string): 'success' | 'info' | 'default' => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'ongoing':
        return 'info';
      default:
        return 'default';
    }
  };

  const currentProjects = getProjectsByCategory(categories[selectedTab].key);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 40%, ${theme.palette.primary.main}20 100%)`,
          color: theme.palette.text.primary,
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              🔬 Research Projects
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
              Scientific Investigations & Academic Contributions
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '800px', mx: 'auto' }}>
              Explore the comprehensive research portfolio of Professor S. Govindasamy, spanning decades of 
              groundbreaking investigations in diabetes, cancer research, biochemistry, and educational innovation.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500
              }
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category.key}
                icon={category.icon}
                label={category.label}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {/* Projects Scientific Format */}
        {currentProjects.length === 0 ? (
          <Box sx={{
            textAlign: 'center',
            py: 8,
            px: 4
          }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Research Projects Coming Soon
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Detailed research project information for this category is currently being compiled.
            </Typography>
          </Box>
        ) : (
          <Box>
            {currentProjects.map((project, index) => (
              <Box key={project.id} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    p: 2,
                    backgroundColor: 'background.paper',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                      borderColor: 'primary.main'
                    }
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ minWidth: 30 }}>
                    {index + 1}.
                  </Typography>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6, fontWeight: 'medium' }}>
                      <strong>{project.title}</strong>
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      <strong>Funding Agency:</strong> {project.fundingAgency}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      <strong>Tenure:</strong> {project.duration}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      <strong>Total Estimate:</strong> {project.totalEstimate}
                    </Typography>

                    {project.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                        {project.description}
                      </Typography>
                    )}

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                      <Chip
                        label={project.category === 'major' ? 'Major Project' : 'Minor Project'}
                        size="small"
                        color={project.category === 'major' ? 'primary' : 'secondary'}
                        variant="outlined"
                      />
                      <Chip
                        label={project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        size="small"
                        color={getStatusColor(project.status)}
                        variant="filled"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ScienceIcon color={selectedProject.category === 'major' ? 'primary' : 'secondary'} />
                <Typography variant="h5" sx={{ ml: 2 }}>
                  {selectedProject.title}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {selectedProject.description && (
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {selectedProject.description}
                </Typography>
              )}

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Project Details
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Funding Agency:</strong> {selectedProject.fundingAgency}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Tenure:</strong> {selectedProject.duration}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Total Estimate:</strong> {selectedProject.totalEstimate}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Status:</strong> {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                </Typography>
              </Box>

              {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Collaborating Institutions
                  </Typography>
                  <List dense>
                    {selectedProject.collaborators.map((collaborator, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemText primary={`• ${collaborator}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {selectedProject.outcomes && selectedProject.outcomes.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Key Outcomes
                  </Typography>
                  <List dense>
                    {selectedProject.outcomes.map((outcome, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemText primary={`• ${outcome}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {selectedProject.publications && selectedProject.publications.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Key Publications
                  </Typography>
                  <List dense>
                    {selectedProject.publications.map((publication, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemText primary={`• ${publication}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {selectedProject.significance && (
                <Box sx={{ p: 2, backgroundColor: 'primary.light', borderRadius: 1 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.contrastText' }}>
                    Research Significance
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.contrastText', opacity: 0.9 }}>
                    {selectedProject.significance}
                  </Typography>
                </Box>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ResearchProjectsPage;
