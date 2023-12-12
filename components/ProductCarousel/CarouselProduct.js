import React, { useRef, useState } from 'react';
import {
  Magnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  SideBySideMagnifier,
  GlassMagnifier,
} from "react-image-magnifiers-v2";
import { useRouter } from "next/router";
import Image from 'next/image';
import logo from "@/public/images/tawasylogo.png";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';



export function CarouselProduct({productDialog , product }) {


  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
    { id: 1, value: "https://images.freeimages.com/images/large-previews/b84/long-road-1446696.jpg?fmt=webp&w=350" },
    { id: 2, value: "https://buffer.com/library/content/images/2023/10/free-images.jpg" },
    { id: 3, value: "https://buffer.com/library/content/images/2023/10/free-images.jpg" },
  ]
  const [wordData, setWordData] = useState(imgs[0])
  const [val, setVal] = useState(0)
  const handleClick = (index) => {
    console.log(index)
    setVal(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }
  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }
  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }

  const router = useRouter();
  return (
    <>
    <button className=' px-8 w-[25px]' onClick={handleNext}><BsChevronLeft className='text-skin-primary w-[20px]' /></button>
      <div className="flex md:flex-row flex-col gap-2 text-center md:w-[300px] box-content">
        <div className='flex md:flex-col flex-row md:h-[200px] h-auto overflow-auto'>
          {imgs.map((data, i) =>
            <Image key={i} unoptimized className={wordData.id == i ? "border-4 border-skin-primary" : ""} width={100} height={50}
             src={data.value} onClick={() => handleClick(i)}
              style={{ width: '100px', height: '50px', marginBottom: '5px' }} />
          )}
        </div>
 
      { productDialog == false ?<div className="md:w-[80%] w-[100%] my-auto">
          <SideBySideMagnifier
            imageSrc={wordData.value}
            // imageAlt={product.name}
            largeImageSrc={wordData.value}
            alwaysInPlace={false}
            overlayOpacity={0.5}
            switchSides={router.locale == "ar" ? true : false}
            inPlaceMinBreakpoint={641}
            fillAvailableSpace={true}
            fillAlignTop={false}
            fillGapTop={80}
            fillGapRight={10}
            fillGapBottom={50}
            fillGapLeft={10}
            className="zoom object-fit:contain object-top"
            zoomContainerBorder="1px solid #ccc"
            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
          />
        </div>

         :<div className='w-[100%]'>
        <Image
          src={product.image ? product.image : logo}
          alt={product.name}
          className="w-full   transform transition duration-1000 object-contain object-center"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "225px", height: "225px" }}
        />
        </div>}

      </div>
      <div className='flex gap-4 mt-4 relative'>
        <button className=' px-8 w-[25px] ' onClick={handlePrevious}><BsChevronRight className='text-skin-primary  w-[20px]' /></button>
      </div>

    </>
  );
}

