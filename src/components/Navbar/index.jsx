import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileMenuLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FiberManualRecordSharp } from "@mui/icons-material";
import { FaBars } from "react-icons/fa"
import { Bio } from '../../data/constant';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            marginBottom: '20;',
                            cursor: 'pointer'
                        }}>
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <a href={Bio.github} target="_blank">
                        <GitHubButton>
                            Github Profile
                        </GitHubButton>
                    </a>
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileMenuLink href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>About</MobileMenuLink>

                        <MobileMenuLink href='#skills' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Skills
                        </MobileMenuLink>
                        <MobileMenuLink href='#experience' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Experience</MobileMenuLink>
                        <MobileMenuLink href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Projects</MobileMenuLink>
                        <MobileMenuLink href='#education' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Education</MobileMenuLink>

                        <GitHubButton
                            style={{
                                padding: '10px 16px',
                                background: `${theme.primary}`,
                                color: 'white',
                                width: 'max-content'
                            }}
                            href={Bio.github}
                            target="_blank">
                            Github Profile
                        </GitHubButton>

                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav >);
}

export default Navbar;

