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
  /* exact: true = indica que, la ruta tiene que tener exactamente ese nombre para poder ingresar al componente.
  *  ( no se si sea esto pero, entiendo que al redireccionar, en el momento que no tiene permisos para ir a ese componente,
  * lo redirecionar por ejemplo al Login, y el login tiene como ruta /login y al redireccionarlo aun tiene la misma ruta que el
  * componente que no tiene permite, en ese caso no lo podria redireccionar bien, ya que no tiene la ruta exacta, eso entiendo xd ) */
]

export default routes
