import React from "react"
import { Layout, Typography } from "antd"

const { Header } = Layout
const { Title } = Typography

const NavBar = () => {
  return (
    <Header
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      <Title style={{ color: "white" }}>FAQ Builder</Title>
    </Header>
  )
}

export default NavBar
