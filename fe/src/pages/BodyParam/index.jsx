import React from 'react'
import '../../components/Header/HeaderStyle.css'
import { Layout } from 'antd'
import BodyParamsForm from '../../components/BodyParamsForm'
import './style.css'

const { Header, Footer, Content } = Layout

export default function BodyParam() {
  return (
    <Layout className='body-params-page-layout'>
      <Header className="header-container">
        <div className="header-text">NHẬP CHỈ SỐ</div>
      </Header>
      <Content className='page-content-container'>
        <BodyParamsForm />
      </Content>
    </Layout>
  )
}
