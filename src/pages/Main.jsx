import React, { useState } from 'react'
import "./style/main.css"

import Search from '../components/Search'
import Table from '../components/Table'

const Main = () => {

    const [search, setSearch] = useState(''); // Estado para armazenar o valor de pesquisa

    const handleSearchChange = (value) => {
      setSearch(value); // Função para atualizar o estado de pesquisa
    };

  return (
    <div className='main-page'>
        <Search onSearchChange={handleSearchChange}/>
        <Table search={search}/> 
        
    </div>
  )
}

export default Main