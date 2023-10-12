import withAuth from '@/components/wrapping components/withAuth';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Home() {

  const router = useRouter() ;
  useEffect(()=> {
    const token = localStorage.getItem('AT');
    const user = localStorage.getItem('user');
    const registered = localStorage.getItem('registered') ;
    if(token){
      if(user === 'seller') {
        // if(registered === true){
        //   router.replace('/seller/pendingStore');
        // }else{
          router.replace('/seller');
        // }
      }else if(user === 'customer'){
        router.replace('/customer');
      }
    }
  } , []) ;

    return (
    <>
      <Head>
        <title>Tawasy Shopping</title>
        <meta name="description" content="Tawasy Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Link href={'/nareman'} className={`px-2 py-1 ${ana === false ? `bg-[#00ff00]` : `bg-[#ff0000]`} `} >
        asdasdasd
      </Link> */}
    </>
  )
}

export default withAuth(Home) ; 
