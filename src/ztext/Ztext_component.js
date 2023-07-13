import React from 'react';
import Ztext from'react-ztext';
// can be used with react 17.0.1
// add     "react-ztext": "^1.0.3", in package.json

const Ztext_component = () => {
    <Ztext
        depth='1rem'
        direction='both'
        event='pointer'
        eventRotation='30deg'
        eventDirection='default'
        fade={false}
        layers={10}
        perspective='500px'
        style={{
        fontSize: '4rem'
        }}
    >
    <span role='img' aria-label='emoji'>
    😂🔥🍔
    </span>
</Ztext>
}

export default Ztext_component