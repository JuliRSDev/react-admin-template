import React from 'react'

// Home
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Buttons
const Buttons = React.lazy( () => import('./views/buttons/Buttons') )

//Form
const FormControl = React.lazy( () => import('./views/form/FormControl') )

// Charts
const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

const routes = [
  { path: '/', exact: true, name: 'Login' },
  { path: '/dashboard', name: 'Home', element: Dashboard },
  { path: '/buttons', name: 'Buttons', element: Buttons },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/form', name: 'Form Control', element: FormControl },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '*', name: 'Home', element: Dashboard },
]

export default routes
