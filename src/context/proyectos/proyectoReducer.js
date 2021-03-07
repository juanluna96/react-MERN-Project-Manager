import { FORMULARIO_PROYECTO } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            console.log(state);
            return { ...state, formulario: true };

        default:
            return state;
    }
}