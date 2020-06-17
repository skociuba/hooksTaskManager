import React, { Fragment } from 'react'
import Page from './page'
import Main from './components/Main'
import Search from './components/Search'
import Shifts from './components/Shifts'
import './app.css'
import Route from 'react-router-dom/Route'
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  const onRef = nav => {
    M.Sidenav.init(nav)
  }

  const logIn = (
    <Fragment>
      <li>
        <NavLink to='/' exact style={{ color: 'white' }}>
            TASK MANAGER
        </NavLink>
      </li>
      <li>
        <NavLink to='/Search' exact style={{ color: 'white' }}>
            SEARCH
        </NavLink>
      </li>
      <li>
        <NavLink to='/Shifts' exact style={{ color: 'white' }}>
            SHIFTS
        </NavLink>
      </li>
      <li>
        <AmplifySignOut />
      </li>
    </Fragment>
  )
  return (
    <Page>
      <Router >
        <nav className='nav-wrapper grey darken-3'>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i></a>
          <ul className='right hide-on-med-and-down'>
            <ul className='right'>{ logIn }</ul>
          </ul>
        </nav>

        <ul ref={onRef} className='sidenav' id='mobile-demo'>
          <div className='sidenav-close'> { logIn }</div>
        </ul>

        <Route path='/' exact strict component={Main} />
        <Route path='/Search' exact strict component={Search} />
        <Route path='/Shifts' exact strict component={Shifts} />
      </Router>
    </Page>
  )
}
export default withAuthenticator(App, true);