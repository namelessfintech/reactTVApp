import React from 'react';

import loaderSrc from '../../logo.svg'

import './loader.css'

const Loader = props => (
    <div>

        <img id="loader" alt="loader icon" src={loaderSrc}/>    
    </div>
);


export default Loader;