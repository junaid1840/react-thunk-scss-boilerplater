import React, { FC, useEffect, useRef, useState } from "react";
type Props = {
  answer: string;
  question: string;
};
export const AccordionItems: FC<Props> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div className="accordions-box" ref={ref}>
      <div className="accordions-title" onClick={() => setIsActive(!isActive)}>
        <h2>{question}</h2> <span>{isActive ? "-" : "+"}</span>
      </div>
      <div className={`accordions-content-wrap ${isActive ? "active" : ""}`}>
        <div className="accordions-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
