import { Task } from "../model/task";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Col, Row, Container } from "react-bootstrap";
import { TaskEdit } from "./TaskEdit";
import { TaskDelete } from "./TaskDelete"

export const TaskView = (props: { task: Task, update: () => void }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>{props.task.summary}</Col>
          <Col>
            <span>
              <TaskEdit task={props.task} update={props.update}></TaskEdit>{' '}
              <TaskDelete task={props.task} update={props.update}></TaskDelete>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};
