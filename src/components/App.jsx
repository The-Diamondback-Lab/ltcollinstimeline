// Packages
import React, { Component } from 'react'

// Context
import { InitialUIState, UIContext } from './context'

// Components
import { ArrowIcon, Image, Link, SmoothScrollButton } from './atoms'
import { SiteHeader, SiteHero, SiteFooter } from './organisms'
import { Error, Loading } from './screens'

/**
 * Component representing the web application.
 *
 * @extends Component
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */
export default class App extends Component {
  /**
   * @namespace state - Application state
   * @property {boolean} state.menu_open - If menu is open
   * @property {boolean} state.mobile - If viewport <= 768px
   * @property {boolean} state.near_bottom - If user has scrolled within 100px
   * of the bottom of the page
   * @property {boolean} state.scrolled - If user has scrolled past 90% of the
   * hero
   */
  state = { ...InitialUIState }

  /**
   * Logs that the application has mounted.
   *
   * Attaches scroll listners that update @see App#state.mobile on resize and
   * @see App#state.scrolled when the user scrolls the page.
   *
   * @returns {undefined}
   */
  componentDidMount() {
    const { handle_window_resize, handle_window_scroll } = this.props

    console.info('Application mounted.')

    // Attach window listener to update mobile state
    handle_window_resize(this.handle_resize, true)

    // Attach window listener to update scroll state
    handle_window_scroll(this.handle_scroll, true)
  }

  /**
   * Remove window listeners.
   *
   * @returns {undefined}
   */
  componentWillUnmount() {
    const { handle_window_resize, handle_window_scroll } = this.props

    handle_window_resize()
    handle_window_scroll()
  }

  /**
   * Renders the website.
   *
   * @param {object} props - Component properties
   * @param {object} state - Component state
   * @returns {Fragment}
   */
  render() {
    const { menu_open, mobile, near_bottom, scrolled } = this.state

    return (
      <UIContext.Provider value={{ menu_open, mobile, near_bottom, scrolled }}>
        <SiteHeader />
        <SiteHero />
        <Timeline events={this.events} />
        <SiteFooter />
      </UIContext.Provider>
    )
  }

  // Helpers

  events = (events, start, end) => events.slice(start, end)

  /**
   * Updates the component @see state.mobile property.
   * If the window width is <= 768px, @see state.mobile will be true.
   *
   * @returns {undefined}
   */
  handle_resize = () => this.setState({ mobile: is_mobile() })

  /**
   * Updates the component @see state.scrolled property.
   * If the user has scrolled past 90% of the header, @see state.scrolled will
   * be true.
   *
   * @returns {undefined}
   */
  handle_scroll = () => {
    return this.setState({
      near_bottom: near_bottom(), scrolled: is_scrolled('.ado-hero', 0.9)
    })
  }
}




