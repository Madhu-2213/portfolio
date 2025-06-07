import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
  Link,
  useMediaQuery,
  useTheme,
  Fade,
  Zoom,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { keyframes } from '@mui/system';

// Define animations
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(94, 23, 235, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(94, 23, 235, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(94, 23, 235, 0.2);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'vallabhanenimadhavi22@gmail.com',
    color: '#5e17eb',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91 8143382213',
    color: '#5e17eb',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Hyderabad, India',
    color: '#5e17eb',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/madhavi-vallabhaneni-981b56251',
    link: ' https://www.linkedin.com/in/madhavi-vallabhaneni-981b56251/ ',
    color: '#5e17eb',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/Madhu-2213',
    link: 'https://github.com/Madhu-2213 ',
    color: '#5e17eb',
  },
];

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery('(max-width:400px)');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container 
      id="contact" 
      maxWidth="lg" 
      sx={{
        pb: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Fade in={isVisible} timeout={1000}>
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, sm: 8, md: 10 }, 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 1, sm: 2 }
        }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
              color: '#5e17eb',
              fontWeight: 700,
              letterSpacing: { xs: 2, sm: 2.5, md: 3 },
              textTransform: 'uppercase',
              mb: { xs: 0.5, sm: 1 },
              display: 'block',
              textShadow: '0 2px 10px rgba(94, 23, 235, 0.3)',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { 
                xs: '1.8rem', 
                sm: '2.2rem', 
                md: '2.8rem', 
                lg: '3.5rem' 
              },
              fontWeight: "bold",
              background: '#5e17eb',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 1.5, sm: 2 },
              letterSpacing: { xs: '-0.3px', md: '-0.5px' },
              lineHeight: { xs: 1.2, sm: 1.1 }
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: { xs: '100%', sm: 600, md: 700 },
              mx: 'auto',
              color: '#555',
              lineHeight: { xs: 1.6, md: 1.8 },
              pb: { xs: 1.5, sm: 2 },
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              px: { xs: 1, sm: 0 }
            }}
          >
            Feel free to reach out if you'd like to collaborate on a project or just want to connect. 
            I'll do my best to respond within 24 hours!
          </Typography>
        </Box>
      </Fade>

      <Box 
        sx={{
          maxWidth: { xs: '100%', sm: 900, md: 1000 },
          mx: 'auto',
          px: { xs: 0, sm: 2, md: 0 }
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }} 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch'
          }}
        >
          {contactInfo.map((item, index) => (
            <Grid 
              item 
              xs={12} 
              sm={12}
              md={index < 2 ? 6 : 4} 
              key={item.label}
              sx={{ 
                display: 'flex',
                transform: isVisible ? 'none' : 'translateY(40px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
              }}
            >
              <Paper
                elevation={0}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  width: '100%',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 3, sm: 4 },
                  borderRadius: { xs: 4, sm: 5, md: 6 },
                  background: hoveredCard === index 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(15px)',
                  boxShadow: hoveredCard === index 
                    ? '0 25px 50px rgba(94, 23, 235, 0.25), 0 0 0 1px rgba(94, 23, 235, 0.1)' 
                    : '0 15px 35px rgba(94, 23, 235, 0.15), 0 0 0 1px rgba(94, 23, 235, 0.05)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: hoveredCard === index 
                    ? { xs: 'translateY(-8px) scale(1.02)', md: 'translateY(-12px) scale(1.03)' }
                    : 'translateY(0) scale(1)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  minHeight: { xs: 80, sm: 90, md: 100 },
                  '&::before': hoveredCard === index ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: { xs: '3px', md: '4px' },
                    background: `linear-gradient(to bottom, ${item.color}, ${item.color}CC)`,
                    boxShadow: `0 0 20px ${item.color}`,
                  } : {},
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: 50, sm: 55, md: 60 },
                    height: { xs: 50, sm: 55, md: 60 },
                    borderRadius: '50%',
                    backgroundColor: hoveredCard === index ? `${item.color}30` : `${item.color}20`,
                    color: item.color,
                    fontSize: { xs: 22, sm: 25, md: 28 },
                    mr: { xs: 2.5, sm: 3 },
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    animation: hoveredCard === index ? `${pulse} 2s infinite` : 'none',
                    boxShadow: hoveredCard === index ? `0 10px 25px ${item.color}40` : 'none',
                  }}
                >
                  {React.cloneElement(item.icon, { 
                    fontSize: 'inherit',
                    sx: {
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === index ? 'scale(1.15)' : 'scale(1)',
                    }
                  })}
                </Box>

                <Box sx={{ 
                  flexGrow: 1, 
                  minWidth: 0, // Prevents flex item from overflowing
                  overflow: 'hidden'
                }}>
                  <Typography
                    variant="h6"
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                      mb: { xs: 0.25, sm: 0.5 },
                      transition: 'color 0.3s ease',
                      color: hoveredCard === index ? item.color : '#333',
                      lineHeight: 1.3
                    }}
                  >
                    {item.label}
                  </Typography>
                  
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      sx={{
                        color: hoveredCard === index ? item.color : '#555',
                        fontWeight: 500,
                        fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                        transition: 'all 0.3s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        wordBreak: 'break-word',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                        lineHeight: 1.4,
                        '&:hover': {
                          color: item.color,
                          transform: { xs: 'translateX(2px)', md: 'translateX(3px)' },
                        },
                      }}
                    >
                      {isExtraSmall && item.label === 'LinkedIn' 
                        ? 'LinkedIn Profile'
                        : isExtraSmall && item.label === 'GitHub'
                        ? 'GitHub Profile'
                        : isSmallMobile && item.label === 'Email'
                        ? 'vallabhanenimadhavi22@gmail.com'
                        : item.value}
                    </Link>
                  ) : (
                    <Typography
                      sx={{ 
                        color: hoveredCard === index ? '#333' : '#555', 
                        fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' }, 
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        wordBreak: item.label === 'Email' ? 'break-all' : 'break-word',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        lineHeight: 1.4
                      }}
                    >
                      {item.value}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;