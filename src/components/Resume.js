import React from 'react';
import { Box, Container, Typography, Paper, Grid, Divider, Fade } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const summary = [
  {
    title: 'Professional Summary',
    date: '2024',
    content:
      'Creative Full Stack Developer with 1+ year of experience delivering top-notch web applications.',
  },
];

const professionalExperience = [
  {
    title: 'Full Stack Developer',
    date: 'September 2024 - Present',
    content:
      'Leading frontend and backend projects with React, optimizing UI performance, and mentoring junior developers.',
  },
  {
    title: 'Frontend Developer',
    date: 'June 2024 - September 2024',
    content:
      'Frontend developer skilled in HTML, CSS, JavaScript, and Bootstrap to create responsive and user-friendly web interfaces..',
  },
];

const education = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    date: '2019 - 2023',
    content: 'Priyadarshini Institute of Science and Technology for Women- Electronics and Communication Engineering (ECE)',
  },
  {
    title: 'Intermediate (12th Grade)',
    date: '2017 - 2019',
    content: 'Sri Chaitanya Junior College - MPC',
  },
  {
    title: 'Secondary School Certificate (SSC)',
    date: '2016 - 2017',
    content: 'Saint Agnes E/M High School',
  },
];

const TimelineItem = ({ title, date, content }) => (
  <Box 
    className="career-timeline-item" 
    sx={{ 
      mb: { xs: 3, sm: 4 }, 
      position: 'relative', 
      pl: { xs: 4, sm: 5, md: 6 }
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: { xs: 6, sm: 8 },
        width: { xs: 12, sm: 14 },
        height: { xs: 12, sm: 14 },
        borderRadius: '50%',
        bgcolor: '#5e17eb',
        boxShadow: '0 0 8px #5e17ebaa',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        left: { xs: 5, sm: 6 },
        top: { xs: 24, sm: 28 },
        width: 2,
        height: 'calc(100% - 28px)',
        bgcolor: '#5e17eb',
        opacity: 0.3,
      }}
    />
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2.5, sm: 3, md: 4 },
        pl: { xs: 3, sm: 3.5, md: 4 },
        borderRadius: { xs: 1.5, md: 2 },
        backgroundColor: '#faf9ff',
        boxShadow: '0 4px 20px rgba(94, 23, 235, 0.15)',
        minHeight: { xs: 80, sm: 90, md: 100 },
      }}
    >
      <Typography 
        variant="h6" 
        fontWeight="bold" 
        color="#5e17eb"
        sx={{
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          lineHeight: { xs: 1.3, md: 1.6 },
          mb: { xs: 0.5, sm: 1 }
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="caption" 
        color="text.secondary" 
        sx={{ 
          mb: { xs: 1, sm: 1.5 }, 
          display: 'block',
          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' }
        }}
      >
        {date}
      </Typography>
      <Typography 
        variant="body2" 
        color="#333" 
        sx={{ 
          lineHeight: { xs: 1.4, md: 1.5 },
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.875rem' }
        }}
      >
        {content}
      </Typography>
    </Paper>
  </Box>
);

const CareerSection = () => {
  const isExtraSmall = useMediaQuery('(max-width: 400px)');
  const isSmallMobile = useMediaQuery('(max-width: 600px)');
  
  return (
    <Box
      id="resume"
      className="resume-container"
      sx={{
        backgroundColor: '#fff',
        pt: 6,
        pb: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      <Fade in timeout={800}>
        <Box sx={{ mb: { xs: 3, sm: 4, md: 5 }, textAlign: "center" }}>
          <Typography
            variant={isExtraSmall ? "h4" : isSmallMobile ? "h3" : "h3"}
            component="h2"
            fontWeight="bold"
            sx={{
              mb: { xs: 1.5, sm: 2 },
              color: "#5e17eb",
              fontSize: {
                xs: "1.75rem",
                sm: "2.125rem",
                md: "3rem"
              }
            }}
          >
            Career Highlights
          </Typography>

          <Box sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, sm: 3 },
            px: { xs: 2, sm: 0 }
          }}>
            <Divider
              sx={{
                width: { xs: 50, sm: 60, md: 80 },
                height: { xs: 2, md: 3 },
                backgroundColor: "#e0e0e0"
              }}
            />
            <Divider
              sx={{
                width: { xs: 50, sm: 60, md: 80 },
                height: { xs: 2, md: 3 },
                backgroundColor: "#5e17eb",
                mx: 0.5,
              }}
            />
            <Divider
              sx={{
                width: { xs: 50, sm: 60, md: 80 },
                height: { xs: 2, md: 3 },
                backgroundColor: "#e0e0e0"
              }}
            />
          </Box>


          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: { xs: "100%", sm: 600, md: 900 },
              mx: "auto",
              px: { xs: 1, sm: 2 },
              lineHeight: { xs: 1.6, md: 1.8 },
              mb: { xs: 3, sm: 4, md: 5 },
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }
            }}
          >
            A detailed overview of my professional journey, education, and skills.
            Committed to continuous learning and professional growth in the field of web development.
          </Typography>
        </Box>
      </Fade>

      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 1, sm: 2, md: 3 }
        }}
      >
        {/* Timelines Grid */}
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {/* Left Column: Profile Overview & Work History */}
          <Grid item xs={12} lg={6}>
            {/* Profile Overview */}
            <Typography
              variant="h4"
              fontWeight="bold"
              className="career-subheading"
              sx={{
                color: '#222',
                mb: { xs: 2.5, sm: 3 },
                borderBottom: '3px solid #5e17eb',
                width: 'fit-content',
                display: 'inline-block',
                position: 'relative',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '100%',
                  height: 3,
                  backgroundColor: '#5e17eb',
                  zIndex: -1,
                },
              }}
            >
              Profile Overview
            </Typography>
            <Box 
              className="career-timeline" 
              sx={{ 
                position: 'relative', 
                pl: { xs: 1.5, sm: 2 }, 
                mb: { xs: 5, sm: 6 }
              }}
            >
              {summary.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              ))}
            </Box>

            {/* Work History */}
            <Typography
              variant="h4"
              fontWeight="bold"
              className="career-subheading"
              sx={{
                color: '#222',
                mb: { xs: 2.5, sm: 3 },
                borderBottom: '3px solid #5e17eb',
                width: 'fit-content',
                display: 'inline-block',
                position: 'relative',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '100%',
                  height: 3,
                  backgroundColor: '#5e17eb',
                  zIndex: -1,
                },
              }}
            >
              Work History
            </Typography>
            <Box 
              className="career-timeline" 
              sx={{ 
                position: 'relative', 
                pl: { xs: 1.5, sm: 2 }
              }}
            >
              {professionalExperience.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              ))}
            </Box>
          </Grid>

          {/* Right Column: Academic Background */}
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              className="career-subheading"
              sx={{
                color: '#222',
                mb: { xs: 2.5, sm: 3 },
                borderBottom: '3px solid #5e17eb',
                width: 'fit-content',
                display: 'inline-block',
                position: 'relative',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                lineHeight: { xs: 1.3, md: 1.2 },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: '100%',
                  height: 3,
                  backgroundColor: '#5e17eb',
                  zIndex: -1,
                },
              }}
            >
              Academic Background
            </Typography>
            <Box 
              className="career-timeline" 
              sx={{ 
                position: 'relative', 
                pl: { xs: 1.5, sm: 2 }
              }}
            >
              {education.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  title={item.title}
                  date={item.date}
                  content={item.content}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerSection;