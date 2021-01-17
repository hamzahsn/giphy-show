import React from 'react'
import styles from './LabelInput.scss'
import cs from 'classnames'

export interface ILabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
  type?: string
  name?: string
  labelText?: string
  register?: any
  variant?: 'primary' | 'secondary' | 'checked'
}

export const LabelInput = ({
  id,
  labelText,
  register,
  className,
  variant = 'secondary',
  ...inputProps
}: ILabelInputProps) => {
  return (
    <label htmlFor={id} className={cs(className, styles.LabelInputContainer)}>
      {labelText}
      <input {...inputProps} name={id} id={id} ref={register} className={cs(className, styles.base, styles[variant])} />
    </label>
  )
}
