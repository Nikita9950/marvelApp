import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './Header.css';

function Header(): JSX.Element {
  return (
    <Container>
      <Link to={'/'}>
        <img className="logo-img" src="/assets/Marvel_Logo.png" alt="Marvel" />
      </Link>
    </Container>
  );
}

export default Header;
