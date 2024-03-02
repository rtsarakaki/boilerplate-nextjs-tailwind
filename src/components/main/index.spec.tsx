import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

import Main from ".";

describe("Main", () => {
    it("should render the heading", () => {
        render(<Main />);
        expect(screen.getByRole("heading", {name: /Boilerplate/i})).toBeInTheDocument();
    });

    it("should not throw any JavaScript errors", () => {
        render(<Main />);
        const consoleSpy = jest.spyOn(console, "error");

        expect(consoleSpy).not.toHaveBeenCalled();

        consoleSpy.mockRestore();
    });
});
