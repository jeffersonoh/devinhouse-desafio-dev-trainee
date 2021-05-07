import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Icone } from '../Assets/icone.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Icone />
      <p>Desafio Treinee</p>
    </footer>
  );
};

export default Footer;
