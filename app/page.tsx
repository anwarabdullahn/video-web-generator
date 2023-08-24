'use client'

import { Button, Layout, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { VideoCameraAddOutlined } from '@ant-design/icons';
import { TopNav, BottomFooter, Carousel } from '@/components';

export default function index() {
  return (
    <Layout>
      <TopNav />
      <Content className="flex row justify-between site-layout items-center" style={{ minHeight: '85vh', background: '#eee' }}>
        <div className='p-6' style={{ maxWidth: '35vw', marginLeft: '80px' }}>
          <Typography>
            <Title style={{ fontSize: '45px' }}>Premium video meetings. Now free for everyone.</Title>
            <Paragraph>
              We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.
            </Paragraph>
          </Typography>
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
