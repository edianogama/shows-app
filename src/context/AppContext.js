import { createContext } from "react";
import show from "../api/show";

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
        case "addItem":
            const showList = state.showList;
            showList.push(action.payload);
            return {...state, showList};
            
        default:
            return state;
            break;
    }
}

export const initialState  = {
    showList: new Array(),
    itemSelected: null
}