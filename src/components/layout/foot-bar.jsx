import React from "react"
import { Layout } from "antd"

const { Footer } = Layout

const FootBar = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      FAQ Builder © {new Date().getFullYear()}. Made with &hearts; by
      <a href="https://github.com/georgianamit"> GeorgianAmit </a>
    </Footer>
  )
}

export default FootBar
