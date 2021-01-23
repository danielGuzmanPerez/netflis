import React, {useState,useEffect} from 'react';
import {  Text, View } from 'react-native';
import {getNewsMoviesApi} from '../api/movies'


export default function Home() {
    const [newMovies, setNewMovies] = useState(null);
    
    useEffect(() => { //aqui es donde se obtienen las peliculas desde el fichero de movies
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results);//esto sirve para mandarle los resultados al usestate
      });
    }, []);

    return (
        <View>
            <Text>Estamos en home</Text>
        </View>
    )
}


