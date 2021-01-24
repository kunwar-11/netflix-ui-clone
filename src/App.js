import React , {useState , useEffect} from 'react'
import result from './result'
import Row from './components/Row'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './styles/App.css'
//API KEY :- 1cedb5546a51ff186d7db77347b39a23
const base_url = 'https://api.themoviedb.org/3' 
function App() {
  // console.log(result)
  const [netflixOriginal , setNetflixOrginal] = useState([])
  const [trending , setTrending] = useState([])
  const [topRated , setTopRated] = useState([])
  const [actionMovies , setActionMovies] = useState([])
  const [horrorMovies , setHorrorMovies] = useState([])
  const [comedyMovies , setComedyMovies] = useState([])
  const [romanticMovies , setRomanticMovies] = useState([])
  const [documentries , setDocumentries] = useState([])

  useEffect(() => {
      fetch(`${base_url}${result.netflix_originals}`)
      .then(res => res.json())
      .then(data => setNetflixOrginal(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.trending}`)
    .then(res => res.json())
    .then(data => setTrending(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.top_rated}`)
    .then(res => res.json())
    .then(data => setTopRated(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.action_movies}`)
    .then(res => res.json())
    .then(data => setActionMovies(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.comedy_movie}`)
    .then(res => res.json())
    .then(data => setComedyMovies(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.romantic}`)
    .then(res => res.json())
    .then(data => setRomanticMovies(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.horror_movies}`)
    .then(res => res.json())
    .then(data => setHorrorMovies(data.results))
  },[])
  useEffect(() => {
    fetch(`${base_url}${result.documentries}`)
    .then(res => res.json())
    .then(data => setDocumentries(data.results))
  },[])
  // console.log(netflixOriginal)
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Row title = 'NETFLIX ORIGINAL' genre = {netflixOriginal}/>
      <Row title = 'Trending' genre = {trending} />
      <Row title = 'Top Rated' genre = {topRated} />
      <Row title = 'Action' genre = {actionMovies} />
      <Row title = 'Horror' genre = {horrorMovies} />
      <Row title = 'Comedy' genre = {comedyMovies} />
      <Row title = 'Romantic' genre = {romanticMovies} />
      <Row title = 'Documentries' genre = {documentries} />
    </div>
  );
}

export default App;
