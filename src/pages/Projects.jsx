import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { GrReactjs } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";


export const Projects = () => {

    
    return (
        <div>
            <h1 style={{margin: '4% auto'}}>My Projects</h1>
            <Container>
                    <Row>
                        <Col xs={12} md={4} style={{margin: '4% auto'}}>
                            <Card className='card h-100' style={{border: '2px solid #21325E',color: '#21325E'}}>
                            <GrReactjs className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Project 1</Card.Title>
                                <Card.Text style={{fontSize: '1rem'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor distinctio assumenda et ipsa ut ex rerum! Architecto aut consequuntur aliquid porro libero quidem voluptate? 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{margin: '4% auto'}}>
                            <Card className='card h-100' style={{border: '2px solid #21325E',color: '#21325E'}}>
                            <SiMysql className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Project 2</Card.Title>
                                <Card.Text style={{fontSize: '1rem'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor distinctio assumenda et ipsa ut ex rerum! Architecto aut consequuntur aliquid porro libero quidem voluptate? 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{margin: '4% auto'}}>
                            <Card className='card h-100' style={{border: '2px solid #21325E',color: '#21325E'}}>
                            <IoLogoJavascript className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>project 3</Card.Title>
                                <Card.Text style={{fontSize: '1rem'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor distinctio assumenda et ipsa ut ex rerum! Architecto aut consequuntur aliquid porro libero quidem voluptate? 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{margin: '4% auto'}}>
                            <Card className='card h-100' style={{border: '2px solid #21325E',color: '#21325E'}}>
                            <SiTypescript  className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Project 4</Card.Title>
                                <Card.Text style={{fontSize: '1rem'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor distinctio assumenda et ipsa ut ex rerum! Architecto aut consequuntur aliquid porro libero quidem voluptate? 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{margin: '4% auto'}}>
                            <Card className='card h-100' style={{border: '2px solid #21325E',color: '#21325E'}}>
                            <FaNodeJs  className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Project 5</Card.Title>
                                <Card.Text style={{fontSize: '1rem'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor distinctio assumenda et ipsa ut ex rerum! Architecto aut consequuntur aliquid porro libero quidem voluptate? 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{margin: '4% auto'}}>
                            <Card className='card h-100' style={{border: '2px solid #21325E',color: '#21325E'}}>
                            <GrReactjs className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Project 6</Card.Title>
                                <Card.Text style={{fontSize: '1rem'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor distinctio assumenda et ipsa ut ex rerum! Architecto aut consequuntur aliquid porro libero quidem voluptate? 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    )
}
