import React,{useState} from 'react';
import './App.css';
import Header from './component/header/Header.js'
import Filter from '../src/component/FIlter/Filter.js'
import Add from '../src/component/add/Add'
import Movielist from './movielist/Movielist';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const movieArray=([
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1977',
      Rate: '2',
      Type: 'movie',
      Poster:
          'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Star Wars: Episode V - The Empire Strikes Back',
    Year: '1980',
    Rate: '2',
    Type: 'movie',
    Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
},
{
  Title: 'Star Wars: Episode VI - Return of the Jedi',
  Year: '1983',
  Rate: '2',
  Type: 'movie',
  Poster:
      'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
},

     ])
const [data,setData]=useState(movieArray)
const addMovie=(x)=>{
  setData([...data,x]);
}
const [search, setSearch] = useState("")
     const handleSearch=(x)=>{
       setSearch(x)
     }
     const [searchrating, setSearchrating] = useState("")
     const handleSearchrating=(x)=>{
       setSearchrating(x)
     }

  return (
    <div className="App">
     <div className="nav">
     <Header/>
     </div>
     <div className="head">  
        <Filter handleSearch={handleSearch} handleSearchrating={handleSearchrating} />
        <Add addMovie={addMovie}/>
        </div>
<div className="main">
<Movielist movieArray={data.filter(movie=>movie.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())&&movie.Rate>=searchrating)}/>
</div>
    </div>
  );
}

export default App;
