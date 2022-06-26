import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useFirebase } from "../../contexts/FirebaseContext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useFirebase()

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
        )
      }}
    />
  )
}

export default PrivateRoute
