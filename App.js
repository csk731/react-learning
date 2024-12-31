import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "Hello World from H1!"),
//     React.createElement("h1", { id: "heading" }, "Hello World from H2!"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// NOTE: react.createElement => JS Object => HTML Element when rendered on DOM
// const heading = React.createElement("h1", {}, "Hello Heme! 🤬");

// NOTE: JSX => React.createElement => JS Object => HTML Element when rendered on DOM
// const jsxHeading = <h1>Hello Heme! 🤬 - JSX</h1>;

const randomNum = 10;

const Title = () => {
  return <h1>Hello,</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title/>
      <h2> This is a heading functional component! </h2>
      {console.log(randomNum + 20)}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
