import React, { useState , useEffect } from 'react';
import './App.css';

const FAQItems = ({faq, index})=> {

    const [isShow  , setIsShow] = useState(false);


    useEffect (() => {
            if( index == 0){
                setIsShow(true);
            }
    },[])

    const handleClick = () => {
        setIsShow((isShow) => !isShow);

    }

    return (
        <div className="faq-box">
            <div className="qtsn" onClick ={handleClick}>
                <button className= {isShow ? 'arrow' : ''}>></button>
                <div>{faq.question}</div>
            </div>
           {isShow && <div className="ans">{faq.answer}</div>}
        </div>
    )

}

export default FAQItems;