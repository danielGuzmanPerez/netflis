import {API_HOST,API_KEY,LANG} from '../utils/constants';

// aqui no se utiliza export default function porque va a tener muchas cosas que exportar, no solo una
export function getNewsMoviesApi(page = 1){
    //el ${} se pone para ingresar una variable en un texto
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    

    return fetch(url).then((Response) => {//esto sirve para obtener las peliculas del servidor
        return Response.json();
    }).then((result) => {
        return result;
    });
}