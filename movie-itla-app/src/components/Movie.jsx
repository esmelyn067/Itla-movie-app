import React from 'react';
import { Card } from 'semantic-ui-react';



function Movie({ movie }) {
    const { title, overview, category } = movie;
  
    return (
      <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Content>
        <Card.Description>{overview}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>{category}</Card.Description>
      </Card.Content>
    </Card>
    );
  }
  
  export default Movie;