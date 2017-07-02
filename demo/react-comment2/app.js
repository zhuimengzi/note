import React from 'react';
import {render} from 'react-dom';
import CommentApp from './src/CommentApp.js';
import './src//css/comment.css';

render(
    <CommentApp />,
    document.querySelector('#app')
);
