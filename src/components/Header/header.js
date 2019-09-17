import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './index.module.css'
import Navigation from '../Navigation';

export const Header = ({ siteTitle, headline }) => (
  <header className={style.Header}>
      <div className={style.Header__wrapper}>
          <Link to='/' className={style.Header__title}>
              {siteTitle}
              <p className={style.Header__headline}>{headline}</p>
          </Link>
          <Navigation />
      </div>
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  headline: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  headline: ``,
}
