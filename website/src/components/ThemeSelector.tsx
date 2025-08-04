import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Chip,
  Tooltip
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import { useTheme } from '../hooks/useTheme';
import { trackThemeInteraction } from '../utils/analytics';

const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    trackThemeInteraction('theme_menu_open');
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeKey: string) => {
    const themeName = availableThemes[themeKey as keyof typeof availableThemes].name;
    setTheme(themeKey);
    trackThemeInteraction('theme_changed', themeName);
    handleClose();
  };

  const getThemePreview = (themeKey: string) => {
    const theme = availableThemes[themeKey as keyof typeof availableThemes];
    return (
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          border: '2px solid white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          mr: 1
        }}
      />
    );
  };

  return (
    <Box>
      <Tooltip title="Change Theme">
        <IconButton
          onClick={handleClick}
          sx={{
            color: 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <PaletteIcon />
        </IconButton>
      </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            borderRadius: 2
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
            Choose Theme
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Select your preferred color scheme
          </Typography>
        </Box>
        
        {Object.entries(availableThemes).map(([key, theme]) => (
          <MenuItem
            key={key}
            onClick={() => handleThemeSelect(key)}
            sx={{
              py: 1.5,
              px: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {getThemePreview(key)}
              <Typography variant="body1">
                {theme.name}
              </Typography>
            </Box>
            
            {currentTheme === key && (
              <CheckIcon sx={{ fontSize: 20, color: 'primary.main' }} />
            )}
          </MenuItem>
        ))}
        
        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Chip
            label="Theme saved automatically"
            size="small"
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
        </Box>
      </Menu>
    </Box>
  );
};

export default ThemeSelector;
