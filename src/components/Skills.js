import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { label: 'MongoDB', value: 85 },
  { label: 'Express.js', value: 80 },
  { label: 'React.js', value: 95 },
  { label: 'Node.js', value: 88 },
  { label: 'MySQL', value: 75 },
  { label: 'HTML', value: 98 },
  { label: 'CSS', value: 96 },
  { label: 'JavaScript', value: 94 },
  { label: 'Core Java', value: 82 },
  { label: 'Python', value: 79 },
  { label: 'Bootstrap', value: 89 },
  { label: 'SQL', value: 92 },
];

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 10);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setCount(Math.round(start));
    }, 10);
    return () => clearInterval(counter);
  }, [value]);

  return (
    <Typography variant="h6" sx={{ color: '#5e17eb', fontWeight: 700 }}>
      {count}%
    </Typography>
  );
};

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        backgroundColor: '#fff',
        pt: 6,
        pb: 0,
        px: { xs: 3, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        mb={8}
        sx={{
          color: '#111',
        }}
      >
        My <span style={{ color: '#5e17eb' }}>Skills</span>
      </Typography>

      <Grid container spacing={5}>
        {skills.map((skill, i) => (
          <Grid item xs={12} sm={6} md={6} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 6,
                  minHeight: 90,
                  background: 'rgba(255,255,255,0.85)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    sx={{ color: '#333' }}
                  >
                    {skill.label}
                  </Typography>
                  <AnimatedCounter value={skill.value} />
                </Box>

                {/* Linear Gradient Progress Bar */}
                <Box
                  sx={{
                    height: 12,
                    width: '100%',
                    background: '#e0e0e0',
                    borderRadius: 30,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      borderRadius: 30,
                      background: 'linear-gradient(to right, #5e17eb, #a46cf3)',
                      boxShadow: '0 0 12px #5e17eb66',
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
