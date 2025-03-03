import ImageSlider from "@/components/imageSlider";
import Cards from "@/components/cards";


export default function Home() {
  return (
    <div className="absolute">
      <div>
      <ImageSlider />
      </div>
      <div className="flex p-3 justify-center">
        <h1>Photography</h1>
      </div>
      <div className="p-3 mx-10">
        <span>
          In ac ante neque. Maecenas nec odio aliquet turpis pellentesque sagittis a varius neque. Donec et consectetur sapien, sed lobortis neque. Integer non aliquam sem, a semper augue. Cras efficitur molestie sapien vitae volutpat. Donec id libero justo. Sed et elementum metus, eget facilisis urna. In fermentum felis non ex scelerisque venenatis quis ut tortor. Maecenas vehicula eleifend tortor

        </span>
      </div>
      <div>
        <span className="flex justify-center">
          Our Services
        </span>
        <Cards />
      </div>

    </div>
  );
}
