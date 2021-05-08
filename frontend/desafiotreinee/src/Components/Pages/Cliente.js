import React from 'react';

import { Routes, Route } from 'react-router-dom';

import ClienteCriar from './ClienteCriar';
import styles from './Cliente.module.css';

const Cliente = () => {
  return (
    <section className={styles.cliente}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Cliente />} />
          <Route path="cadastro" element={<ClienteCriar />} />
        </Routes>
      </div>
    </section>
  );
};

export default Cliente;
