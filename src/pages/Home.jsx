import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Card from 'react-bootstrap/Card';
import Background  from '../assets/Programming.svg'
import { GrReactjs } from "react-icons/gr";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


export const Home = () => {
    return (
        <div className='home'>
            
            <div className='intro'>
                <Container style={{margin: '0%', padding: '0%'}}>
                    <Row >
                        <Col sm={12} md={6} style={{padding: '8% 4%'}}>
                            <h1>Hello! My Name is Supun Randika</h1>
                            <p> A software developer with a passion for learning and creating.</p>
                            <SiGmail oGmail className='icons' />
                            <FaFacebook className='icons'/>
                            <FaGithub className='icons'/>
                            <FaInstagram className='icons'/>
                            <FaSquareXTwitter className='icons'/>
                        </Col>
                        <Col  sm={12} md={6} style={{  
                                backgroundImage: "url(" + Background + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                padding: '8% 4%'                               
                                }}>
                             
                        </Col>
                    </Row>        
                </Container>
            </div>

            <div className='skills'>
                <Container>
                    <Row>
                        <Col xs={12} md={4} >
                            <Card className='card h-100' style={{backgroundColor: '#21325E', color: 'white'}}>
                            <GrReactjs className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Front-End</Card.Title>
                                <Card.Text style={{fontSize: '1.2rem'}}>
                                    HTML, CSS, Bootstrap, React Bootstrap, Material UI, Tailwind CSS, React JS
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className='card h-100' style={{border: '2px solid #21325E'}}>
                            <SiMysql className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Back-End</Card.Title>
                                <Card.Text style={{fontSize: '1.2rem'}}>
                                    MySQL, MS SQL, Firebase
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className='card h-100' style={{backgroundColor: '#21325E', color: 'white'}}>
                            <IoLogoJavascript className='skill-icon' />
                                <Card.Body>
                                <Card.Title style={{fontSize: '1.9rem'}}>Languages</Card.Title>
                                <Card.Text style={{fontSize: '1.2rem'}}>
                                    JavaScript, TypeScript, Java, C#
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}
        