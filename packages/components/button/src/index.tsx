import { mergeProps } from 'solid-js'
import type { Component } from 'solid-js'

interface ButtonProps {
  label?: string
}

const defaultProps: Partial<ButtonProps> = {
  label: '',
}

const Button: Component<ButtonProps> = props => {
  props = mergeProps(defaultProps, props)

  return <button>{props.label}</button>
}

export type { ButtonProps }

export default Button
