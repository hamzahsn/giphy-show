import React from 'react'
import styles from './Wrapper.scss'
import cs from 'classnames'

export interface IBorderedBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  message?: 'danger' | 'warning'
}

export const Wrapper: React.FC<IBorderedBoxProps> = ({ children, message = '', title, ...divProps }) => {
  return (
    <div className={cs(styles[message], styles.base)} {...divProps}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}
