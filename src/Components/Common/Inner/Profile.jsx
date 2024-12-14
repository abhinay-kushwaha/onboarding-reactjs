import React from 'react'
import { Card, Avatar, Button, Row, Col } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import img from "../../../assets/abhinay.jpg" // Importing the image

const Profile = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col xs={24} sm={8} md={6}>
          <Card
            hoverable
            cover={<Avatar size={100} src={img} style={{ margin: 'auto' }} />} // Using the imported image
            style={{ textAlign: 'center' }}
          >
            <h3>Abhinay Kushwaha</h3> {/* Updated name */}
            <p>Software Engineer</p>
            <Button type="primary" icon={<EditOutlined />}>Edit Profile</Button>
          </Card>
        </Col>
        <Col xs={24} sm={16} md={18}>
          <Card title="Profile Details" bordered={false}>
            <p><strong>Email:</strong> abhinay.kushwaha@example.com</p> {/* Updated email */}
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Location:</strong> Indore, India</p> {/* Updated location */}
            <p><strong>About:</strong> Passionate software engineer with experience in full-stack development and MERN stack expertise.</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
