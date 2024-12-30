const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from H1!"),
    React.createElement("h1", { id: "heading" }, "Hello World from H2!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
