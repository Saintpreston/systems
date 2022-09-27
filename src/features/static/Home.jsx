import React from "react";
import { Box, Grid, Typography, Container} from "@mui/material";
import {useTheme} from "@mui/material";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Container maxWidth="lg" sx={{ justifyContent: "space-evenly", flexFlow: 'column wrap' }}>
      <SubHero />
        <CourseDescription />
      </Container>
    </main>
  );
}

const Hero = () => {
  return (
   
    <Grid
      container
      sx={{
        height: "80vh",
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: '100vw',
        
      }}
    >
      
      <Grid item xs={12} md={6}>
        <Typography variant="h2">_coreStudioSystems</Typography>
        <Typography variant="h6">
          An analysis of myself, the world around me and the systems that
          connect or divide us.{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1">⚙️</Typography>
      </Grid>
    
    </Grid>
   
  );
};

const SubHero = () => {

  
  return (
    <Box
      sx={{
        height: "10vh",
        minWidth: "100vw",
        backgroundColor: 'black',
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography sx={{ marginLeft: "5vw" }} color="white">
        This work was done by Preston Bourne as part of the Parsons Design &&
        Technology Junior Year Curriculum.{" "}
      </Typography>
    </Box>
  );
};

const CourseDescription = () => {
  return (
    <>
    
      <Typography variant="h4">Overview</Typography>
      <Typography >
        This course was an intensive project-based studio, focusing on the
        organization of systems. how systems and networks are structured,
        function, and interact with each other. The course investigates online
        networks, urban landscapes, and projecting systems into the future, in
        varying degrees of scale and contexts. It will examine different
        qualities of systems, including individual / social, individual / civic,
        public / private. Students will produce projects with increasing
        complexity, focusing on design research and the iterative design process
        and future development. The Studio course focuses on critical design
        skills, including effective verbal and written presentations,
        constructive critique, and understanding context. Weekly reading and
        writing assignments will relate studio work to broader contexts and
        precedents, encourage reflection ahead of new project iterations, and
        build towards compelling final case studies.
      </Typography>
      
    
      <Typography variant="h4">Objectives</Typography>
      <Typography>
        To understand how the individual relates to larger global systems, and
        how design relates individuals to these systems. To understand what
        types of larger systems, such as cultural, social, political, economic,
        and environmental systems, that the fields of art, design and technology
        relate to, and how. To understand how creative work in fields such as
        art, design, or technology, are both expressions of those global
        systems, as well as a means for affecting them. To understand the
        concepts of vision and long tail thinking, so that students can
        articulate what kind of world they would like to design for, and how
        their work is a part of this trajectory.
      </Typography>
      
    
      <Typography variant="h4">Learning Outcomes</Typography>
      <Typography>
        To understand how the individual relates to larger global systems, and
        how design relates individuals to these systems. To understand what
        types of larger systems, such as cultural, social, political, economic,
        and environmental systems, that the fields of art, design and technology
        relate to, and how. To understand how creative work in fields such as
        art, design, or technology, are both expressions of those global
        systems, as well as a means for affecting them. To understand the
        concepts of vision and long tail thinking, so that students can
        articulate what kind of world they would like to design for, and how
        their work is a part of this trajectory.
      </Typography>
      
    </>
  );
};
