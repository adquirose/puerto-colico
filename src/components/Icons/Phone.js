import React from 'react';
import Icon from './index'

function Phone(props) {
	return (
		<Icon {...props}>
            <g fill="#111111" stroke="#111111" strokeLinecap="square" strokeWidth="2">
                <path d="M28,2A18,18,0,0,1,46,20" fill="none"/>
                <path d="M28,10A10,10,0,0,1,38,20" fill="none"/>
                <path d="M31.041,28.94l-3.423,4.279A36.116,36.116,0,0,1,14.782,20.384l4.279-3.423a2.908,2.908,0,0,0,.84-3.45L16,4.728a2.908,2.908,0,0,0-3.39-1.635L5.186,5.019A2.925,2.925,0,0,0,3.028,8.25,43.142,43.142,0,0,0,39.751,44.973a2.925,2.925,0,0,0,3.23-2.158l1.926-7.425A2.91,2.91,0,0,0,43.273,32l-8.782-3.9A2.907,2.907,0,0,0,31.041,28.94Z" fill="none" stroke="#111111"/>
            </g>
        </Icon>
	);
};

export default Phone;
