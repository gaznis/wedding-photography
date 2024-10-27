import { Carousel } from 'antd';
import Image from 'next/image'
import { HOME } from '@/constants/home';

export default function Home() {
  return (
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
  );
}
