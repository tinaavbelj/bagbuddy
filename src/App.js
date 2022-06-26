import "./App.css"
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { colors, contentWidth, offsetMobile } from "./constants/variables"

import Buy from "./components/Buy"
import Community from "./components/Community"
import Home from "./components/Home"
import Local from "./components/Local"
import Navigation from "./components/Navigation"

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Router>
            <Content>
              <Switch>
                <Route exact path="/buy" component={Buy} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/local" component={Local} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Content>
            <Navigation />
          </Router>
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  color: ${colors.base};
  background-color: ${colors.background};
  min-height: 100vh;
`

const Container = styled.div`
  max-width: ${contentWidth};
  margin: 0 auto;
  padding: 0 ${offsetMobile};
`

const Content = styled.div`
  margin-top: 40px;
  padding-bottom: 40px;
`

export default App
