'use client'

import { Header } from 'antd/es/layout/layout';
import DateNow from '@/components/DateNow';
import { Button } from 'antd';
import { VideoCameraTwoTone } from '@ant-design/icons';
import { isMobile } from '@/app/page';

export default function index() {
 return (
  <Header
   style={{
    position: 'sticky',
    top: 0,
    zIndex: 99999,
    width: '100%',
    color: 'black',
    backgroundColor: 'white'
   }}
   className='justify-between flex'
  >
   <div>
    <Button style={{fontSize: '20px'}} href="/" icon={<VideoCameraTwoTone twoToneColor="#eb2f96" size={10} rev={undefined} />} type='text' size='large'>Video Web Generator</Button>
   </div>
   <div className='flex row' style={{ fontSize: '18px', display: isMobile() ? 'none' : 'block' }}>
    <DateNow />
   </div>
  </Header>
 )
}
