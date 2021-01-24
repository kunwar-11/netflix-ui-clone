const API_KEY = "1cedb5546a51ff186d7db77347b39a23"

const request = {
    trending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    top_rated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    action_movies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    horror_movies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    comedy_movie : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    romantic : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    netflix_originals : `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default request