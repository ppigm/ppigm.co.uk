import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>PPI Greater Manchester</h2>
      <p>
        Please don't hesitate to contact us through the following links!
      </p>
      <ul className="actions">
        <li>
          <Link to="" className="button">
            Back to Top
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Manchester, UK</dd>
        <dt>Phone</dt>
        <dd>+44 (0) 787-1347-950</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:ppigm.official@gmail.com">ppigm.official@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://www.facebook.com/ppigm.page/" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ppigm/" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ppigm"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; PPI GM 2020.
    </p>
  </footer>
)

export default Footer
