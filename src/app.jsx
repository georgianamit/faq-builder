import React from "react"
import "./app.less"
import { Layout } from "antd"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import NavBar from "./components/layout/nav-bar"
import FootBar from "./components/layout/foot-bar"
import ListFaq from "./containers/list-faq"
import AddFaq from "./containers/add-faq"

const { Content } = Layout

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <NavBar />
          <Content
            style={{ height: "calc(100vh - 135px)", padding: "30px 150px" }}
          >
            <Route exact path="/faqs" component={ListFaq} />
            <Route exact path="/" component={AddFaq} />
          </Content>
          <FootBar />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
