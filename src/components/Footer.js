// Imports
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



// Footer component
function Footer() {
    return (
        <StyledFooter>
            <FooterContainer>
                <p>&copy; {new Date().getFullYear()} North Fork Cattle Company</p>
                <div>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/about-us">About Us</FooterLink>
                    <FooterLink to="/contact-us">Contact Us</FooterLink>
                    <FooterLink to="/cattle">Cattle</FooterLink>
                </div>
            </FooterContainer>
        </StyledFooter>
    );
}
// Componets
const StyledFooter = styled.footer`
    background-color: #343a40;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
`;

const FooterContainer = styled.div`
    max-width: 1140px;
    margin: auto;
    padding: 0 15px;
`;

const FooterLink = styled(Link)`
    color: #9fa8da;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
        color: #e3f2fd;
        text-decoration: underline;
    }
`;

export default Footer;