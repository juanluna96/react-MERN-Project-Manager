import React, { useReducer } from 'react';
import tareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

const TareaState = (props) => {
    const initialState = {
        tareas: []
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <tareaContext.Provider>
            {props.children }
        </tareaContext.Provider>
    )
}

export default TareaState
