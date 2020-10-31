import { createContext } from "react";

/**
 * Contexto geral da minha aplicação
 *
 */
export const AppContext = createContext();

/**
 * Função redutora
 * para os dados não serem alterados diretamente, mas sim por actions
 */
export const appReducer = (state, action) => {

    switch (action.type) {
        case "createList":
            return {showList: action.payload};
            break;
        case "setItemSelected":
            return {...state, itemSelected: action.payload }
        default:
            return state;
            break;
    }
}

export const initialState  = {
    showList: new Array(),
    itemSelected: null
}