import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Icone } from '../Assets/icone.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Icone />
        </Link>

        <Link className={styles.cliente} to="/cadastro">
          Cadastrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
