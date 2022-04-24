import React, { useState } from "react";
import Icon from "./components/Icon";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const itemsArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemsArray = itemsArray.fill("empty", 0, 9);
  };

  const changeItem = (itmeNumber) => {
    if (winMessage) {
      return toast("Game Over, Please reset to play again", {
        type: "success",
      });
    }
    if (itemsArray[itmeNumber] === "empty") {
      itemsArray[itmeNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
      checkIsWinner();
    } else {
      return toast("Invalid location", { type: "error" });
    }
  };

  const checkIsWinner = () => {
    if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2]
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
    } else if (
      itemsArray[3] !== "empty" &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[3] === itemsArray[5]
    ) {
      setWinMessage(`${itemsArray[3]} wins`);
    } else if (
      itemsArray[6] !== "empty" &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[6] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[6]} wins`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[0] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
    } else if (
      itemsArray[1] !== "empty" &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[1] === itemsArray[7]
    ) {
      setWinMessage(`${itemsArray[1]} wins`);
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[2] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[2]} wins`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[0] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[0]} wins`);
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[2] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[2]} wins`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[1] !== "empty" &&
      itemsArray[2] !== "empty" &&
      itemsArray[3] !== "empty" &&
      itemsArray[4] !== "empty" &&
      itemsArray[5] !== "empty" &&
      itemsArray[6] !== "empty" &&
      itemsArray[7] !== "empty" &&
      itemsArray[8] !== "empty"
    ) {
      setWinMessage("No one won");
    }
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-right" />

      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="banner py-3 mb-4 text-center">X Tic-Tac-Toe O</h1>
        </Col>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-center text-success text-uppercase">
                {winMessage}
              </h1>
              <Button color="warning" block onClick={reloadGame}>
                Reset Game
              </Button>
            </div>
          ) : (
            <h1 className="text-primary text-center">
              {isCross ? "Cross" : "Circle"} turns!
            </h1>
          )}
          <div className="grid">
            {itemsArray.map((item, index) => (
              <Card
                className="test"
                color="info"
                onClick={() => changeItem(index)}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
