import React from 'react';
import Form from 'react-bootstrap/Form';


function Input() {
    function handleSubmit() {
        alert("Form Submitted");
    }
    return (
        <div className='my-2 inputDiv'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupColor">
                    <Form.Label className='label'>Color</Form.Label>
                    <Form.Control type="text" placeholder="Add Color Name" autoFocus />
                </Form.Group>

                <div className="d-grid gap-2">
                    <button type="submit">Toggle Text Color</button>
                </div>
            </Form>
        </div>
    )
}

export default Input