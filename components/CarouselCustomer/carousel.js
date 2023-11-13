import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ResponsiveCarousel({ ads }) {
  return (
    <Carousel
      autoPlay={true}
      autoFocus={true}
      infiniteLoop={true}
      showArrows={true}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      stopOnHover={false}
      swipeable = {false}
      // width={`70%`}
      className="select-none"
      dynamicHeight={false}
    >
      {ads && ads.map((ad) => {
        return (
          <div key={ad.id} className="relative md:h-[540px] md:w-[1920] h-[150px]  w-full ">
            <Image
              src={ad.image}
              // src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
              width={0}
              height={0}
              style={{width : "100%" , height : "100%"}}
              alt="image 1"
              className=" md:h-[540px] h-[150px] object-contain "
            />
          </div>
        );
      })}
      
    </Carousel>
  );
}
