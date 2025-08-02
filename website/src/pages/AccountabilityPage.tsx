import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Tabs,
  Tab,
  LinearProgress
} from '@mui/material';
import {
  AccountBalance as FundIcon,
  TrendingUp as GrowthIcon,
  School as EducationIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const AccountabilityPage: React.FC = () => {
  const { t } = useTranslation(['content']);
  const [selectedTab, setSelectedTab] = useState(0);

  const financialSummary = [
    {
      icon: <FundIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Total Funding Received',
      amount: '$2,500,000',
      description: 'Research grants and educational funding',
      color: 'primary'
    },
    {
      icon: <EducationIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: 'Student Support',
      amount: '$1,800,000',
      description: 'Scholarships and research assistantships',
      color: 'success'
    },
    {
      icon: <GrowthIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'Research Equipment',
      amount: '$500,000',
      description: 'Laboratory and computational resources',
      color: 'warning'
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: 'error.main' }} />,
      title: 'Administrative Costs',
      amount: '$200,000',
      description: 'Operational and administrative expenses',
      color: 'error'
    }
  ];

  const fundingHistory = [
    { year: '2023', source: 'National Science Foundation', amount: '$250,000', purpose: 'Advanced Materials Research', status: 'Active' },
    { year: '2022', source: 'Department of Energy', amount: '$300,000', purpose: 'Sustainable Energy Systems', status: 'Completed' },
    { year: '2021', source: 'Industry Partnership', amount: '$150,000', purpose: 'Technology Transfer', status: 'Completed' },
    { year: '2020', source: 'University Research Grant', amount: '$100,000', purpose: 'Student Research Support', status: 'Completed' },
    { year: '2019', source: 'International Collaboration', amount: '$200,000', purpose: 'Global Research Initiative', status: 'Completed' }
  ];

  const expenditures = [
    { category: 'Student Stipends', amount: '$1,200,000', percentage: 48 },
    { category: 'Research Equipment', amount: '$500,000', percentage: 20 },
    { category: 'Conference & Travel', amount: '$300,000', percentage: 12 },
    { category: 'Publications & Dissemination', amount: '$250,000', percentage: 10 },
    { category: 'Administrative Costs', amount: '$200,000', percentage: 8 },
    { category: 'Other Expenses', amount: '$50,000', percentage: 2 }
  ];

  const tabs = [
    { label: 'Financial Overview', icon: <FundIcon /> },
    { label: 'Funding History', icon: <GrowthIcon /> },
    { label: 'Expenditure Breakdown', icon: <EducationIcon /> }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:accountabilityTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
        {t('content:accountabilityDescription')}
      </Typography>

      {/* Financial Summary Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3, mb: 6 }}>
        {financialSummary.map((item, index) => (
          <Card key={index} sx={{ height: '100%', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box sx={{ mb: 2 }}>
                {item.icon}
              </Box>
              <Typography variant="h5" component="div" sx={{ mb: 1, fontWeight: 'bold', color: `${item.color}.main` }}>
                {item.amount}
              </Typography>
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

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

      {/* Tab Content */}
      {selectedTab === 0 && (
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Financial Transparency Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Professor S. Govindasamy maintains complete transparency in all financial matters related to research funding,
              student support, and academic activities. All funds are managed according to university policies and federal regulations.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Funding Sources
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Federal research grants (60%)<br/>
                  • Industry partnerships (25%)<br/>
                  • University funding (10%)<br/>
                  • International collaborations (5%)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Impact Metrics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • 50+ PhD students supported<br/>
                  • 100+ research publications funded<br/>
                  • 25+ patents and innovations<br/>
                  • 15+ industry collaborations
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {selectedTab === 1 && (
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Funding History
            </Typography>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Year</strong></TableCell>
                    <TableCell><strong>Funding Source</strong></TableCell>
                    <TableCell><strong>Amount</strong></TableCell>
                    <TableCell><strong>Purpose</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fundingHistory.map((grant, index) => (
                    <TableRow key={index}>
                      <TableCell>{grant.year}</TableCell>
                      <TableCell>{grant.source}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>{grant.amount}</TableCell>
                      <TableCell>{grant.purpose}</TableCell>
                      <TableCell>
                        <Chip
                          label={grant.status}
                          color={grant.status === 'Active' ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      )}

      {selectedTab === 2 && (
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Expenditure Breakdown
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Detailed breakdown of how research funding has been allocated and utilized
            </Typography>

            {expenditures.map((expense, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1">{expense.category}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {expense.amount} ({expense.percentage}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={expense.percentage}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Verification Notice */}
      <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
        <VerifiedIcon sx={{ fontSize: 40, color: 'success.main', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Verified Financial Records
        </Typography>
        <Typography variant="body2" color="text.secondary">
          All financial information is audited annually and complies with university and federal regulations.
          For detailed financial reports, please contact the university's financial office.
        </Typography>
      </Box>
    </Container>
  );
};

export default AccountabilityPage;
