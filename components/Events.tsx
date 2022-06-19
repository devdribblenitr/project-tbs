
import React from 'react'
import Image from 'next/image'

interface Props{
  img:string,
  title:string,
  text:any,
  
  

}

const Cards= ({img,title,text}:Props)=>{
  return(
    <div style={{backgroundColor: '#1B1C1E', }} className="px-4 pt-1 my-1 w-full lg:px-7 lg:pt-3 lg:rounded-lg lg:w-60">
      <Image src={`/images/${img}.png`} alt="Hello" height='34px' width='50px' />
      <h1 className="pt-8 pb-2 w-1/2 text-xs lg:text-sm" style={{color:'#DCDCDC'}}>
        {title.toUpperCase()}
      </h1>
      <p style={{color:'#8A8A8A',width:'100%'}} className="text-xs lg:text-sm" >
        {text}
      </p>
      <hr className='border-t-4 border-gray-500 h-5 mt-5 border-l-8xl' />
    </div>
  )
}



const Events = () => {
  return (
    <div style={{backgroundColor:'#141416', height: '1052px'}} className=" px-12 flex flex-col py-4 lg:flex-row ">
      <div style={{backgroundImage: 'url(/images/background/EventsBg.png)'}} className="  text-center pt-10 lg:pt-48 lg:w-2/5 mx-auto lg:mx-0">
        <h1 className=' mx-auto text-3xl lg:text-6xl w-4/5 text-white' >Events and Activities</h1>
        <p className='mx-auto text-xs lg:text-sm text-zinc-500 font-medium w-4/5 pb-5  lg:p-0'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dui interdum imperdiet platea nisi. Convallis mi felis proin risus neque. Ut</p>
      </div>

      {/* For desktop Screen */}
      <div className="m-0 hidden lg:block lg:pt-20">
        <div className=' relative left-20 '>
            <Cards
            img="frame1"
            title="Edge"
            text="EDGE, the flagship event of the Material Advantage chapter of NITR, has been an opportune forum for metallurgy and material science enthusiasts to showcase their scientific, diplomatic, and technical skills."
            />
        </div>
        <div className='relative  -top-20 ' style={{left:'350px'}}>
            <Cards
            img="frame2"
            title="GROWING INNOVATORS"
            text="A one-of-a-kind event, Growing Innovators, came into existence in 2019 when Team Steellun conducted the Inaugural event which is an event for students from class 9th to 11th."
            />
        </div>
        <div className='  relative left-20 -top-40 m-0'>
            <Cards
            img="frame3"
            title="ORGANISATION CONTACTS"
            text= 'ACER MISSION, AIST MISSION, ASM INTERNATIONAL MISSION, TMS MISSION ' 
            />
        </div>


      {/* For Mobile Screen */}
      </div>
      <div className=' flex flex-col items-center lg:hidden'>
        <div className=' mx-auto '>
              <Cards
              img="frame1"
              title="Edge"
              text="EDGE, the flagship event of the Material Advantage chapter of NITR, has been an opportune forum for metallurgy and material science enthusiasts to showcase their scientific, diplomatic, and technical skills."
              />
          </div>
          <div className=' mx-auto '>
              <Cards
              img="frame2"
              title="GROWING INNOVATORS"
              text="A one-of-a-kind event, Growing Innovators, came into existence in 2019 when Team Steellun conducted the Inaugural event which is an event for students from class 9th to 11th."
              />
          </div>
          <div className=' mx-auto '>
              <Cards
              img="frame3"
              title="ORGANISATION CONTACTS"
              text= 'ACER MISSION, AIST MISSION, ASM INTERNATIONAL MISSION, TMS MISSION ' 
              />
          </div>
      </div>
      

    </div>
  )
}

export default Events;