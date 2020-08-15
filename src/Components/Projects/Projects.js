import React, {
} from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Projects = () => {
  return (

    <Container className="mt-4">
      <div >
        <Card>
          <Container>

            <Row>

              <Col xs={12} sm={12} md={8} lg={9} xl={10}>
                <div >
                  <br>
                  </br>
                  <br></br>
                  <strong>Membership System</strong>
                  <br></br>

As part of my Level 4 Software Developer Apprenticeship, there was an end point project. Given a brief with some business requirements to create a RESTful API for a Card Membership System. The deliverables for this were a design document, implementation code, testing and user guide. An MVP approach was taken and the basic functionality highlighted in the brief was delivered within 5 day timescale. This was done using .Net Core and SQL and using Dapper as the ORM. Testing was done using Moq and Xunit.

<br>
                  </br>
                  <br>
                  </br>

                  <a href="https://github.com/umarz1/CardMembershipSystem" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>

                </div>
              </Col>

            </Row>
          </Container>



        </Card>

      </div>

    </Container >

  )
}

export default Projects;