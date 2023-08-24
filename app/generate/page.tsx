'use client'

import { Button, Input, Layout, Tooltip } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { HeartOutlined, InfoCircleOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { TopNav, BottomFooter, Carousel } from '@/components';

export default function index() {
  return (
    <Layout>
      <TopNav />
      <Content className="flex row justify-between site-layout items-center" style={{ minHeight: '85vh', background: '#eee' }}>
        <div className='p-6' style={{ maxWidth: '35vw', marginLeft: '80px' }}>
        <Input
          placeholder="Enter your name"
          prefix={<UserOutlined className="site-form-item-icon" rev={undefined} />}
        />
        <br />
        <br />
        <Input
          placeholder="Enter your age"
          prefix={<HeartOutlined className="site-form-item-icon" rev={undefined} />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} rev={undefined} />
            </Tooltip>
          }
        />
        <br />
        <br />
        <Button type="primary" icon={<VideoCameraAddOutlined rev={undefined} />} size="large" style={{ backgroundColor: '#eb2f96' }} href='/generate'>
            Generate Video
          </Button>
        </div>
        <div className='p-6' style={{ maxWidth: '65vw', minHeight: '600px', marginRight: '60px' }}>
          <Carousel />
        </div>
      </Content>
      <BottomFooter />
    </Layout>
  )
}
