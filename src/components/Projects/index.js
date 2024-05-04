import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'graphics' ?
            <ToggleButton active value="web app" onClick={() => setToggle('graphics')}>Graphics</ToggleButton>
            :
            <ToggleButton value="graphics" onClick={() => setToggle('graphics')}>Graphics</ToggleButton>
          }
          <Divider />
            {toggle === 'poster' ?
            <ToggleButton active value="web app" onClick={() => setToggle('poster')}>Poster</ToggleButton>
            :
            <ToggleButton value="poster" onClick={() => setToggle('poster')}>Poster</ToggleButton>
          }
          <Divider />
          {toggle === 'video' ?
            <ToggleButton active value="android app" onClick={() => setToggle('video')}>Video Animation</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('video')}>Video Animation</ToggleButton>
          }
          <Divider />
          {toggle === 'uiux' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('uiux')}>UI / UX</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('uiux')}>UI / UX</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
