import { render } from 'solid-testing-library'
import { describe, expect, test } from 'vitest'
import Button from '../src'

describe('Button', () => {
  test('render', () => {
    const label = 'A Button'
    const { container, unmount } = render(() => <Button label={label} />)
    expect(container.textContent).toBe(label)
    unmount()
  })
})
