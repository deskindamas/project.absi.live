import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  let ana = false ; 
    return (
    <>
      <Head>
        <title>Tawasy Shopping</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={'/nareman'} className={`px-2 py-1 ${ana === false ? `bg-[#00ff00]` : `bg-[#ff0000]`} `} >
        asdasdasd
      </Link>
    </>
  )
}
