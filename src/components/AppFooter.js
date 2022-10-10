import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; Croydon 2022</span>
      </div>
      <div className="ms-auto">
        <span className="ms-1">Croydon Admin &amp; Dashboard Template</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
