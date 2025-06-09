import React, { useState, useEffect } from 'react';
import { Box, IconButton, Stack, Typography, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { icon: <HomeOutlinedIcon />, id: 'home', label: 'Home' },
  { icon: <PersonOutlineIcon />, id: 'about', label: 'About' },
  { icon: <DescriptionOutlinedIcon />, id: 'resume', label: 'Resume' },
  { icon: <CollectionsOutlinedIcon />, id: 'portfolio', label: 'Projects' },
  { icon: <ContactMailOutlinedIcon />, id: 'contact', label: 'Contact' },
];

const highlightVariants = {
  initial: { opacity: 0, scaleX: 0 },
  animate: {
    opacity: 1,
    scaleX: 1,
    boxShadow: '0 0 12px 4px rgba(94, 23, 235, 0.7)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scaleX: 0, transition: { duration: 0.2 } },
};

const NavBar = () => {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isSm = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const isMd = useMediaQuery(theme.breakpoints.down('lg')); // < 1200px

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const offsets = sections
      .map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, offset: el.offsetTop } : null;
      })
      .filter(Boolean);

    for (let i = offsets.length - 1; i >= 0; i--) {
      if (scrollY + 150 >= offsets[i].offset) {
        setActive(offsets[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Responsive sizing functions
  const getNavPadding = () => {
    if (isXs) return '12px 16px';
    if (isSm) return '16px 24px';
    return '16px 32px';
  };

  const getNameFontSize = () => {
    if (isXs) return { fontSize: '1.5rem' };
    if (isSm) return { fontSize: '1.8rem' };
    return { fontSize: '2rem' };
  };

  const getIconSize = () => {
    if (isXs) return 24;
    if (isSm) return 28;
    return 32;
  };

  const getIconSpacing = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    return 3;
  };

  // Mobile Drawer Content
  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e9f0ff 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#5e17eb',
            letterSpacing: '1px',
          }}
        >
          MADHAVI
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: '#5e17eb',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <List sx={{ flex: 1, pt: 3 }}>
        {sections.map((section, index) => {
          const isActive = active === section.id;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem
                button
                onClick={() => scrollToSection(section.id)}
                sx={{
                  mx: 1,
                  borderRadius: '12px',
                  mb: 1,
                  backgroundColor: isActive ? 'rgba(94, 23, 235, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(94, 23, 235, 0.15)',
                    transform: 'translateX(8px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? '#5e17eb' : '#455a64',
                    minWidth: 40,
                  }}
                >
                  {React.cloneElement(section.icon, {
                    sx: { fontSize: 24 }
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#5e17eb' : '#455a64',
                  }}
                />
              </ListItem>
            </motion.div>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            padding: getNavPadding(),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Name on the left - clickable to home */}
          <Typography
            variant="h4"
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            sx={{
              ...getNameFontSize(),
              fontWeight: 'bold',
              color: '#5e17eb',
              letterSpacing: { xs: '1px', sm: '1.5px', md: '2px' },
              userSelect: 'none',
              textShadow: '0 2px 4px rgba(94, 23, 235, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#5e17eb',
                textShadow: '0 4px 8px rgba(94, 23, 235, 0.5)',
              },
            }}
          >
            MADHAVI
          </Typography>

          {/* Desktop Navigation - Hidden on mobile */}
          {!isSm && (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Stack direction="row" spacing={getIconSpacing()} alignItems="center">
                {sections.map((section, index) => {
                  const isActive = active === section.id;
                  return (
                    <Box key={section.id} sx={{ position: 'relative' }}>
                      <IconButton
                        onClick={() => scrollToSection(section.id)}
                        component={motion.button}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ rotate: 10, scale: 0.9 }}
                        sx={{
                          color: isActive ? '#5e17eb' : '#455a64',
                          transition: 'color 0.3s ease',
                          filter: isActive ? 'drop-shadow(0 0 8px rgba(94, 23, 235, 0.7))' : 'none',
                          backgroundColor: 'transparent',
                          p: { md: 1, lg: 1.5 },
                          '&:hover': {
                            color: '#4a0d9e',
                            backgroundColor: 'rgba(94, 23, 235, 0.1)',
                          },
                        }}
                      >
                        {React.cloneElement(section.icon, {
                          sx: { fontSize: getIconSize() }
                        })}
                      </IconButton>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="highlight"
                            variants={highlightVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={{
                              position: 'absolute',
                              left: '20%',
                              bottom: -8,
                              transform: 'translateX(-50%)',
                              width: isMd ? 28 : 32,
                              height: 3,
                              borderRadius: 2,
                              backgroundColor: '#5e17eb',
                              pointerEvents: 'none',
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          )}

          {/* Mobile Menu Button - Only shown on small screens */}
          {isSm && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                color: '#5e17eb',
                backgroundColor: 'rgba(94, 23, 235, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(94, 23, 235, 0.2)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: isXs ? 24 : 28 }} />
            </IconButton>
          )}

          {/* Balance space for desktop */}
          {!isSm && <Box sx={{ width: { md: '100px', lg: '120px' } }} />}
        </Box>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;