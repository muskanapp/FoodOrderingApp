import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {

  //Test to check if the component loaded on page
  it("Should load contact us component", () => {
    render(<Contact />);
  
    //Querying
    const heading = screen.getByRole("heading");
  
    //assertion
    expect(heading).toBeInTheDocument();
  });
  
  //Test to check if the page has a submit button
  it("Should load submit button inside Contact component", () => {
    render(<Contact />);
  
    const button = screen.getByText("Submit");
  
    //assertion
    expect(button).toBeInTheDocument();
  });
  
  //Test to check if the page has an input textbox with name
  it("Should load input name inside Contact component", () => {
    render(<Contact />);
  
    const inputName = screen.getByPlaceholderText("name");
  
    //assertion
    expect(inputName).toBeInTheDocument();
  });
  
  //Test to check if the page has an input textbox with message
  it("Should load input message inside Contact component", () => {
    render(<Contact />);
  
    const inputMessage = screen.getByPlaceholderText("message");
  
    //assertion
    expect(inputMessage).toBeInTheDocument();
  });
  
  //Test to check if there are 2 input boxes on the page
  it("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);
  
    const inputBoxes = screen.getAllByRole("textbox");
    
    expect(inputBoxes.length).toBe(2);
  });

})

