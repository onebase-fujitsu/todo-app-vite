// Header.test.tsx
import {cleanup, render, screen} from '@testing-library/react'
import Header from '../../src/components/Header'
import {BrowserRouter} from "react-router-dom";

describe('Header', () => {
    afterEach(() => {
        cleanup()
    })

    it('ヘッダーの初期表示', () => {
        render(<Header />, {wrapper: BrowserRouter})            // 修正
        expect(screen.getByText('Todo App')).toBeInTheDocument()
        expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
        expect(screen.getByText('New Task').closest('a')).toHaveAttribute('href', '/newTask')
    })
})