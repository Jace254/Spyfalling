import { render, screen } from '@testing-library/react'
import App from './App'

/* eslint-env jest */
test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Create lobby/i)
  expect(linkElement).toBeInTheDocument()
})
