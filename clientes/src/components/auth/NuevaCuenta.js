import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // Extraer del usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = (e) => {
        e.preventDefault();

        // Validar que no haya campos vacíos

        // Password mínimo de 6 caracteres

        // Las 2 password son iguales

        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registrarte</h1>

                <form onSubmit={ onSubmit }>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre(s)</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" value={ nombre } onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Tu correo electrónico" value={ email } onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" value={ password } onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar</label>
                        <input type="text" name="confirmar" id="confirmar" placeholder="Repetir contraseña" value={ confirmar } onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Crear cuenta" />
                    </div>
                </form>

                <Link to={ '/' } className="enlace-cuenta">
                    Logueate
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
