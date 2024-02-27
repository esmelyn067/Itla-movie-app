import React from 'react';
import Movie from './components/Movie'
import { Grid, Divider, Button } from 'semantic-ui-react';

function MovieList({ movies,  handleDeleteMovie }) {
    return (
      <Grid>
      {movies.map((movie) => (
        <Grid.Column key={movie.id}>
          <Movie movie={movie} />
          <Divider />
          <Button onClick={() => handleDeleteMovie(movie.id)}>Eliminar</Button>
        </Grid.Column>
      ))}
    </Grid>
    );
  }
  
  export default MovieList;
  