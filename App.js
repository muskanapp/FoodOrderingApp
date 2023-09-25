//CORE REACT
// React is a library because you can use it even for a small component while keeping html, css for other parts

const parent = React.createElement(
"div", 
{id:"parent"}, [
    React.createElement("div", {id:"child"},[
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ])
]);
// createElement creates a React object, first argument is the tag, second argument is the id/class,
// third argument is what you want to put inside the element
// To give more than one child to the element, put children inside an array
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // renders h1 to the html dom