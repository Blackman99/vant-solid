import { mergeProps } from 'solid-js'
import type { Component } from 'solid-js'
import { Theme } from '../../../types'

interface ButtonProps {
  /**
   * The label text of button.
   */
  label?: string
  /**
   * The color theme of button.
   */
  theme?: Theme
  /**
   * The size of button.
   */
  size?: 'normal' | 'large' | 'small' | 'mini'
}

const defaultProps: Partial<ButtonProps> = {
  label: '',
  theme: 'default',
}

const Button: Component<ButtonProps> = props => {
  props = mergeProps(defaultProps, props)

  return <button>{props.label}</button>
}

export type { ButtonProps }

export default Button
