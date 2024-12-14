import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ProjectStatus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    { key: '1', name: 'Project A', description: 'Description for Project A' },
    { key: '2', name: 'Project B', description: 'Description for Project B' },
  ]);

  const [form] = Form.useForm();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleFormSubmit = (values) => {
    const newProject = {
      key: (projects.length + 1).toString(),
      name: values.name,
      description: values.description,
    };
    setProjects([...projects, newProject]);
    handleCloseModal();
  };

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Uploaded Projects</h2>
      <Table dataSource={projects} columns={columns} pagination={false} />
      <Button type="primary" onClick={handleOpenModal} style={{ marginTop: '20px' }}>
        Upload New Project
      </Button>

      <Modal
        title="Upload New Project"
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            name="name"
            label="Project Name"
            rules={[{ required: true, message: 'Please enter the project name!' }]}
          >
            <Input placeholder="Enter project name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Project Description"
            rules={[{ required: true, message: 'Please enter the project description!' }]}
          >
            <Input.TextArea placeholder="Enter project description" rows={4} />
          </Form.Item>
          <Form.Item name="file" label="Upload File">
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
              Submit
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectStatus;
