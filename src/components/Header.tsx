import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  alpha,
  useTheme,
  useScrollTrigger,
} from '@mui/material';
import { Film, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const theme = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    if (trigger && window.innerWidth < 600) {
      setShowSearch(false);
    }
  }, [trigger]);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'background.paper', // pure white background
        boxShadow: 1,
        backgroundImage: 'none',
        transition: theme.transitions.create(['background-color', 'box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
      }}
    >
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box display="flex" alignItems="center">
            <Film size={32} color={theme.palette.primary.main} />
            <Typography
              variant="h4"
              component="div"
              sx={{
                ml: 1,
                fontWeight: 700,
                letterSpacing: '0.5px',
                background: 'linear-gradient(90deg, #BB86FC 0%, #03DAC6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: { xs: showSearch ? 'none' : 'block', sm: 'block' },
              }}
            >
              CineMatch
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ flexGrow: 1 }} />

        {/* Search Bar */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            bgcolor: '#e0e0e0', // light gray background for visibility
            '&:hover': {
              bgcolor: '#cacaca', // slightly darker on hover
            },
            width: { xs: showSearch ? '100%' : '40px', sm: '40%', md: '30%' },
            transition: theme.transitions.create('width'),
          }}
        >
          <Box
            sx={{
              padding: '0 16px',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <Search
              size={20}
              color="#424242" // dark gray icon for visibility
              onClick={() => setShowSearch(true)}
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            />
          </Box>
          <InputBase
            placeholder="Search movies, actors, genres…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSearch(true)}
            sx={{
              color: '#212121', // dark text
              width: '100%',
              '& .MuiInputBase-input': {
                padding: '8px 8px 8px 48px',
                transition: theme.transitions.create('width'),
                width: '100%',
                display: { xs: showSearch ? 'block' : 'none', sm: 'block' },
              },
              '&::placeholder': {
                color: '#616161', // medium gray placeholder text
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
