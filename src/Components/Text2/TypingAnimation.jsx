import React, { useState, useEffect } from "react";
// import "./TypingAnimation.css";

const words = [
  "Developer",
  "Designer",
  "Freelancer",
  "Learner",
  "Innovator",
  "Creator",
  "Thinker",
  "Problem Solver",
  "Programmer",
  "Engineer",
  "Artist",
  "Musician",
  "Photographer",
  "Videographer",
  "Writer",
  "Blogger",
  "Entrepreneur",
  "Leader",
  "Mentor",
  "Instructor",
  "Teacher",
  "Coach",
  "Consultant",
  "Advisor",
  "Speaker",
  "Presenter",
  "Trainer",
  "Educator",
  "Researcher",
  "Scientist",
  "Analyst",
  "Strategist",
  "Planner",
  "Organizer",
  "Manager",
  "Director",
  "Executive",
  "Administrator",
  "Leader",
  "Supervisor",
  "Coordinator",
];

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < words[index].length) {
        timeout = setTimeout(() => {
          setDisplayedText(words[index].substring(0, displayedText.length + 1));
        }, 150);
      } else {
        setTyping(false);
        timeout = setTimeout(() => {
          setTyping(true);
        }, 1000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(words[index].substring(0, displayedText.length - 1));
        }, 100);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, index]);

  return <p className="typing-animation">{displayedText}</p>;
};

export default TypingAnimation;
