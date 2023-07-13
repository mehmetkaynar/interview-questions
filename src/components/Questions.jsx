import { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import InterviewAccord from "./InterviewAccord";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";

const Questions = ({ question, answer, id }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container className="container">
      <Row className="mt-4 ">
        <Card className="cards">
          <Card.Body className="d-flex justify-content-between">
            <h5 className="h3">
              {id}. {question}
            </h5>
            {toggle ? (
              <button
                className="buttonArrowdown"
                onClick={() => setToggle(false)}
              >
                {arrowdown}
              </button>
            ) : (
              <button className="buttonArrowup" onClick={() => setToggle(true)}>
                {arrowup}
              </button>
            )}
          </Card.Body>
          {toggle ? "" : <InterviewAccord answer={answer} />}
        </Card>
      </Row>
    </Container>
  );
};

export default Questions;
