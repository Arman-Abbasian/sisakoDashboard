import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TinyBarChart from "../src/components/TinyBarChart";

export default function PressIndexes() {
  const [press,setPress]=useState({data:null,error:null,loading:false});
  const [productionTime,setProductionTime]=useState(null);
  const [failureTime,setFailureTime]=useState(null);
  console.log(productionTime)
  useEffect(()=>{
    setPress({data:null,error:null,loading:true})
    axios.get(`http://localhost:4000/press`)
    .then(res=>setPress({data:res.data,error:null,loading:false}))
    .catch(err=>{
      setPress({data:null,error:err,loading:false})
    })
  },[]);
  if(press.data && !productionTime){
   const pressProductionTime= press.data.map(item=>{
      const sumWithInitial = item.productionTime.reduce(
        (acc, curr) => acc + curr.value,
        0
      );
      return {name:item.id,value:sumWithInitial}
    });
    setProductionTime(pressProductionTime) 
  };
  if(press.data && !failureTime){
    const pressFailureTime= press.data.map(item=>{
       const sumWithInitial = item.failureTime.reduce(
         (acc, curr) => acc + curr.value,
         0
       );
       return {name:item.id,value:sumWithInitial}
     });
     setFailureTime(pressFailureTime) 
   };
  return (
    <div className="p-2">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="sisako dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" bg-primary-dark-green h-20 flex justify-start items-center rounded-sm drop-shadow-xl p-2 sticky top-2 bg-opacity-80 z-10">
        <nav className="flex justify-start items-center gap-12">
          <div>
            <Image
              src="/images/logo.webp"
              alt="sisako logo"
              width={60}
              height={60}
            />
          </div>
          <div className="flex-1 flex justify-start items-center gap-9">
            <Link legacyBehavior href="/press">
              <a className="py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300">
                پرس ها
              </a>
            </Link>
            <Link legacyBehavior href="/die">
              <a className="py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300">
                قالب ها
              </a>
            </Link>
            <Link legacyBehavior href="/personnel">
              <a className="py-3 px-3 rounded-md hover:bg-primary-light-green transition-all duration-300">
                {" "}
                پرسنل
              </a>
            </Link>
          </div>
        </nav>
      </header>
      
        {productionTime && failureTime && 
        <main className="grid grid-cols-1  gap-y-4 py-4  mt-10 mb-20 container mx-auto">
          {/* one press zarb */}
       <div className='p-2 bg-primary-light-green rounded-md w-full'>
       <h2 className='text-center font-bold mb-8'>زمان کارکرد هر پرس از ابتدای سال</h2>
       <TinyBarChart data={productionTime} title="prodcution time"/>
     </div>
     {/* one press zarb */}
     <div className='p-2 bg-primary-light-green rounded-md w-full'>
       <h2 className='text-center font-bold mb-8'>زمان خرابی هر پرس از ابتدای سال</h2>
       <TinyBarChart data={failureTime} title="failure time"/>
     </div>
        
          
            


      </main>
    }

      <footer className="fixed bottom-0 right-0 left-2 bg-primary-dark-green h-20 w-full flex justify-center items-center">
        <p>با بیش از بیست سال سابقه کار در صنعت خودرو</p>
      </footer>
    </div>
  );
}

