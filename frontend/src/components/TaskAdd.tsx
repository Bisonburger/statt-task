import { useState } from "react";
import { CreateTaskDto } from "../model/task";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

type voidFunction = () => void;

export const TaskAdd = (props: { update: voidFunction }) => {
  const [show, setShow] = useState(false);

  const handleClose = async () => {
    setShow(false);
    task.due = '1';
    await axios.post( `http://localhost:8080/task/`, task )
    props.update();
  }
  const handleCloseImmediate = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  const handleChange = (event:any) => {
      task[event.target.id] = event.target.value;
  }

  var task: CreateTaskDto = { summary: '', detail: '', due: ''}

  return (
    <>
      <Button size="sm" variant="primary" onClick={handleShow}>
        Add
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
