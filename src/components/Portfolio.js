import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
  CardMedia,
  Container,
  Fade,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

// Styled card with fixed dimensions and proper centering
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  transition: "0.3s",
  boxShadow: theme.shadows[3],
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: 2,
  height: "500px",
  width: "100%",
  '&:hover': {
    boxShadow: theme.shadows[6],
    transform: "translateY(-5px)",
  },
}));

const ImageContainer = styled(Box)({
  height: "200px",
  width: "100%",
  overflow: "hidden",
});

const CardContentWrapper = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  height: "230px",
  overflow: "hidden",
});

const TitleWrapper = styled(Box)({
  height: "40px",
  marginBottom: "16px",
  overflow: "hidden",
});

const DescriptionWrapper = styled(Box)({
  height: "80px",
  marginBottom: "16px",
  overflow: "hidden",
});


const TechWrapper = styled(Box)({
  height: "60px",
  marginBottom: "16px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  overflow: "hidden",
});

const ButtonWrapper = styled(Box)({
  height: "70px",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid #f0f0f0",
});

// === Projects List ===
const projects = [
  {
    title: "E-Commerce Website",
    description: "An e-commerce platform with cart, payment gateway, and admin dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    year: "2024",
    image: "/images/SouWild.jpg",
    link: "https://sou-wild.web.app/",
    github: "https://github.com/Madhu-2213/Sou-Wild"
  },
  {
    title: "Insurance Website",
    description: "A responsive and modern insurance website showcasing services, plans, and contact options.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    image: "/images/Insura.png",
    link: "https://insurance-ae7d7.web.app/",
    github: "https://github.com/Madhu-2213/Insura"
  },
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio website built with React and animations.",
    tech: ["React", "Material UI", "Framer Motion"],
    year: "2024",
    image: "/images/Pf.png",
    link: "https://madhavi-vallabhaneni-22.web.app/",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Water Bottles Website",
    description: "Website for showcasing and selling water bottles. Built with HTML, CSS, and JavaScript. Hosted on Firebase.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    image: "/images/Water Bottle.png",
    link: "https://h2go-84202.web.app/",
    github: "https://github.com/Madhu-2213/H2GO-Water-Bottle"
  },
  {
    title: "Diabetes Awareness Website",
    description: "A simple diabetes info site that helps users understand sugar levels and health tips. Built with HTML, CSS, and JavaScript. Hosted on Firebase.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    image: "/images/Glyco-check.png",
    link: "https://glyco-check.web.app/",
    github: "https://github.com/Madhu-2213/Glyko-check"
  },
  {
    title: "Mobile Case Website",
    description: "A simple and responsive website to browse and buy mobile cases online.",
    tech: ["React js", "Material UI", "Responsive Design"],
    year: "2024",
    image: "/images/phone glow.png",
    link: "https://mobilecase-demo.web.app/",
    github: "https://github.com/Madhu-2213/Phone-glow"
  },
];

// === Component ===
const Portfolio = () => {
  return (
    <Box
      id="portfolio"
      sx={{
        py: 10,
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box sx={{ mb: 5, textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 2, color: "#5e17eb" }}
            >
              Portfolio
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <Divider sx={{ width: 80, height: 3, backgroundColor: "#e0e0e0" }} />
              <Divider sx={{ width: 80, height: 3, backgroundColor: "#5e17eb", mx: 0.5 }} />
              <Divider sx={{ width: 80, height: 3, backgroundColor: "#e0e0e0" }} />
            </Box>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 900,
                mx: "auto",
                px: 2,
                lineHeight: 1.8,
                mb: 5,
                color: "#4b4b4b",
              }}
            >
              Selected projects that reflect my passion for building modern web applications.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "350px",
                  display: "flex"
                }}
              >
                <StyledCard>
                  <ImageContainer>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </ImageContainer>

                  <CardContentWrapper>
                    <TitleWrapper>
                      <Typography
                        variant="h5"
                        component="h3"
                        noWrap
                        sx={{
                          color: "#5e17eb",
                          fontWeight: "bold",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "100%",
                        }}
                      >
                        {project.title}
                      </Typography>
                    </TitleWrapper>

                    <DescriptionWrapper>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4b4b4b",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {project.description}
                      </Typography>
                    </DescriptionWrapper>

                    <TechWrapper>
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: "#f5f5f5",
                            color: "#5e17eb",
                            "&:hover": {
                              backgroundColor: "#e0e0e0",
                            },
                          }}
                        />
                      ))}
                    </TechWrapper>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4b4b4b",
                        height: "20px",
                        overflow: "hidden",
                      }}
                    >
                      Year: {project.year}
                    </Typography>
                  </CardContentWrapper>

                  <ButtonWrapper>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        variant="outlined"
                        href={project.github}
                        target="_blank"
                        startIcon={<GitHubIcon />}
                        sx={{
                          borderColor: "#5e17eb",
                          color: "#5e17eb",
                          "&:hover": {
                            borderColor: "#4a00b3",
                            backgroundColor: "#f3e8ff",
                          },
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<LaunchIcon />}
                        href={project.link}
                        target="_blank"
                        sx={{
                          backgroundColor: "#5e17eb",
                          "&:hover": {
                            backgroundColor: "#4a00b3",
                          },
                        }}
                      >
                        Live
                      </Button>
                    </Box>
                  </ButtonWrapper>
                </StyledCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
