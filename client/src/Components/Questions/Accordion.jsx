import React from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import './Questions.css'

const Accordion=({title, desc, active, setActive})=>
 {
   return (
   <div className='accordionContainer'> 
       <span
        className={(active ===title ? 'activeTitle'
       : "")+ " title flex"}
       >
        {title}
       <span onClick={() => setActive(active === title ? null : title)}>
       {active === title ? (
        <ArrowCircleUpIcon className='icon'/>
       ) : (
       < ArrowCircleDownIcon className='icon'/>
       )}
        </span>
       </span>
       <p className={(active === title ? "show" : "") + 
       " description"}>{desc}</p>
   </div>
   );
};

export default Accordion;
