import React from 'react';

const Hello = () => {
    // React Component Without JSX
    return React.createElement("div",
        {
            id : "demoId",
            className : "demoClass"
        }, 
        React.createElement("h1", null, "Hello Shafayet")
    );
}

export default Hello;