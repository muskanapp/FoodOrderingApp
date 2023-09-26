import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 className = "head" tabIndex="5">
        Welcome from React element!
    </h1>
);

const Title = () => (
    <h1 className = "head" tabIndex="5">
        Welcome!
    </h1>
);

/*const HeadingComponent = () => {
    return <h1>Welcome from functional component</h1>
}*/

// React functional component
const HeadingComponent = () => (
    <div id = "container">
        <Title />
        {Title()}
        {heading}
        <h1 className="heading">Welcome from functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
