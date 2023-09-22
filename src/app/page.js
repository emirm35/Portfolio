
"use client";
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube,AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import {SiGmail} from 'react-icons/si'
import  {useState}  from 'react';
export default function Home() {

  const [darkMode,setDarkMode] = useState(false);


  console.log(darkMode);
  


  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
         <metadata/>
        
      </Head>     


 <main className='
 dark:bg-gradient-to-tr dark:from-neutral-900 dark:to-slate-700 
 bg-gradient-to-tr from-sky-700 to-neutral-300 
 font-medium px-10 dark:text-slate-200'>

  <section className='min-h-screen '>

    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons'>emir murat</h1>

      <ul className='flex items-center'>
        <li> 
           <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer sticky text-2xl dark:text-gray-100  text-gray-800'/>
          </li>

        <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ' >Resume</a></li>
  
      </ul>
    </nav>
     
     <div className='text-center p-10'>
      <h2 className='text-5xl py-2   text-teal-800 dark:text-teal-600 font-medium md:text-6xl rounded-lg'>Emir Murat</h2>
      <h3 className='text-2xl py-2 text-center max-w-xl mx-auto'>Yazılım Mühendisi</h3>
      <p className='text-md py-5 leading-8 dark:text-slate-200 text-gray-800 md:text-xl'>Bana aşağıdan ulaşabilirsiniz</p>
     </div>
    

    <div className='text-5xl flex justify-center gap-8 py-3 text-gray-800'>
    <a href="mailto:emirmrt35@gmail.com"><SiGmail className='dark:text-slate-200 cursor-pointer '/></a>


      <AiFillLinkedin className='dark:text-slate-200 cursor-pointer'/>
      <AiFillGithub className='dark:text-slate-200 cursor-pointer'/>


    </div>
    <div className=' mt-10  relative min-w-sm flex justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 flex items-center    overflow-hidden md:h-96 md:w-96 '>
   <Image src={deved}  className='min-w-full  ' />
    </div>
 




  </section>
  




  <section>
  
    <div className='items-center text-center 3xl:-mt-72 '>
      <div className=''>
      <h3 className='text-3xl py-1  dark:text-slate-200  '>Skills</h3>
      <p className='text-md mt-5 py-2 leading-8 text-gray-800 dark:text-slate-200'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum officiis <span className='text-neutral-950 dark:text-teal-600 font-extrabold'>minus,</span> magni similique molestiae delectus <span className='text-neutral-950 dark:text-teal-600 font-extrabold'>minus,</span> quisquam blanditiis officia repellendus.
      </p>
      <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-200'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      </div>
    </div>


    <div className="lg:flex gap-10 dark:text-slate-200  ">
            {/* <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-slate-700 flex-1">
              <Image src={design} width={100} height={100} className='mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> */}


            <div className="mx-auto text-center shadow-lg p-10 rounded-xl my-10 bg-slate-400 dark:bg-slate-700 flex-6 max-w-md  ">
              <Image src={code} width={100} height={100} className='mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code 
              </h3>
              <p className="py-2">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, aperiam incidunt minus perspiciatis beatae autem.
              </p>
              <h4 className="py-4 text-neutral-800 font-extrabold text-xl dark:text-teal-600">Languages</h4>
              <p className=" py-1">Javascript</p>
              <p className=" py-1">React</p>
              <p className=" py-1">NextJs</p>
              <p className=" py-1">TailwindCSS</p>
            </div>
            {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700 flex-1">
              <Image src={consulting} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> */}
          </div>

        </section>
        <section className="py-10">
         {/*  <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div> */}



          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}