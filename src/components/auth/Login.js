import React from 'react'

const Login = () => {

    const onChange = () => {
        return
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form action="">
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Tu correo electrónico" onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" onChange={ onChange } />
                    </div>
                    <div className="campo-form">
                        <input type="submit" value="" className="btn btn-primario btn-block" value="Logearse" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
