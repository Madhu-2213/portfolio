import React from "react";
import Skills from "./Skills";
import {
  Grid,
  Typography,
  Box,
  Container,
  Divider,
  useTheme,
  useMediaQuery,
  Grow,
  Fade,
  Zoom,
  Button,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const personalDetails = [
  { label: "Birthday", value: "3 April 2001" },
  { label: "Phone", value: "+91 8143382213" },
  { label: "City", value: "Hyderabad, India" },
  { label: "Age", value: "24" },
  { label: "Degree", value: "ECE, Bachelor of Technology (B.Tech)" },
  { label: "Email", value: "vallabhanenimadhavi22@gmail.com" },
  { label: "LinkedIn", value: " https://www.linkedin.com/in/madhavi-vallabhaneni-981b56251/ " },
  { label: "GitHub", value: "https://github.com/Madhu-2213" }
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery("(max-width:400px)");

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        position: "relative",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {/* Section Header */}
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
              About
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
              Creating elegant, high-performance web solutions with modern technologies.
              Passionate about clean code and exceptional user experiences.
            </Typography>
          </Box>
        </Fade>

        {/* Main Content */}
        <Box
          sx={{
            mb: { xs: 4, sm: 6, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'center' }
          }}
        >
          <Grow in timeout={1200}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
              }}
            >
              <Typography
                variant={isExtraSmall ? "h5" : isSmallMobile ? "h4" : "h4"}
                component="h3"
                fontWeight="bold"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  color: "#5e17eb",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.125rem"
                  }
                }}
              >
                Full Stack Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 3, sm: 4 },
                  fontStyle: "italic",
                  color: "text.secondary",
                  lineHeight: { xs: 1.6, md: 1.8 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  maxWidth: { xs: "100%", sm: "80%", md: "70%" },
                  textAlign: "center"
                }}
              >
                Creative and detail-oriented web developer skilled in React, JavaScript, and modern UI design.
              </Typography>

              <Grid
                container
                spacing={{ xs: 2, sm: 3 }}
                sx={{
                  maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                  justifyContent: "center"
                }}
              >
                <Grid item xs={12} sm={12} md={6}>
                  {personalDetails.slice(0, 4).map((detail, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        mb: { xs: 2, md: 2.5 },
                        alignItems: "flex-start",
                        transition: "0.3s",
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: { xs: "left", sm: "left" },
                        "&:hover": {
                          pl: { xs: 0, sm: 1 },
                        },
                      }}
                    >
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: { xs: 0.5, sm: 0 },
                        width: { xs: "100%", sm: "auto" }
                      }}>
                        <ArrowForwardIos
                          sx={{
                            color: "#5e17eb",
                            mr: 1,
                            fontSize: { xs: 14, md: 16 },
                            flexShrink: 0
                          }}
                        />
                        <Typography
                          component="span"
                          fontWeight="medium"
                          color="#4b4b4b"
                          sx={{
                            width: { xs: "auto", sm: 90, md: 90 },
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            minWidth: { sm: 90 }
                          }}
                        >
                          {detail.label}:
                        </Typography>
                      </Box>
                      <Typography
                        component="span"
                        color="text.secondary"
                        sx={{
                          ml: { xs: 0, sm: 1 },
                          pl: { xs: 3, sm: 0 },
                          fontSize: { xs: "0.85rem", md: "1rem" },
                          wordBreak: detail.label === "Email" || detail.label === "LinkedIn" || detail.label === "GitHub" ? "break-all" : "normal",
                          lineHeight: 1.4
                        }}
                      >
                        {detail.value}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  {personalDetails.slice(4).map((detail, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        mb: { xs: 2, md: 2.5 },
                        alignItems: "flex-start",
                        transition: "0.3s",
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: { xs: "left", sm: "left" },
                        "&:hover": {
                          pl: { xs: 0, sm: 1 },
                        },
                      }}
                    >
                      <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: { xs: 0.5, sm: 0 },
                        width: { xs: "100%", sm: "auto" }
                      }}>
                        <ArrowForwardIos
                          sx={{
                            color: "#5e17eb",
                            mr: 1,
                            fontSize: { xs: 14, md: 16 },
                            flexShrink: 0
                          }}
                        />
                        <Typography
                          component="span"
                          fontWeight="medium"
                          color="#4b4b4b"
                          sx={{
                            width: { xs: "auto", sm: 90, md: 90 },
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            minWidth: { sm: 90 }
                          }}
                        >
                          {detail.label}:
                        </Typography>
                      </Box>
                      <Typography
                        component="span"
                        color="text.secondary"
                        sx={{
                          ml: { xs: 0, sm: 1 },
                          pl: { xs: 3, sm: 0 },
                          fontSize: { xs: "0.85rem", md: "1rem" },
                          wordBreak: detail.label === "Email" || detail.label === "LinkedIn" || detail.label === "GitHub" ? "break-all" : "normal",
                          lineHeight: 1.4
                        }}
                      >
                        {detail.value}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grow>
        </Box>
      </Container>
      <Skills />
    </Box>
  );
};

export default About;