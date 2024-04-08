import { useState } from "react";

/* eslint-disable react/prop-types */
const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    id: 1,
  },
  {
    question: "Is Frontend Mentor free",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    id: 2,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!",
    id: 3,
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    id: 4,
  },
];

function App() {
  return <Accordion />;
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  function handleCurOpen(cur) {
    setCurOpen(cur);

    cur === curOpen && setCurOpen(null);
  }

  return (
    <section className="accordion">
      <header>
        <img src="./src/assets/images/icon-star.svg" alt="star" />
        <span>FAQs</span>
      </header>
      <main>
        <ul className="items">
          {faqs.map((faq, i) => (
            <AccordionItem
              faq={faq}
              key={faq.question}
              curOpen={curOpen}
              onClick={() => handleCurOpen(i)}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}

function AccordionItem({ faq, onClick, curOpen }) {
  const isOpen = curOpen === faq.id - 1;
  return (
    <li className="item" onClick={onClick}>
      <h4 className="question">
        <span>{faq.question}</span>
        <img
          className="icon"
          src={`./src/assets/images/icon-${isOpen ? "minus" : "plus"}.svg`}
          alt="icon"
        />
      </h4>
      {isOpen && <p className="answer">{faq.answer}</p>}
    </li>
  );
}

export default App;
