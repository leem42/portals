import * as React from 'react'

const Layout = ({
  children,
  containerClassName = '',
}: {
  children: any
  containerClassName?: string
}) => {
  return (
    <div className={containerClassName}>
      <div className={`container`}>
        <div className="row">
          <div className="col-md-12">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
