import React from 'react';
import Form from 'react-bootstrap/Form';
import colorNames from 'colornames';

function Input({ colorValue, hexValue, isDarkText, setColorValue, setHexValue, setIsDarkText }) {
    function handleSubmit(e) {
        alert("Form Submitted");
        e.preventDefault();

    }

    function handleBtnSubmit() {
        setIsDarkText(!isDarkText);
    }

    return (
        <div className='my-2 inputDiv'>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formGroupColor">
                    <Form.Label className='label'>Color</Form.Label>
                    <Form.Control type="text" placeholder="Add Color Name" autoFocus value={colorValue} onChange={(e) => { setColorValue(e.target.value); setHexValue(colorNames(e.target.value)) }} />
                </Form.Group>

                <div className="d-grid gap-2">
                    <button type="button" onClick={handleBtnSubmit}>Toggle Text Color</button>
                </div>
            </Form>
        </div>
    )
}

export default Input