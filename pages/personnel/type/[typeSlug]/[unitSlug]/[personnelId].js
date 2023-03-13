import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TinyBarChart from '../../../../../src/components/TinyBarChart'
import {motion} from 'framer-motion'


const sectionAnimation={
  "hidden":{
    opacity:.05,
  },
  "visible":{
    opacity:1,
    transition:{
      duration:2
    }
  },
  "hover":{
    scale:1.03,
    transition:{
      duration:1,
      type: "spring", stiffness: 60, damping: 7
    }
  }
}

export default function PersonnelUnit({personnelId}) {
    console.log(personnelId)
    const [data,setData]=useState(null);
    useEffect(()=>{
      axios.get(`http://localhost:4000/personnel/${personnelId}`)
      .then(res=>setData(res.data))
      .then(err=>console.log(err))
    },[])
  return (
    <div className='p-2'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="sisako dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=' bg-primary-dark-green h-20 flex justify-start items-center rounded-sm drop-shadow-xl p-2 sticky top-2 bg-opacity-80 z-10'>
        <nav className='flex justify-start items-center gap-12'>
          <div>
            <Image src="/images/logo.webp" alt="sisako logo" width={60} height={60}/>
          </div>
          <div className='flex-1 flex justify-start items-center gap-9'>
            <Link legacyBehavior href="/press"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300'>پرس ها</a></Link>
            <Link legacyBehavior href="/die"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300'>قالب ها</a></Link>
            <Link legacyBehavior href="/personnel"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300'> پرسنل</a></Link>
          </div>
        </nav>
      </header>
      <main className='mt-10 mb-20'>
        {data &&
        <div className='flex lg:flex-row flex-col gap-10 w-full '>
          <motion.div key={data.id} variants={sectionAnimation} initial="hidden" animate="visible"  whileHover="hover" className='bg-primary-light-green drop-shadow-lg p-2 rounded-md w-full lg:w-1/3 '>
            <div className='flex flex-col  gap-2 p-2 '>
              <div className='aspect-w-2 aspect-h-1'><img src={data.image} alt='personnel' className='w-full h-full object-center object-contain rounded-sm' /></div>
              <h1 className='font-bold text-xl mb-2 text-center'><span className='text-lg'>نام :</span> {data.name}</h1>
              <h1 className='font-bold text-xl mb-8 text-center'><span className='text-lg'>پست سازمانی :</span> {data.position}</h1>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-xl'><span className='text-lg'>نوع کار :</span> {data.type}</h1>
                <h1 className='font-bold text-xl'><span className='text-lg'>واحد :</span> {data.unit}</h1>
                <h1 className='font-bold text-xl'><span className='text-lg'>سن :</span> {data.age}</h1>
                
                </div>
                <div className='flex flex-col gap-3'>
               
                <h1 className='font-bold text-xl'><span className='text-lg'>وضعیت تاهل :</span> {data.maritalStatus}</h1>
                <h1 className='font-bold text-xl'><span className='text-lg'> سابقه :</span> {data.record}</h1>
                <h1 className='font-bold text-xl'><span className='text-lg'>تعداد فرزند :</span> {data.children}</h1>
                </div>
              </div>
            </div>
          </motion.div> 
         {/* one press zarb */}
         <motion.div variants={sectionAnimation} initial="hidden" animate="visible"  whileHover="hover" className='p-2 bg-primary-light-green rounded-md flex-1 w-full lg:w-2/3'>
           <h2 className='text-center font-bold mb-8'>عملکرد ماهانه {data.name}</h2>
           <TinyBarChart data={data.performance} title="OEE"/>
         </motion.div>
          </div>
          }
    </main>
      
    <footer className='fixed bottom-0 right-0 left-2 bg-primary-dark-green h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
};
export async function getServerSideProps({query}) {
    const personnelId= query.personnelId;
    
    console.log(personnelId)
    return { 
      props: { 
      personnelId
    } }
  }
