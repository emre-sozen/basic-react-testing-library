import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../components/Header";

describe('HeaderComponent', () => {
    afterAll(() => {
        cleanup();
    });

    it("inserts text in h1", () => {
        const { getByTestId, getByText } = render(<Header text="Hello" />);
        expect(getByTestId("h1tag")).toHaveTextContent("Hello");
        expect(getByText("Hello")).toHaveClass("fancy-h1")
    })
})