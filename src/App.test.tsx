import { render, screen } from '@testing-library/react'
import React from 'react'

import { describe, expect, test } from 'vitest'

import App from './App'

describe('BlogPage test', () => {
  test('should show title all the time', () => {
    render(<App />)

    const title = 'HomePage'
    expect(screen.getByText(title)).toHaveTextContent(title)
  })
})
