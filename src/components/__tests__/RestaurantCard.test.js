import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render Restaurant card with props data", () => {

    render(<RestaurantCard resData = {MOCK_DATA} />);

    const name = screen.getByText("Taj Mahal-Abids");
    expect(name).toBeInTheDocument();
});

//write unit test case to test open label restaurant cards
it("Should render Restaurant card with props data", () => {

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    render(<RestaurantCardOpen resData = {MOCK_DATA} />);

    const name = screen.getByText("Taj Mahal-Abids");
    expect(name).toBeInTheDocument();
});