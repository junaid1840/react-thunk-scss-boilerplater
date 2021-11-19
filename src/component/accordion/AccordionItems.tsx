import React, {FC, useState} from 'react';
type Props = {
    answer: string,
    question: string,
};
export const AccordionItems: FC<Props> = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordions-box" onClick={() => setIsActive(!isActive)}>
            <div className="accordions-title"><h2>{question}</h2> <span>{isActive ? '-' : '+'}</span></div>
            <div className={`accordions-content-wrap ${isActive ? 'active': ''}`}>
                <div className="accordions-content"><p>{answer}</p></div>
            </div>
        </div>
    );
};