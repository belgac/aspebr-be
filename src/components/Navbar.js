import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
 render() {
   return (
    <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <ul class="menu-list">
        <li>
          <Link to="/">
            Acceuil
          </Link>
        </li>
        <li>
          <Link to="/about">
            Qui sommes-nous ?
          </Link>
        </li>
        <li>
          <Link to="/activites">
            Activités
          </Link>
        </li>
        <li>
          <Link to="/info-aspebr">
            Info ASPEBr
          </Link>
        </li>
        <li>
          <a href="http://aspebr.wufoo.com/forms/devenir-membre-de-lalumni-fsp-aspebr-ulb/">
            Devenir membre
          </a>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  )}
}

export default Navbar
