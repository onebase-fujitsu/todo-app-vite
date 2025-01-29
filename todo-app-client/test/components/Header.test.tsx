import "@testing-library/jest-dom";
// Header.test.tsx
import {cleanup, render, screen} from "@testing-library/react";
import Header from "../../src/components/Header";

describe("Header", () => {
    afterEach(() => {
        cleanup()
    })

    it("ヘッダーの初期表示", () => {
        render(<Header />)
        expect(screen.getByText('Todo App')).toBeInTheDocument()

    })
})