import React, {
  Component
} from "react";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import data from "./data/data"


class Main extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          contacts: data
        });
        //console.log(this.state.contacts)
      })
      .catch(console.log);
  }

  render() {
    return (
      < div >

        <Container>
          {/* <Card>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary"
              size="lg"
              onClick={
                () => {
                  alert("Print some text");
                }
              } >
              Large button
      </Button>
          </Card> */}

          <Container>
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Main;