import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

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
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        // Password mínimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('La contraseña debe ser de almenos 6 caracteres', 'alerta-error');
            return;
        }

        // Las 2 password son iguales
        if (password !== confirmar) {
            mostrarAlerta('La contraseñas deben ser iguales', 'alerta-error');
            return;
        }
        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
            {alerta ? (<div className={ `alerta ${alerta.categoria}` }>{ alerta.msg }</div>) : null }
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
                        <input type="password" name="confirmar" id="confirmar" placeholder="Repetir contraseña" value={ confirmar } onChange={ onChange } />
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
