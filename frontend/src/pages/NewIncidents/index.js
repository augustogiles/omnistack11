import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import './style.css'

function NewIncidents() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {title, description, value};

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      alert("caso cadastrado com sucesso");
      history.push('/profile');
    } catch (err) {
      alert("erro ao cadastrar caso");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            type="text" 
            placeholder="Título do Caso" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            type="text" 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncidents;