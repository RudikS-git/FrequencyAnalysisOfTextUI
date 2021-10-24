import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {FormControl, InputGroup} from "react-bootstrap";

const TextNameModal = ({isOpen, toggle, okHandle}) => {
    const [textName, setTextName] = useState('');

    const handleSave = () => {
        okHandle && okHandle(textName);
    }

    return (
        <Modal show={isOpen} onHide={() => toggle(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Text name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="enter text name"
                        aria-label="enter text name"
                        aria-describedby="basic-addon2"
                        onChange={e => setTextName(e.target.value)}
                    />
                </InputGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TextNameModal;