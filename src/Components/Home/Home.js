import React from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfilePic from "../../Images/muz.jpg"

const Home = () => {
    return (

        <Container className="mt-4">
            <div >
                <Card>
                    <Container>
                        <Row>

                            <Col xs={12} sm={12} md={8} lg={9} xl={10}>
                                <div >
                                    <strong>
                                        I am an experienced Software Engineer working in an Agile team. I have practical experience working in a multi-disciplinary team using Scrum and Kanban frameworks, on a large-scale project.  Adhering to good practices and always open to learning new ways to improve. Fault finding, code review, unit/integration testing and documentation.
                                <br>
                                        </br>
                                        <br>
                                        </br>
                                        <a href="https://www.linkedin.com/in/umar-zahir-a04801106/" target="_blank">LinkedIn</a>

                                    </strong>
                                    <br>
                                    </br>
                                    <br></br>
                                    <strong>Technical Experience</strong>
                                    <br></br>
                                    <ul>
                                        <li>.Net Core (C#)</li>
                                        <li>ReactJs</li>
                                        <li>Microsoft SQL Server</li>
                                        <li>Dapper</li>
                                        <li>Azure Table storage</li>
                                        <li>Azure Blob storage</li>
                                        <li>Some experience with Kubernetes</li>
                                        <li>Some exeperience utilising Infrastructure as code such as Terraform and Azure ARM Templates </li>
                                    </ul>
                                    <strong>Tools</strong>
                                    <br></br>
                                    <ul>
                                        <li>
                                            Azure DevOps/GIT for source control, CI/CD and story tracking
                                        </li>
                                        <li>DataDog for monitoring and alerting </li>
                                        <li>Moq and XUnit for testing</li>
                                    </ul>

                                </div>
                            </Col>

                        </Row>
                    </Container>

                    <Accordion>
                        <Card>
                            <Card.Header>
                                <h5>Work Experience</h5>
                            </Card.Header>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Software Engineer, Sainsbury’s (March 2018- Current)
      </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Currently working on an IoT-based web application (Connected Buildings) which is rolled out to stores nationwide, controlling store lights and monitoring energy as part of an agile software team. Have worked on every aspect of Software Development Lifecycle since joining. Worked using both Scrum and Kanban. Supported product in and out of hours. Supported other Sainsbury’s apps. This being a full-stack role, have developed backend (C#), database (SQL) and frontend (ReactJs) stories. Carried out and monitored deployments (Azure Pipelines, Kubernetes, DataDog). Use infrastructure as code to create Azure Resources (Terraform, ARM templates). Taking part in refinement sessions, pair programming, knowledge sharing. Also taken part in a number of hackathons.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                    Junior Developer, OBS Logistics Ltd (July 2016 – September 2017)
      </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Working on the existing projects such as Calidus TMS (Transport Management System) and Vision (Management software to monitor KPIs) on a day to day basis. Using technologies such as C# .NET, SQL, HTML and JQuery to develop and maintain the software. Working on both front and backend tasks. Duties also included; software testing, fault finding, problem solving and debugging code. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <h5>Education</h5>
                            </Card.Header>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                                    2018-2020, BCS Level 4 Software Developer Apprenticeship
      </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    This was done during my time at Sainsbury’s alongside my day job. This included:
                                    <ul>
                                        <li>
                                            KM1 Software Development Methodologies Exam
                                        </li>
                                        <li>
                                            KM2 Microsoft C# Exam 70-483
                                        </li>
                                        <li>
                                            Summative Portfolio
                                        </li>
                                        <li>
                                            Project
                                        </li>
                                        <li>
                                            Endpoint Interview
                                        </li>
                                    </ul>
                                    This allowed me to improve my technical understanding as well as improve my understanding of high level concepts in software development.

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                                    2013-2016, First Class (Hons) B.Eng.  Electrical and Electronic Engineering, Coventry University
      </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>This degree included programming modules such as:  Introduction to Programming using Python (73%) in the first year, Embedded group project in which we used C (87%) in the second year. MATLAB programming was also used for various modules throughout the degree including Control Systems, Engineering Mathematics and Advanced digital design. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>



                </Card>

            </div>

        </Container >

    )
}
export default Home