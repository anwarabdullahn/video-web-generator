'use client'

import { isMobile } from '@/app/page';
import { Carousel, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';

export default function index() {
 const carouselList = [
  {
   image: '/2.svg',
   title: 'Premium video meetings. Now free for everyone.',
   subTitle: 'We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.'
  },
  {
   image: '/3.svg',
   title: 'Premium video meetings. Now free for everyone.',
   subTitle: 'We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.'
  },
  {
   image: '/4.svg',
   title: 'Premium video meetings. Now free for everyone.',
   subTitle: 'We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.'
  }
 ]
 return (
  <div className='text-center' style={{ maxWidth: isMobile() ? '380px' : '700px', marginRight: '80px' }}>
   <Carousel dots dotPosition='bottom'>
    {carouselList && carouselList.map(carousel => (
     <div className='mx-auto p-6'>
      <img
       style={{ backgroundSize: 'cover' }}
       src={carousel.image}
       alt={carousel.title}
       height={250}
      />
      <Typography>
       <Title style={{ fontSize: '25px' }}>{carousel.title}</Title>
       <Paragraph>
       {carousel.subTitle}
       </Paragraph>
      </Typography>
     </div>
    ))}
   </Carousel>
  </div>

 )
}
