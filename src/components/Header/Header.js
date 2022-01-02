import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Mark Sikaundi</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="https://cs60apa.educationhost.cloud/edu">
          <NavLink>Courses</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#">
          <NavLink>Projects</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>       
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/marksikaundi">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mark-emmanuel-sikaundi-123a55198/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/Alisikaundi">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
