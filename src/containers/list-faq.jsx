import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Row, Col, Typography, Collapse } from "antd"
import { PlusOutlined } from "@ant-design/icons"

const { Panel } = Collapse
const { Title, Text } = Typography

const ListFaq = ({ faqs }) => {
  const faqListComponent = faqs.map((faq, id) => (
    <Panel
      header={
        <>
          <Text
            style={{
              color: "#64B5F6",
              fontFamily: "Noto Serif",
              fontStyle: "normal",
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: "-0.01em",
            }}
          >
            Q.
          </Text>
          <Text
            style={{
              color: "#25445C",
              fontFamily: "Noto Serif",
              fontStyle: "normal",
              fontSize: "18px",
              fontWeight: "normal",
              lineHeight: "170%",
              marginLeft: "10px",
            }}
          >
            {faq.ques}
          </Text>
        </>
      }
      key={id}
      className="faq-panel"
    >
      <Text
        style={{
          color: "#64B5F6",
          fontFamily: "Noto Serif",
          fontStyle: "normal",
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "-0.01em",
        }}
      >
        A.
      </Text>
      <Text
        style={{
          color: "#25445C",
          fontFamily: "Noto Serif",
          fontStyle: "normal",
          fontSize: "18px",
          fontWeight: "normal",
          lineHeight: "170%",
          marginLeft: "10px",
        }}
      >
        {faq.ans}
      </Text>
    </Panel>
  ))

  return (
    <div className="site-layout-content">
      <Row justify="space-between">
        <Col span={4}>
          <Title>
            <Text type="secondary">FAQs</Text>
          </Title>
        </Col>
        <Col span={1}>
          <Link to="/">
            <Button type="info" size="large">
              <PlusOutlined /> Add
            </Button>
          </Link>
        </Col>
      </Row>
      <div className="faqs-layout ">
        <Text
          style={{
            margin: "100px 0px",
            letterSpacing: "0.1rem",
            fontFamily: "Noto Sans",
            fontSize: "12px",
            color: "#9CA3A6",
          }}
          strong={true}
        >
          QUESTION & ANSWER
        </Text>
        <br />
        <Collapse
          expandIconPosition="right"
          ghost
          className="site-collapse-custom-collapse faqs-list"
        >
          {faqs.length !== 0 ? (
            faqListComponent
          ) : (
            <div style={{ textAlign: "center" }}>
              <Title>You Don't have any FAQs</Title>
              <Link to="/">
                <Button type="dashed" size="large">
                  <PlusOutlined />
                  Add
                </Button>
              </Link>
            </div>
          )}
        </Collapse>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  faqs: state.faq.faqs,
})

export default connect(mapStateToProps)(ListFaq)
