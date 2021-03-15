import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    // Extraer del usuario
    const { email, password } = usuario;

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

        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form onSubmit={ onSubmit }>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Tu correo electrónico" value={ email } onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" value={ password } onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Logearse" />
                    </div>
                </form>

                <Link to={ '/nueva-cuenta' } className="enlace-cuenta">
                    Registrarme
                </Link>
            </div>
        </div>
    )
}

export default Login
