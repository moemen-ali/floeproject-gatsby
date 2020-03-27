import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div class="row">
                <div class="columns small-12 medium-12 large-7">
                    <header class="floe-header">
                        <h1><a rel="home" title="Home" href="/" class="floe-header-logo">floe
                            <span class="floe-header-tagline">
                                flexible learning for open education
                            </span></a>
                        </h1>
                    </header>
                </div>
                <div class="columns small-12 medium-12 large-5 align-self-bottom">
                    <nav class="floe-nav">
                        <ul>
                            <li><a href="/news/news">News</a></li>
                            <li><a href="/resources">Resources</a></li>
                            <li><a href="/ui-options">UI Options</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
