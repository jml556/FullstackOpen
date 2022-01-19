import React from "react";

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Total = (props) => {
  return <div>{props.total}</div>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.excercise}
    </p>
  );
};

const Content = ({
  part1,
  exercises1,
  part2,
  exercises2,
  exercises3,
  part3,
}) => {
  return (
    <div>
      <Part part={part1} excercise={exercises1} />
      <Part part={part2} excercise={exercises2} />
      <Part part={part3} excercise={exercises3} />
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;