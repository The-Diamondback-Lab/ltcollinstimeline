// Packages
import React from 'react'

// Components
import { Option } from '../atoms'

/**
 * @file Component representing an <optgroup> element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders an <optgroup> element with the base class 'adm-optgroup'.
 *
 * @param {object} props - Component properties
 * @param {string} props.disabled - Specifies that element should be disabled
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {object} props.events - Event functions
 * @param {string} props.label - Specifies a label for the element
 * @param {string} props.id - Element id
 * @param {object[]} props.opts - Array of dropdown options
 * @returns {HTMLImageElement}
 */
const OptGroup = props => {
  const { className, disabled, label, id, events, opts } = props
  const style = (`adm-optgroup ${className ? className : ''}`).trim()

  return (
    <optgroup
      id={id} class={style} label={label} disabled={disabled}
      {...events}
    >
      {opts.map(option => <Option {...option} />)}
    </optgroup>
  )
}

export default OptGroup

