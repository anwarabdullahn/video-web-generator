'use client'

import { Button, Layout, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { VideoCameraAddOutlined } from '@ant-design/icons';
import { TopNav, BottomFooter, Carousel } from '@/components';

export const isMobile = () => {
  console.log(window)
  return typeof window !== 'undefined' && window?.innerWidth <= 425
}

export const isTabled = () => {
  console.log(window)
  return typeof window !== 'undefined' && window?.innerWidth <= 768
}

export default function index() {
  return (
    <Layout>
      <TopNav />
      <Content className="flex row justify-between site-layout items-center" style={{ overflowX: 'hidden', minHeight: '85vh', flexGrow: 1, background: '#eee', flexDirection: isMobile() || isTabled() ? 'column' : 'row' }}>
        <div className='p-6' style={{ maxWidth: isMobile() || isTabled() ? 'unset' : '45vw', marginLeft: isMobile() || isTabled() ? 'unset' : '80px' }}>
          <Typography>
            <Title style={{ flexGrow: 1, fontSize: isMobile() || isTabled() ? '25px' : '45px', marginTop: isTabled() ? '50px' : 'unset', whiteSpace: 'pre-wrap' }}>{"Birthday Video Generator.\nNow free for everyone."}</Title>
            <Paragraph>
              We engineered this service for your beloved, Birthday Video Generator, its simple and its free.
            </Paragraph>
          </Typography>
          <Button type="primary" icon={<VideoCameraAddOutlined rev={undefined} />} size="large" style={{ backgroundColor: '#eb2f96' }} href='/generate'>
            Generate Video
          </Button>
        </div>
        <div className='p-6' style={{ maxWidth: isMobile() || isTabled() ? 'unset' : '55vw', marginRight: isMobile() || isTabled() ? 'unset' : '60px', margin: isMobile() || isTabled() ? 'auto' : 'unset' }}>
          <Carousel />
        </div>
      </Content>
      <BottomFooter />
    </Layout>
  )
}
