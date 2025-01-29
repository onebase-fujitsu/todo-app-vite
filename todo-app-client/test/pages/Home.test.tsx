// Home.test.tsx
import {cleanup, render, screen} from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import Home from '../../src/pages/Home'
import TodoProvider from '../../src/context/TodoContext'
import {act} from "react";

describe('Home画面', () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
        cleanup()
    })

    it('画面構成', async () => {
        mock.onGet('/todos').reply(200, [])

        await act(() => {
            render(<Home />)
        })

        expect(screen.queryByTestId('Header')).toBeTruthy()
        expect(screen.queryByTestId('TodoList')).toBeTruthy()
    })

    it('ホーム画面の初期表示', async () => {
        mock.onGet('/todos').reply(200, [
            {
                id: 1,
                title: 'title',
                completed: false
            }
        ])

        await act(() => {
            render(<TodoProvider><Home /></TodoProvider>)     // 修正
        })

        expect(mock.history.get[0].url).toEqual('/todos')
        expect(screen.getByText('title')).toBeInTheDocument()
    })
})