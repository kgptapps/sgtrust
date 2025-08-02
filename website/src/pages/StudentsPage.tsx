import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Tabs,
  Tab
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  School as SchoolIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Sample student data - in a real app, this would come from an API
const sampleStudents = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    year: "2018",
    thesis: "Advanced Machine Learning Applications in Healthcare",
    currentPosition: "Senior Data Scientist",
    company: "Google",
    location: "California, USA",
    country: "USA",
    image: "/sgtrust/media/images/students/placeholder-male.jpg"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    year: "2019",
    thesis: "Sustainable Energy Systems and Smart Grid Technology",
    currentPosition: "Research Director",
    company: "Tesla",
    location: "Texas, USA",
    country: "USA",
    image: "/sgtrust/media/images/students/placeholder-female.jpg"
  },
  {
    id: 3,
    name: "Dr. Arun Patel",
    year: "2020",
    thesis: "Quantum Computing Applications in Cryptography",
    currentPosition: "Principal Engineer",
    company: "Microsoft",
    location: "Washington, USA",
    country: "USA",
    image: "/sgtrust/media/images/students/placeholder-male.jpg"
  },
  {
    id: 4,
    name: "Dr. Meera Reddy",
    year: "2017",
    thesis: "Biomedical Engineering and Neural Interfaces",
    currentPosition: "VP of Engineering",
    company: "Neuralink",
    location: "California, USA",
    country: "USA",
    image: "/sgtrust/media/images/students/placeholder-female.jpg"
  },
  {
    id: 5,
    name: "Dr. Suresh Iyer",
    year: "2021",
    thesis: "Artificial Intelligence in Financial Markets",
    currentPosition: "Quantitative Researcher",
    company: "Goldman Sachs",
    location: "New York, USA",
    country: "USA",
    image: "/sgtrust/media/images/students/placeholder-male.jpg"
  },
  {
    id: 6,
    name: "Dr. Kavitha Nair",
    year: "2016",
    thesis: "Environmental Engineering and Climate Solutions",
    currentPosition: "Senior Scientist",
    company: "NASA",
    location: "Florida, USA",
    country: "USA",
    image: "/sgtrust/media/images/students/placeholder-female.jpg"
  }
];

const StudentsPage: React.FC = () => {
  const { t } = useTranslation(['content']);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  const filteredStudents = sampleStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.currentPosition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const usaStudents = filteredStudents.filter(student => student.country === 'USA');
  const allStudents = filteredStudents;

  const displayStudents = selectedTab === 0 ? allStudents : usaStudents;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:studentsTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        {t('content:studentsDescription')}
      </Typography>

      {/* Statistics */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            50+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total PhD Students
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="success.main" fontWeight="bold">
            40+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            In USA
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" color="warning.main" fontWeight="bold">
            80%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Success Rate
          </Typography>
        </Box>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by name, company, or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          centered
          sx={{ mb: 3 }}
        >
          <Tab label={`All Students (${allStudents.length})`} />
          <Tab label={`USA Success Stories (${usaStudents.length})`} />
        </Tabs>
      </Box>

      {/* Students Grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        {displayStudents.map((student) => (
          <Box key={student.id}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Avatar
                    src={student.image}
                    alt={student.name}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {student.name}
                  </Typography>
                  <Chip
                    label={`PhD ${student.year}`}
                    size="small"
                    color="primary"
                    sx={{ mb: 1 }}
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <WorkIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" fontWeight="medium">
                      {student.currentPosition}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="primary" fontWeight="bold">
                    {student.company}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {student.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 16, mr: 1, color: 'text.secondary', mt: 0.5 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    {student.thesis}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {displayStudents.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary">
            No students found matching your search criteria.
          </Typography>
        </Box>
      )}

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 6, p: 4, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Join the Legacy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Interested in pursuing your PhD under Professor S. Govindasamy's guidance?
        </Typography>
        <Button variant="contained" size="large">
          Contact for Admissions
        </Button>
      </Box>
    </Container>
  );
};

export default StudentsPage;
