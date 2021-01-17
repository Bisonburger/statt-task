import { Props, useState } from "react";
import { CreateTaskDto, Task } from "../model/task";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

type voidFunction = () => void;

export const TaskDelete = (props: { task: Task, update: voidFunction }) => {
  const [show, setShow] = useState(false);

  const handleClose = async () => {
    setShow(false);
    await axios.delete( `http://localhost:8080/task/${task.id}`)
    props.update();
  }
  const handleCloseImmediate = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }

  var task = props.task

  return (
    <>
      <Button size="sm" variant="danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete the task?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImmediate}>
            No
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Yes - Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
