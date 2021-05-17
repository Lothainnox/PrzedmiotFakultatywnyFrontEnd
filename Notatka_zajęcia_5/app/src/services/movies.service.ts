
import http from '../utils/http'
import { Key } from '../key'

const movieService = {
    searchByName: async (name: string, page: number) => {
        try {
            const response = await http.get('http://www.omdbapi.com/', {apikey: Key, s: name, page}) as any;
            if (response?.Error) {
                console.log(response.Error);
                return null;
            }
            else {
                return {
                    totalResults: parseInt(response.totalResults, 10),
                    movies: response.Search.map((movie: any) => ({
                        id: movie.imdbID,
                        poster: movie.Poster,
                        title: movie.Title,
                        type: movie.Type,
                        year: movie.Year,
                    }))
                }
            }
        } catch(error) {
            console.log(error);
        }
    },
    getById: async (id: string) => {
        const response = await http.get('http://www.omdbapi.com/', {apikey: Key, id: id}) as any;
    }
}