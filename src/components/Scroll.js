import React from 'react';

const Scroll = (props) => {
    // console.log(props)
    // return props.children //<h1>Hi</h1>
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px', marginTop: '1em', paddingTop: '1em' }}>
            { props.children }
        </div>
    )
};

export default Scroll;