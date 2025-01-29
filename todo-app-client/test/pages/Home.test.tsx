import "@testing-library/jest-dom";
// Home.test.tsx
import {cleanup, render, screen} from "@testing-library/react";
import Home from "../../src/pages/Home";

describe("Home画面", () => {

    afterEach(() => {
        cleanup()
    })

    it("ホーム画面の初期表示", () => {
        render(<Home />)
        expect(screen.getByText("Todo App")).toBeInTheDocument()
    })
})