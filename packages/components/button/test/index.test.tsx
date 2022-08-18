import { render } from 'solid-testing-library'
import { describe, expect, test } from 'vitest'
import Button from '../src'

describe('Button', () => {
  test('render', () => {
    const { container, unmount } = render(() => <Button label="A Button" />)
    expect(container.innerHTML).toMatchSnapshot()
    unmount()
  })
})
