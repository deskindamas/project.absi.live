import Image from 'next/image';
import Loader from '../../public/images/TawasyLoader.gif'

function TawasyLoader () {

    return <div className='w-full h-full flex flex-col justify-center items-center' >
        <Image src={Loader} width={800} height={800} />
        {/* <img src={Loader} alt='loader' /> */}
    </div>

}

export default TawasyLoader ; 