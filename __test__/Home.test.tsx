import {render, screen} from "@testing-library/react";
import Home from "@/app/home";

it("should render Docs text", () => {
    render(<Home />);

    const myElement = screen.getByText("Docs");

    expect(myElement).toBeInTheDocument();
});
