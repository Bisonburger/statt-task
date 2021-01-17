import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { TaskView } from '../components/TaskView'
import { TaskAdd } from '../components/TaskAdd'
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Main = () => {

  const [ tasks,  setTasks ] = useState( [] );

  var isUpdate = false;

  useEffect(() => {
    update()
  }, [isUpdate] );

  const update = () => { 
    axios.get( "http://localhost:8080/task")
      .then( (response) => setTasks( response.data ) ) 
    isUpdate = true;  
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Statt Tasks
        </Navbar.Brand>
      </Navbar>
      <Card >
        <Card.Header>Tasks</Card.Header>
        <ListGroup variant="flush">
          {tasks.map(task =>
            <ListGroup.Item><TaskView task={task} update={update}></TaskView></ListGroup.Item>)}
        </ListGroup>
        <Card.Footer>
            <TaskAdd update={update}></TaskAdd>
        </Card.Footer>
      </Card>
    </>
  )
}