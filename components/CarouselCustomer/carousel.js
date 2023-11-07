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
      // width={`70%`}

      dynamicHeight={true}
    >
      {ads && ads.map((ad) => {
        return (
          <div key={ad.id} className="relative md:h-[540px] md:w-[1920] h-auto  w-full ">
            <img
              src={ad.image}
              // src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
              alt="image 1"
              className=" md:h-[540px] h-[150px] object-contain "
            />
          </div>
        );
      })}
      {/* <div className="relative md:h-[540px] md:w-[1920] h-auto  w-full ">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=" md:h-auto h-[150px] "
        />
      </div>
      <div className="relative md:h-[540px] md:w-[1920] h-auto  w-full ">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=" md:h-auto h-[150px] "
        />
      </div><div className="relative md:h-[540px] md:w-[1920] h-auto  w-full ">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=" md:h-auto h-[150px] "
        />
      </div><div className="relative md:h-[540px] md:w-[1920] h-auto  w-full ">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=" md:h-auto h-[150px] "
        />
      </div> */}
      {/* <div className="relative h-[540px] w-[1920]">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=""
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4"></div>
        </div>
      </div>
      <div className="relative h-[540px] w-[1920]">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=""
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4"></div>
        </div>
      </div>
      <div className="relative h-[540px] w-[1920]">
        <img
          src="https://i0.wp.com/www.westlondonstudio.co.uk/wp-content/uploads/2020/11/Image-1920x540-Clip-for-ls-v06-00_00_07_19.Still001.jpg?ssl=1"
          alt="image 1"
          className=""
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4"></div>
        </div>
      </div> */}
    </Carousel>
  );
}
