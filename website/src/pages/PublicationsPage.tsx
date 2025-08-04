import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Link,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import {
  Search as SearchIcon,
  Article as ArticleIcon
} from '@mui/icons-material';
import { publications, type Publication } from '../data/publications';

const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Get unique years and types for filters
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [...new Set(publications.map(pub => pub.type))];

  // Filter publications based on search and filters
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = searchTerm === '' || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = yearFilter === 'all' || pub.year.toString() === yearFilter;
    const matchesType = typeFilter === 'all' || pub.type === typeFilter;
    
    return matchesSearch && matchesYear && matchesType;
  });

  // Group publications by year
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`;
  };

  const formatCitation = (pub: Publication) => {
    const authorsStr = formatAuthors(pub.authors);
    const volumePages = pub.volume && pub.pages ? ` ${pub.volume}:${pub.pages}` : 
                       pub.volume ? ` ${pub.volume}` : 
                       pub.pages ? `:${pub.pages}` : '';
    
    return `${authorsStr}. ${pub.title}. ${pub.journal}. ${pub.year}${volumePages}.`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <ArticleIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Scientific Publications
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Complete list of peer-reviewed research publications
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Total Publications: {publications.length} | Years: {Math.min(...years)} - {Math.max(...years)}
        </Typography>
      </Box>

      {/* Filters */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, minWidth: 300 }}
          />
          
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Year</InputLabel>
            <Select
              value={yearFilter}
              label="Year"
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <MenuItem value="all">All Years</MenuItem>
              {years.map(year => (
                <MenuItem key={year} value={year.toString()}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={typeFilter}
              label="Type"
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <MenuItem value="all">All Types</MenuItem>
              {types.map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        
        {(searchTerm || yearFilter !== 'all' || typeFilter !== 'all') && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Showing {filteredPublications.length} of {publications.length} publications
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Publications List */}
      {sortedYears.map(year => (
        <Box key={year} sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
            {year}
          </Typography>
          
          {publicationsByYear[year].map((pub, index) => (
            <Paper key={pub.id} sx={{ p: 3, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 30 }}>
                  {index + 1}.
                </Typography>
                
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                    {formatCitation(pub)}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                    <Chip 
                      label={pub.type} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                    />
                    {pub.category && (
                      <Chip 
                        label={pub.category} 
                        size="small" 
                        color="secondary" 
                        variant="outlined" 
                      />
                    )}
                    {pub.doi && (
                      <Link 
                        href={`https://doi.org/${pub.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{ ml: 1 }}
                      >
                        DOI: {pub.doi}
                      </Link>
                    )}
                    {pub.url && (
                      <Link 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{ ml: 1 }}
                      >
                        Full Text
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
          
          {year !== sortedYears[sortedYears.length - 1] && (
            <Divider sx={{ my: 4 }} />
          )}
        </Box>
      ))}

      {filteredPublications.length === 0 && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No publications found matching your criteria
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default PublicationsPage;
