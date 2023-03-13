import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MainAreaChart from '../src/components/MainAreaChart'
import MainBarChart from '../src/components/MainBarChart'
import MainLineChart from '../src/components/MainLineChart'
import MainPieChart from '../src/components/MainPieChart'
import {motion} from 'framer-motion'


export default function Home() {
  const [showTools,setShowTools]=useState(false)
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
            <Link legacyBehavior href="/press"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300 text-xs md:text-base'>پرس </a></Link>
            <Link legacyBehavior href="/die"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300 text-xs md:text-base'>قالب </a></Link>
            <Link legacyBehavior href="/personnel"><a className='py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300 text-xs md:text-base'> پرسنل</a></Link>
            <div className={`py-3 px-3 rounded-md  transition-all duration-300 text-xs md:text-base cursor-pointer relative`} onClick={()=>setShowTools(!showTools)}>
            <div className='flex items-center gap-2'>
            <p>گزارشات</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-3 h-3 md:w-5 md:h-5 ${showTools ? 'hidden':'block'}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-3 h-3 md:w-5 md:h-5 ${showTools ? 'block':'hidden'}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
            </div>


            <motion.ul  initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{ duration: 2 ,delay:3 }} className={`absolute top-8 -left-2 flex-col gap-3 bg-primary-light-green rounded ${showTools ? 'flex':'hidden'}`}>
              <motion.li><Link legacyBehavior href="/pressIndexes"><a className='px-2 rounded-md hover:bg-primary-light-green transition-all duration-300 text-xs md:text-base'> پرس</a></Link></motion.li>
              <li><Link legacyBehavior href="/allPersonnel"><a className='px-2 rounded-md hover:bg-primary-light-green transition-all duration-300 text-xs md:text-base'> پرسنل</a></Link></li>
              <li><Link legacyBehavior href="/personnel"><a className='px-2 rounded-md hover:bg-primary-light-green transition-all duration-300 text-xs md:text-base'> قالب</a></Link></li>
            </motion.ul>
            </div>

          </div>
        </nav>
      </header>
    <main  className='grid grid-cols-2 md:grid-cols-4 gap-10 py-4  mt-10 mb-20'>
      {/* one cart */}
        <motion.div initial={{x: '100vw'}} animate={{x: 0}} transition={{duration: 4}} className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/personnel.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>پرسنل</h1>
              <p className='text-2xl font-bold'>150</p>
            </div>
          </div>
        </motion.div>
        {/* one cart */}
        <motion.div  initial={{x: '100vw'}} animate={{x: 0}} transition={{duration: 3}} className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/press.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>پرس ها</h1>
              <p className='text-2xl font-bold'>50</p>
            </div>
          </div>
        </motion.div>
        {/* one cart */}
        <motion.div initial={{x: '100vw'}} animate={{x: 0}} transition={{duration: 2}} className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/die.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>قالب ها</h1>
              <p className='text-2xl font-bold'>200</p>
            </div>
          </div>
        </motion.div>
        {/* one cart */}
        <motion.div initial={{x: '100vw'}} animate={{x: 0}} transition={{duration: 1}} className='col-span-1 bg-primary-light-green drop-shadow-lg p-2 rounded-md'>
          <div className='flex flex-col gap-4'>
            <div className='aspect-w-16 aspect-h-9 -mt-10'><img src='/images/main/product.png' alt='personnel' className='w-full h-full object-center object-contain' /></div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <h1 className='font-bold'>محصولات</h1>
              <p className='text-2xl font-bold'>70</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}} className='flex flex-col col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md  justify-center items-center'>
        <h2>افزایش تعداد پرسنل از سال 1395 الی 1401</h2>
          <MainLineChart />
          </motion.div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}} className='flex flex-col col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md  justify-center items-center'>
        <h2>افزایش تعداد تجهیزات تولیدی از سال 1395 الی 1401</h2>
          <MainBarChart />
          </motion.div> 
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}} className='flex flex-col col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md justify-center items-center'>
        <h2>افزایش تعداد قالب های تولیدی از سال 1395 الی 1401</h2>
        <MainAreaChart />
        </motion.div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}} className='flex flex-col col-span-2 w-full overflow-auto bg-primary-light-green drop-shadow-lg p-8 rounded-md  justify-center items-center'>
        <h2>افزایش تعداد مشتریان از سال 1395 الی 1401</h2>
          <MainPieChart />
          </motion.div>
    </main>
    
      <footer className='fixed bottom-0 right-0 left-2 bg-primary-dark-green h-20 w-full flex justify-center items-center'>
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  )
}
