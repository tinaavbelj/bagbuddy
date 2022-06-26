import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useFirebase } from "../../contexts/FirebaseContext"

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useFirebase()

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Redirect to={getQueryParam(props.location.search, "redirect") || "/"} />
        ) : (
          <Component {...props} />
        )
      }}
    />
  )
}

const getQueryParam = (queryString, param) => new URLSearchParams(queryString).get(param)

export default PublicRoute
