// Packages
import React, { Component } from 'react'

// Components
import { FeatureEvent, Events } from '../templates'

// Event data
import campus from '../../api/campus.events.json'
import legal from '../../api/legal.events.json'

/**
 * Component representing the timeline.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class Timeline extends Component {
  /**
   * Creates a new timeline.
   * 
   * @todo Update documentation
   * 
   * @param {object} props - Component properties
   * @param {string} props.className - Space delimitted list of extra classes
   * @param {string} props.id - Element id
   * @returns {Timeline}
   */
  constructor(props) {
    super(props)
    this.state = {}
  }

  /**
   * Renders a <main> element with the base class 'ado-timeline'.
   *

   * @param {object} state - Component state
   * @returns {HTMLElement} HTML <main> element
   */
  render() {
    const { className } = this.props
    const style = (`ado-timeline ${className ? className : ''}`).trim()

    return (
      <main id={props.id} class={style}>
        <Timeline
          id='timeline0'
          events={{
            campus: props.events(campus, 0, 2),
            legal: props.events(legal, 0, 2)
          }}
        />
        <FeatureEvent id='feature0' class='ui-full' event={legal[0]} />
        <Timeline events={{
          campus: props.events(campus, 3, campus.length),
          legal: props.events(legal, 1, legal.length)
        }} />
      </main>
    )
  }
}
