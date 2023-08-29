'use client'

import { isMobile } from '@/app/page';
import { Carousel, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';

export default function index() {
 const carouselList = [
  {
   image: '/2.svg',
   title: 'Customize Your Own Video',
   subTitle: 'Easy Customizable, You can choose the color and wishes anything you like to make it personal.'
  },
  {
   image: '/3.svg',
   title: 'Free for everyone.',
   subTitle: 'Its 100% free. You dont need to pay for video editor, just use our website.'
  },
  {
   image: '/4.svg',
   title: 'Easy Download.',
   subTitle: 'One button to download. You can download the video directly from your browser anywhere.'
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
