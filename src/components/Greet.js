import React from 'react';

const Greet = (props) => {
    console.log(props);
return <h1>Hello {props.name} A.K.A. {props.shortName}</h1>;
};

export default Greet;