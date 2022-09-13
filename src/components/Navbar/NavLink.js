import PropTypes from "prop-types"
import React from "react"
import "./index.scss"

function NavLink({ active, href, text }) {
  return (
    <a href={`#${href}`} className={active ? "active" : ""}>
      {text}
    </a>
  )
}

NavLink.defaultProps = {
  active: false,
  href: "",
  text: "",
}

NavLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  text: PropTypes.string,
}

export default NavLink
