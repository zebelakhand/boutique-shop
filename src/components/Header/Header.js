import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Boutique</Navbar.Brand>
                    <Nav>
                        <NavLink className='link' to="/shop">Shop</NavLink>
                        <span style={{ color: 'white' }}>{user.displayName}</span>
                        {
                            user.email
                                ?
                                <button onClick={logout}>Logout</button>
                                :
                                <NavLink className='link' to="/login">Login</NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>

            <Banner></Banner>
        </>
    );
};

export default Header;