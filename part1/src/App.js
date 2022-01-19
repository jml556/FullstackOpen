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
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const list = parts.map(item => {
    return (
      <div>
        <p>{item.name}</p>
        <p>{item.exercises}</p>
      </div>
    )
  })

  let total = 0;
  parts.forEach(item => total+=item.exercises)

  return (
    <div>
      <Header course={course} />
      {list}
      <Total total={total} />
    </div>
  );
};

export default App;
