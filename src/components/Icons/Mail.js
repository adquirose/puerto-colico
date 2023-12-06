import React from 'react';
import Icon from './index'
function Mail(props) {
	return (
        <Icon {...props}>
            <g fill="#111111" stroke="#111111" strokeLinecap="square" strokeWidth="2">
                <path d="M2,21V38a4,4,0,0,0,4,4H42a4,4,0,0,0,4-4V21" fill="none"/>
                <path d="M46,14V10a4,4,0,0,0-4-4H6a4,4,0,0,0-4,4v4L24,28Z" fill="none" stroke="#111111"/>
            </g>
        </Icon>
	);
};

export default Mail;

