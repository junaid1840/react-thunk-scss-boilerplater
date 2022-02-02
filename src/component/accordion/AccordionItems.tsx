import React, { FC, useRef, useState } from "react";
type Props = {
  answer: string;
  question: string;
};
export const AccordionItems: FC<Props> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="accordions-box" ref={ref}>
      <div className="accordions-title" onClick={() => setIsActive(!isActive)}>
        <h2>{question}</h2> <span>{isActive ? "-" : "+"}</span>
      </div>
      <div className={`accordions-content-wrap ${isActive ? "active" : ""}`}>
        <div className="accordions-content">
          <p>{answer} </p>
        </div>
      </div>
    </div>
  );
};