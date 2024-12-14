import React from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, List, Typography } from 'antd';
import { Pie } from '@ant-design/charts';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const data = [
    { type: 'Category A', value: 27 },
    { type: 'Category B', value: 25 },
    { type: 'Category C', value: 18 },
    { type: 'Category D', value: 15 },
    { type: 'Category E', value: 10 },
    { type: 'Category F', value: 5 },
  ];

  const pieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  const activities = [
    'User John created a new report.',
    'Admin updated system settings.',
    'A new user registered.',
    'Report "Monthly Sales" was generated.',
  ];

  return (
    <Layout>
      <Layout className="site-layout">
        <Content style={{ margin: '16px' }}>
          <Breadcrumb style={{ marginBottom: '16px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
              <Card title="Total Users" bordered={false}>
                <Text style={{ fontSize: '24px' }}>1,234</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card title="Active Sessions" bordered={false}>
                <Text style={{ fontSize: '24px' }}>321</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card title="New Reports" bordered={false}>
                <Text style={{ fontSize: '24px' }}>78</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card title="System Uptime" bordered={false}>
                <Text style={{ fontSize: '24px' }}>99.9%</Text>
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: '16px' }}>
            <Col xs={24} md={12}>
              <Card title="User Activity">
                <List
                  dataSource={activities}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Usage Statistics">
                <Pie {...pieConfig} />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
