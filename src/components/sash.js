/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styles from './styles/sash.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { injectIntl } from 'gatsby-plugin-intl'

const Sash = ({ separator, figures, intl }) => (
  <Container className={styles.sash} fluid>
    <div className='d-block d-lg-flex'>
      {figures.map((figure, index) => {
        const item = (
          <Col data-aos='zoom-in-up' data-aos-duration='1500' className={styles.column} key={index}>
            <figure>
              {typeof (figure.icon) === 'function' &&
              <figure.icon />}
              {typeof (figure.icon) === 'string' &&
              <img src={figure.icon} />}
              <figcaption>
                <span>{figure.title}</span>
              </figcaption>
              {figure.button && (
                <a className={`btn btn-${index % 2 == 0 ? 'primary' : 'secondary'} ${styles.button}`} href={figure.button.href} rel='noopener noreferrer' target='blank'>
                  {figure.button.text}
                </a>
              )}
              {figure.text && <span className={styles.text}>{figure.text}</span>}
            </figure>
          </Col>
        )

        console.log(typeof figure.icon)
        if (index != figures.length - 1 && separator) {
          return (
            <React.Fragment key={index}>
              {item}
              <div style={{ borderLeft: '1px solid #570DAE' }} />
            </React.Fragment>
          )
        } else return item
      })}
    </div>
  </Container>
)

export default injectIntl(Sash)
