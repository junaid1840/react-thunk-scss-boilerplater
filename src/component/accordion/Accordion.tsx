import React, { FC } from "react";
import "./Accordion.scss";
import "./AccordionResponsive.scss";
import { AccordionItems } from "./AccordionItems";

export const Accordion: FC = () => {
  const accordionList = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      id: 2,
      question: "What is Lorem Ipsum?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      id: 3,
      question: "What is Lorem Ipsum?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      id: 4,
      question: "What is Lorem Ipsum?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      id: 5,
      question: "What is Lorem Ipsum?",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
  ];
  return (
    <div className="accordion-wrapper">
      <div className="container">
        <div id="accordions" className="accordions">
          {accordionList.map(({ id, question, answer }) => (
            <AccordionItems key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
