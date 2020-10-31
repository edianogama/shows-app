import show from '../api/show';
import  {useState, useEffect} from 'react';

export const useShows = () => { 
    const [stateShows, setStateShows] = useState(null);
     /**
     * useEffect substitui os antigos lifecicle. 
     * Ele funciona toda vez quando precisar executar o segundo passo. O side Effect. Ele é passado como parametros []
     * Ex: quando um item se modificar, ele executa o useEffect. Se não passar nada, ele executa só quando criar o componente. Uma vez
     */
    useEffect(() => {
        show.get('/shows')
        .then(response => {
            setStateShows(response.data);
        });
    },[]);
    return {shows: stateShows};

}