import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//mock fetch function because jest-dom is not actually the browser but a browser kind environment
// jest-dom doesn't have it's own fetch function unlike our browser
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search resList for cafe input text", async () => {
  await act(async() => 
    render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name : "Search"});

  const searchInput = screen.getByTestId("searchInput"); //getByTestId -> give test id to the component
  fireEvent.change(searchInput, {target: {value : "cafe"}});
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(3);
  
});

it("Should filter top-rate restaurants", async () => {
    await act(async() => 
      render(
      <BrowserRouter>
          <Body />
      </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", { name : "Top Rated Restaurants"});
  
    fireEvent.click(topRatedBtn);
  
    const cards = screen.getAllByTestId("resCard");
  
    expect(cards.length).toBe(16);
    
  });
