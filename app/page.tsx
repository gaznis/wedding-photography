import { Carousel, Image } from 'antd';
import { HOME } from '@/constants/home';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden mt-0">
      <Carousel autoplay>
        {HOME.map((slide) => (
          <div key={slide.id} className="flex justify-center items-center h-full">
            <Image className="max-w-full max-h-full object-fill" preview={false} alt={slide.alt} src={slide.src} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
