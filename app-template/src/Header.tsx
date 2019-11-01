import * as React from 'react'
import headerConfig from './config/headerConfig'

export const Header: React.SFC<{}> = () => {
  const { summary, title } = headerConfig
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-text">
              <h2>{title}</h2>
              <p className="normal-weight">{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
