import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Space,
  Divider,
  Tooltip,
} from "antd"
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"

import { addFaqs } from "../store/actions/faqActions"

const { Title, Text } = Typography

const AddFaq = ({ addFaqs, history }) => {
  const onFinish = (values) => {
    addFaqs(values)
    history.push("/faqs")
  }

  return (
    <div className="site-layout-content">
      <Row justify="space-between">
        <Col span={4}>
          <Title>
            <Text type="secondary">Add FAQs</Text>
          </Title>
        </Col>
        <Col span={1}>
          <Link to="/faqs">
            <Button type="info" size="large">
              View
            </Button>
          </Link>
        </Col>
      </Row>
      <div className="faqs-layout">
        <Text
          style={{
            margin: "15px 0px",
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
        <Text
          style={{
            margin: "15px 0px",
            fontFamily: "Noto Sans",
            fontStyle: "italic",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: " 170%",
            color: "#25445C",
          }}
        >
          Write the questions and answers that came up
        </Text>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.List name="faqs">
            {(fields, { add, remove }) => {
              return (
                <div style={{ width: "100%" }} className="faqs-fields">
                  {fields.map((field, i) => (
                    <div
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <Space
                        key={field.key}
                        style={{
                          display: "flex",
                        }}
                        align="center"
                      >
                        <div style={{ width: "40rem" }}>
                          <Form.Item
                            {...field}
                            name={[field.name, "ques"]}
                            label={
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
                              </>
                            }
                            colon={false}
                            fieldKey={[field.fieldKey, "ques"]}
                            rules={[
                              { required: true, message: "Missing Question" },
                            ]}
                          >
                            <Input
                              placeholder="Write the question here ?"
                              style={{
                                width: "80%",
                                color: "#25445C",
                                fontFamily: "Noto Serif",
                                fontStyle: "normal",
                                fontSize: "18px",
                                fontWeight: "normal",
                                border: "none",
                              }}
                            />
                          </Form.Item>
                          <Form.Item
                            {...field}
                            name={[field.name, "ans"]}
                            label={
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
                                  A.
                                </Text>
                              </>
                            }
                            colon={false}
                            fieldKey={[field.fieldKey, "ans"]}
                            rules={[
                              { required: true, message: "Missing Answer" },
                            ]}
                          >
                            <Input
                              placeholder="Write the answer here."
                              style={{
                                width: "80%",
                                color: "#25445C",
                                fontFamily: "Noto Serif",
                                fontStyle: "normal",
                                fontSize: "18px",
                                fontWeight: "normal",
                                border: "none",
                              }}
                            />
                          </Form.Item>
                        </div>

                        <Tooltip title="Remove FAQ">
                          <Button
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={() => {
                              remove(field.name)
                            }}
                            style={{ transform: "translate(-50%, -50%)" }}
                          />
                        </Tooltip>
                      </Space>
                      {i !== fields.length - 1 && <Divider dashed />}
                    </div>
                  ))}

                  <Divider orientation="center" dashed>
                    <Tooltip title="Add FAQ">
                      <Button
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={() => {
                          add()
                        }}
                      />
                    </Tooltip>
                  </Divider>
                </div>
              )
            }}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addFaqs: (faqData) => {
    dispatch(addFaqs(faqData))
  },
})

export default connect(null, mapDispatchToProps)(AddFaq)
