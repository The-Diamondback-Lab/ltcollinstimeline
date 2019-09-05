// Packages
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown, faArrowUp, faSpinner, faSquareFull
} from '@fortawesome/free-solid-svg-icons'

/**
 * @file Icon components
 * @todo Update documentation
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const Icon = props => {
  const { className, id, icon, spin } = props
  const style = (`ada-icon ${className || ''}`).trim()

  return <FontAwesomeIcon id={id} className={style} icon={icon} spin={spin} />
}

const ArrowIcon = props => {
  const { className, id, spin, type } = props
  const style = (`arrow ${type || 'up'} ${className || ''}`).trim()

  let icon = null

  switch (type) {
    case 'down':
      icon = faArrowDown
      break
    default:
      icon = faArrowUp
  }

  return <Icon id={id} className={style} icon={icon} spin={spin} />
}

const LoadingIcon = props => {
  const { className, id, spin } = props
  const style = (`loading ${className || ''}`).trim()

  return <Icon id={id} className={style} icon={faSpinner} spin={spin} />
}

const SquareIcon = props => {
  const { className, id, spin } = props
  const style = (`square ${className || ''}`).trim()

  return <Icon id={id} className={style} icon={faSquareFull} spin={spin} />
}

export { Icon as default, ArrowIcon, LoadingIcon, SquareIcon }
