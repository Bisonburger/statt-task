import { useState } from "react";
import { Task } from "../model/task";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

type voidFunction = () => void;

export const TaskEdit = (props: { task: Task, update: voidFunction }) => {
  const [show, setShow] = useState(false);
  const [dirty,setDirty] = useState(false);

  const handleClose = async () => {
    setShow(false);
    if( dirty ){
      await axios.put( `http://localhost:8080/task/${task.id}`, task )
    }
    props.update();
  }
  const handleCloseImmediate = () => setShow(false);

  const handleShow = () => { setShow(true); console.log( props.task ); }
  
  const handleChange = (event:any) => {
      task[event.target.id] = event.target.value;
      setDirty(true);
  }

  var task = Object.assign( {}, props.task );

  return (
    <>
      <Button size="sm" variant="success" onClick={handleShow}>
        View/Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Edit/View</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
          <Form.Group controlId="summary">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter task summary" 
                onChange={handleChange} defaultValue={task.summary} />
          </Form.Group>

            <Form.Group controlId="detail">
                <Form.Label>Detail</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter task details" 
                    defaultValue={task.detail} onChange={handleChange}/>
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImmediate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
