import React from 'react'

function Square({ colorValue, hexValue, isDarkText }) {
    return (
        <div className='div text-center' style={{ backgroundColor: colorValue, color: isDarkText ? "#000" : "#FFF" }}>
            {colorValue ? colorValue : "Empty Value"}<br />
            {hexValue ? hexValue : null}

        </div >

    )
}

export default Square