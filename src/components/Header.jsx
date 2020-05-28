import React from 'react'
import { Link } from 'react-router-dom'
import { NavList, HeaderNav } from "./styleComponent/HeaderNav"
import { Container, Title } from "./styleComponent/Container"


const Header = () => {
    return (
        <HeaderNav>
            <Container>
                <Title><Link to={'/'} className="text-center">CRUD - Tus películas</Link></Title>
            </Container>
            <NavList>
                <li className="mx-3"><Link to={'?genre=romance'} className="text-light">Romance</Link></li>
                <li className="mx-3"><Link to={'?genre=horror'} className="text-light">Horror</Link></li>
                <li className="mx-3"><Link to={'?genre=comedy'} className="text-light">Comedy</Link></li>
            </NavList>
        </HeaderNav>
    );
}

export default Header;