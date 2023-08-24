'use client'

import { Carousel, Radio, RadioChangeEvent, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';

export default function index() {
 return (
  <div className='text-center' style={{ maxWidth: '700px', marginRight: '80px' }}>
   <Carousel dots dotPosition='bottom'>
    <div className='mx-auto p-6'>
     <img
      style={{ backgroundSize: 'cover' }}
      src="/2.svg"
      alt="Vercel Logo"
      height={250}
     />
     <Typography>
      <Title style={{ fontSize: '25px' }}>Premium video meetings. Now free for everyone.</Title>
      <Paragraph>
       We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.
      </Paragraph>
     </Typography>
    </div>
    <div className='mx-auto p-6'>
     <img
      style={{ backgroundSize: 'cover' }}
      src="/3.svg"
      alt="Vercel Logo"
      height={250}
     />
     <Typography>
      <Title style={{ fontSize: '25px' }}>Premium video meetings. Now free for everyone.</Title>
      <Paragraph>
       We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.
      </Paragraph>
     </Typography>
    </div>
    <div className='mx-auto p-6'>
     <img
      style={{ backgroundSize: 'cover' }}
      src="/4.svg"
      alt="Vercel Logo"
      height={250}
     />
     <Typography>
      <Title style={{ fontSize: '25px' }}>Premium video meetings. Now free for everyone.</Title>
      <Paragraph>
       We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.
      </Paragraph>
     </Typography>
    </div>
    <div className='mx-auto p-6'>
     <img
      style={{ backgroundSize: 'cover' }}
      src="/1.svg"
      alt="Vercel Logo"
      height={250}
     />
     <Typography>
      <Title style={{ fontSize: '25px' }}>Premium video meetings. Now free for everyone.</Title>
      <Paragraph>
       We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.
      </Paragraph>
     </Typography>
    </div>
   </Carousel>
  </div>

 )
}
