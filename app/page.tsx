import { Carousel, Card } from 'antd';
import Image from 'next/image'
import { HOME } from '@/constants/home';

export default function Home() {
  return (
    <div>
    <div id='slides' className="fixed inset-0 -z-50 overflow-hidden">
      <Carousel fade adaptiveHeight autoplay className="h-screen w-screen">
        {HOME.map((slide) => (
          <div key={slide.id} className="h-screen w-screen">
            <Image className="w-full h-full object-cover"
              alt={slide.alt}
              src={slide.src}
              fill={true}
              loading='lazy'
            />
          </div>
        ))}
      </Carousel>
      </div>
      <div className='md:w-1/3 absolute md:right-5 md:bottom-10 bottom-12'>
        <Card size='small' title='Lorem Ipsum' style={
          {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(10px)'
          }
        }>
        You can start editing the page by modifying. The page auto-updates as you edit the file.
        You can start editing the page by modifying. The page auto-updates as you edit the file.
        You can start editing the page by modifying. The page auto-updates as you edit the file.
        You can start editing the page by modifying. The page auto-updates as you edit the file.
        You can start editing the page by modifying. The page auto-updates as you edit the file.
      </Card>
      </div>
    </div>
  );
}
