// Packages
import React from 'react'

// Components
import { Option } from '../atoms'
import OptGroup from './OptGroup'

/**
 * @file Component representing a <select> element.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Preact component representing a select element.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Renders a select element with the base class 'adm-select'.
 *
 * The component can render a traditional dropdown or a dropdown with groups.
 *
 * @param {object} props - Component properties
 * @param {string} props.autofocus - 'autfocus' if element automatically get
 * focus when the page loads
 * @param {string} props.className - Space delimitted list of extra classes
 * @param {string} props.disabled - 'disabled' if element is disabled
 * @param {object} props.events - Event functions
 * @param {string} props.form - Defines the forms the element belongs to
 * @param {string} props.id - Element id
 * @param {string} props.multiple - 'multiple' to select multiple options
 * @param {boolean} props.group - True if @see props.opts is an array with
 * option groups
 * @param {string} props.name - Name for the drop-down list
 * @param {object[]} props.opts - Array of dropdown options
 * @param {string} props.required - 'required' if user is required to select a
 * value before submitting the form
 * @returns {HTMLSelectElement}
 */
const Dropdown = props => {
  const {
    autofocus, className, events, form, group, id, multiple, name, opts, required
  } = props
  const style = (`adm-dropdown ${className ? className : ''}`).trim()

  return (
    <select
      name={name} id={id} class={style} autofocus={autofocus}
      form={form} multiple={multiple} required={required}
      {...events}
    >
      {
        group
          ? opts.map(group => <OptGroup {...group} />)
          : opts.map(option => <Option {...option} />)
      }
    </select>
  )
}

export default Dropdown