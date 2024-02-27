import React, { useState } from 'react'; 
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Input, Button } from 'semantic-ui-react'; 
import MovieList from './components/MovieList';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './app.css';


export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie 1', overview: 'This is movie 1', category:'Comedy' },
    { id: 2, title: 'Movie 2', overview: 'This is movie 2', category:'Romantic'},
    { id: 3, title: 'Movie 3', overview: 'This is movie 3', category:'Action' },
    // ...
  ]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: Math.random().toString(36).substring(7),
    };

    setMovies([...movies, newMovie]);
    toast.success('¡Película agregada correctamente!');

    // Restablecer los estados de los campos de entrada
    setMovies([{title:'', overview: '', category:''}]);
    
  };
  
  const handleDeleteMovie = (id) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);

  setMovies(filteredMovies);

  toast.success('¡Película eliminada correctamente!');
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container> 
      <Segment>
        <h1>Registro de películas</h1>
        <Input
          type="text"
          placeholder="Buscar película"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <MovieList
          movies={filteredMovies}
          handleAddMovie={handleAddMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      </Segment>
      <Button onClick={handleAddMovie}>Agregar película</Button>
    </Container>
    <ToastContainer />
    </>
  )
}
