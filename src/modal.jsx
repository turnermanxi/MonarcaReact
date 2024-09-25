import { Modal, Button, Form } from 'react-bootstrap';


const ModalS = ({ isOpen, onClose }) => {
    return (
        <>
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Get Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName" className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter your name' required />
                    </Form.Group>

                    <Form.Group controlId='formEmail' className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='text' placeholder='Enter your email' required />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className='mb-3'>
                        <Form.Label>How can we help?</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
};
export default ModalS;