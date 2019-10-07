import React from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import data from "../../data/data"

const Home = () => {
    return (

        <Container className="mt-4">
            <div >
                <Card>
                    <p>Name: {data.firstName + " " + data.lastName}</p>
                    <p>Date of birth: {data.dateOfBirth}</p>
                    <p>Occupation: {data.occupation}</p>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Cost (£)</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.activities.map(activity => {

                                return (<tr>
                                    <td>{activity.description}</td>
                                    <td>{activity.cost}</td>
                                    <td>{activity.date}</td>
                                </tr>)

                            })}
                        </tbody>
                    </Table>



                </Card>

            </div>

        </Container>

    )
}
export default Home