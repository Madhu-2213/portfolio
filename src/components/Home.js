import React, { useEffect, useRef } from 'react';
import { Box, Typography, Stack, IconButton, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AnimatedBackground = ({ particleCount, isMobile }) => {
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <motion.div
      key={i}
      className="particle"
      style={{
        position: 'absolute',
        width: isMobile ? '2px' : '3px',
        height: isMobile ? '2px' : '3px',
        backgroundColor: '#5e17eb',
        borderRadius: '50%',
        opacity: Math.random() * 0.5 + 0.2,
      }}
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
    />
  ));

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {particles}
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
  const isSm = useMediaQuery(theme.breakpoints.down('md')); // < 900px
  const isMd = useMediaQuery(theme.breakpoints.down('lg')); // < 1200px
  const isLg = useMediaQuery(theme.breakpoints.down('xl')); // < 1536px

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about') || document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.8
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
        duration: 1
      }
    }
  };

  // Responsive sizing functions
  const getContainerPadding = () => {
    if (isXs) return { xs: 2 };
    if (isSm) return { xs: 2, sm: 3 };
    if (isMd) return { xs: 2, sm: 3, md: 4 };
    return { xs: 2, sm: 3, md: 4, lg: 6 };
  };

  const getMainFontSize = () => {
    if (isXs) return { xs: '1.8rem' };
    if (isSm) return { xs: '2rem', sm: '2.5rem' };
    if (isMd) return { xs: '2rem', sm: '2.5rem', md: '3rem' };
    return { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem', xl: '4.5rem' };
  };

  const getSubtitleFontSize = () => {
    if (isXs) return { xs: '1.1rem' };
    if (isSm) return { xs: '1.2rem', sm: '1.4rem' };
    if (isMd) return { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' };
    return { xs: '1.2rem', sm: '1.4rem', md: '1.8rem', lg: '2rem' };
  };

  const getImageSize = () => {
    if (isXs) return { width: 200, height: 200 };
    if (isSm) return { width: 240, height: 240 };
    if (isMd) return { width: 280, height: 280 };
    if (isLg) return { width: 320, height: 320 };
    return { width: 350, height: 350 };
  };

  const getParticleCount = () => {
    if (isXs) return 20;
    if (isSm) return 30;
    if (isMd) return 40;
    return 50;
  };

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e9f0ff 100%)',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, sm: 10, md: 12 }, // Account for navbar
      }}
    >
      {/* Custom Animated Background */}
      <AnimatedBackground particleCount={getParticleCount()} isMobile={isXs} />

      {/* Custom background shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '-5%', md: '-10%' },
            right: { xs: '-15%', md: '-10%' },
            width: { xs: '300px', sm: '400px', md: '500px' },
            height: { xs: '300px', sm: '400px', md: '500px' },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94,23,235,0.3) 0%, rgba(94,23,235,0) 70%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: '-20%', md: '-15%' },
            left: { xs: '-15%', md: '-10%' },
            width: { xs: '400px', sm: '500px', md: '600px' },
            height: { xs: '400px', sm: '500px', md: '600px' },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94,23,235,0.2) 0%, rgba(94,23,235,0) 70%)',
          }}
        />
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: getContainerPadding(),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, sm: 5, md: 6, lg: 4 },
            py: { xs: 4, sm: 6, md: 8 },
            minHeight: { xs: 'auto', md: '80vh' },
          }}
        >
          {/* Left Content Section */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', lg: 'left' },
              maxWidth: { xs: '100%', lg: '55%' },
              order: { xs: 2, lg: 1 },
            }}
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={titleVariants}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: getMainFontSize(),
                  fontWeight: { xs: 700, md: 800 },
                  color: '#222',
                  letterSpacing: { xs: -0.5, md: -1 },
                  lineHeight: { xs: 1.2, md: 1.1 },
                  mb: { xs: 1.5, md: 2 },
                  backgroundImage: 'linear-gradient(45deg, #333333, #5e17eb)',
                  backgroundSize: '100%',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  wordBreak: { xs: 'break-word', sm: 'normal' },
                }}
              >
                MADHAVI VALLABHANENI
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={subtitleVariants}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: getSubtitleFontSize(),
                  fontWeight: 500,
                  color: '#5e17eb',
                  mb: { xs: 2, md: 3 },
                  height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                }}
              >
                <Typewriter
                  words={[
                    'MERN Stack Developer 💻',
                    'Frontend Developer 🎨',
                    'Backend Developer ⚙️',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={socialVariants}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  color: '#555',
                  maxWidth: { xs: '100%', sm: '90%', lg: '85%' },
                  mb: { xs: 3, md: 4 },
                  mx: { xs: 'auto', lg: 0 },
                  lineHeight: { xs: 1.6, md: 1.7 },
                  textAlign: { xs: 'center', lg: 'left' },
                }}
              >
                Designing efficient, modern web solutions with a focus on performance and usability. Committed to writing clean code and delivering smooth user interactions.
              </Typography>

              <Stack
                direction="row"
                spacing={isXs ? 1.5 : 2}
                mb={isXs ? 3 : 4}
                justifyContent={{ xs: 'center', lg: 'flex-start' }}
                flexWrap="wrap"
              >
                <IconButton
                  href="https://www.linkedin.com/in/madhavi-vallabhaneni-981b56251/"
                  target="_blank"
                  sx={{
                    backgroundColor: '#0A66C2',
                    color: 'white',
                    width: { xs: 40, sm: 44, md: 48 },
                    height: { xs: 40, sm: 44, md: 48 },
                    '&:hover': {
                      backgroundColor: '#084a94',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 15px rgba(10, 102, 194, 0.3)'
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <LinkedInIcon fontSize={isXs ? "small" : "medium"} />
                </IconButton>
                <IconButton
                  href="https://github.com/Madhu-2213"
                  target="_blank"
                  sx={{
                    backgroundColor: '#24292E',
                    color: 'white',
                    width: { xs: 40, sm: 44, md: 48 },
                    height: { xs: 40, sm: 44, md: 48 },
                    '&:hover': {
                      backgroundColor: '#333',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 15px rgba(36, 41, 46, 0.3)'
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <GitHubIcon fontSize={isXs ? "small" : "medium"} />
                </IconButton>
                <IconButton
                  href="mailto:vallabhanenimadhavi22@gmail.com"
                  sx={{
                    backgroundColor: '#5e17eb',
                    color: 'white',
                    width: { xs: 40, sm: 44, md: 48 },
                    height: { xs: 40, sm: 44, md: 48 },
                    '&:hover': {
                      backgroundColor: '#4313ad',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 15px rgba(94, 23, 235, 0.3)'
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <EmailIcon fontSize={isXs ? "small" : "medium"} />
                </IconButton>
              </Stack>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={buttonVariants}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent={{ xs: 'center', lg: 'flex-start' }}
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size={isXs ? "medium" : "large"}
                  onClick={() => {
                    const portfolioSection = document.getElementById('portfolio');
                    if (portfolioSection) {
                      portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  sx={{
                    backgroundColor: '#5e17eb',
                    color: 'white',
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.2, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    borderRadius: '50px',
                    textTransform: 'none',
                    boxShadow: '0 8px 20px rgba(94, 23, 235, 0.3)',
                    minWidth: { xs: '160px', sm: 'auto' },
                    '&:hover': {
                      backgroundColor: '#4a12c0',
                      boxShadow: '0 10px 25px rgba(94, 23, 235, 0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Projects
                </Button>
              </Stack>
            </motion.div>
          </Box>

          {/* Right Profile Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              maxWidth: { xs: '100%', lg: '45%' },
              order: { xs: 1, lg: 2 },
            }}
          >
            {/* Background circle effect */}
            <Box
              sx={{
                position: 'absolute',
                width: getImageSize().width + 40,
                height: getImageSize().height + 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(94,23,235,0.15) 0%, rgba(94,23,235,0.03) 100%)',
                filter: 'blur(5px)',
                zIndex: 0,
              }}
            />

            {/* Decorative circles - only show on larger screens */}
            {!isXs && (
              <>
                <Box
                  component={motion.div}
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 30,
                      ease: "linear",
                      repeat: Infinity
                    }
                  }}
                  sx={{
                    position: 'absolute',
                    width: getImageSize().width + 80,
                    height: getImageSize().height + 80,
                    borderRadius: '50%',
                    border: '1px dashed rgba(94,23,235,0.3)',
                    zIndex: 0,
                  }}
                />

                <Box
                  component={motion.div}
                  animate={{
                    rotate: -360,
                    transition: {
                      duration: 45,
                      ease: "linear",
                      repeat: Infinity
                    }
                  }}
                  sx={{
                    position: 'absolute',
                    width: getImageSize().width + 60,
                    height: getImageSize().height + 60,
                    borderRadius: '50%',
                    border: '1px dashed rgba(94,23,235,0.2)',
                    zIndex: 0,
                  }}
                />
              </>
            )}

            {/* Profile Image with advanced styling */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={profileVariants}
              whileHover={{
                scale: isXs ? 1.02 : 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Profile image with gradient border */}
              <Box
                sx={{
                  position: 'relative',
                  width: getImageSize().width,
                  height: getImageSize().height,
                  borderRadius: '50%',
                  background: 'linear-gradient(140deg, #5e17eb, #9c55ff)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: { xs: '4px', sm: '5px', md: '6px' },
                  zIndex: 1,
                }}
              >
                <Box
                  component="img"
                  src="/images/Madhavi.jpg"
                  alt="Madhavi Vallabhaneni"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: { xs: '3px solid white', md: '4px solid white' },
                    boxShadow: {
                      xs: '0 10px 25px rgba(94, 23, 235, 0.2)',
                      md: '0 15px 35px rgba(94, 23, 235, 0.3)'
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Scroll down indicator - hide on very small screens */}
      {!isXs && (
        <Box
          component={motion.div}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          sx={{
            position: 'absolute',
            bottom: { xs: 20, sm: 30, md: 40 },
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            zIndex: 2,
          }}
          onClick={scrollToNextSection}
        >
          <IconButton
            size={isXs ? "small" : "medium"}
            sx={{
              backgroundColor: 'rgba(94,23,235,0.1)',
              color: '#5e17eb',
              '&:hover': {
                backgroundColor: 'rgba(94,23,235,0.2)',
              },
            }}
          >
            <KeyboardArrowDownIcon fontSize={isSm ? "medium" : "large"} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Home;