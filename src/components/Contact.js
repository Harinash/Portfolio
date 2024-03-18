import React from 'react'
import { Container, Row, Form, Button } from "react-bootstrap";
// import Particle from "./Particle";

export const Contact = () => {
    return (
        <Container fluid className="project-section">
          {/* <Particle /> */}
          <Container>
            <h1 className="project-heading">
                Interested to collaborate with me? Send me a message 😁
              {/* My Recent <strong className="purple">Works </strong> */}
            </h1>
            {/* <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p> */}
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <div name='contact' className='w-full h-screen  flex justify-center items-center p-4'>
      <Container className='flex flex-col max-w-600 w-full'>
        {/* <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-light'>Contact</p>
          <p className='text-light py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
        </div> */}
        <Form method='POST' action="https://formspree.io/f/mgegladl">
          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="Name" name="name" className='bg-light p-2' />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email" name="email" className='my-4 p-2 bg-light' />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control as="textarea" rows={10} placeholder="Message" name="message" className='bg-light p-2' />
          </Form.Group>
          <Button variant="primary" type="submit" className='text-light border-2 hover-bg-pink-600 hover-border-pink-600 px-4 py-3 my-8 mt-3 mx-auto flex items-center'>Let's Collaborate</Button>
        </Form>
      </Container>
    </div>

            </Row>
          </Container>
        </Container>
      );
}

export default Contact;