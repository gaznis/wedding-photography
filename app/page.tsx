import { Carousel, Image } from 'antd';
import { HOME } from '@/constants/home';

export default function Home() {
  return (
    <div id='slides' className="fixed -z-50 top-0 h-screen w-screen overflow-hidden">
      <div className="absolute top-0  w-full h-16 bg-white bg-opacity-20 backdrop-blur-sm z-10" />
      <Carousel autoplay className="h-full w-full">
        {HOME.map((slide) => (
          <div key={slide.id} className="h-full w-full">
            <Image className="w-full h-full object-cover" preview={false} alt={slide.alt} src={slide.src} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
