export default class MovieService {
    static async getMovies({query, page, apiKey}) {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${apiKey}`);
        const movies = await response.json();
        return movies.Search
    }

    static async getMovie({id, apiKey}) {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`);
        const movie = await response.json();
        return movie
    }
}