import show from '../api/show';
import  {useState, useEffect, useContext} from 'react';
import { AppContext } from '../context/AppContext';

export const useShows = () => { 
    /** estado local */
    // const [stateShows, setStateShows] = useState(null);
    /** estado global */
    const {state, dispatch} = useContext(AppContext);

    /**
     * useEffect substitui os antigos lifecicle. 
     * Ele funciona toda vez quando precisar executar o segundo passo. O side Effect. Ele é passado como parametros []
     * Ex: quando um item se modificar, ele executa o useEffect. Se não passar nada, ele executa só quando criar o componente. Uma vez
     */
    useEffect(() => {
        show.get('/shows')
        .then(response => {
            const action = { type : "createList", payload: response.data };
            dispatch(action);
        });
    },[]);
    return {shows: state.showList}
}