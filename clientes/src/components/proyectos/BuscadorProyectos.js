import React from 'react'
import styled from 'styled-components';

const Buscador = styled.input`
    margin-bottom: 3rem;
    background: #f3f3f3;
`;

const BuscadorProyectos = () => {

    const changeSearch = (e) => {
        const buscar = e.target.value;
        console.log();
    }

    return (
        <Buscador type="text" name="search" className="input-text" onChange={ changeSearch } placeholder="Ingresa el colegio a buscar" />
    )
}

export default BuscadorProyectos
