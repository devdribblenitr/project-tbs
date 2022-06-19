


import React from 'react'


interface Props {
    title: string,
    text: string,
}

const Card = ({title,text}:Props)=>{
  return(
    <div className="mx-auto w-10/12 text-center py-4 px-4 bg-neutral-800 text-gray-500  font-normal my-10 xl:py-16 xl:px-24 xl:w-2/5 xl:text-left shadow-sm  " >
          <h1 className="text-center text-4xl font-semibold text-amber-600 pb-12" style={{color:'#DA8B7B'}}>{title}</h1>
          <p className="text-md md:text-2xl"  >{text}</p>
      </div>
  )
}

const MissionVision = () => {
  return (
    <div style={{fontFamily:'Montserrat', backgroundColor: '#181818'}} className="flex flex-col justify-center" >
        <h1 className="text-5xl text-center lg:ml-20 lg:text-left pt-10" style={{color:'#7FC43F'}}><b>Mission & Vision</b></h1>
        <div className=" w-full xl:flex xl:flex-row">
            <Card
            title={"Our Mission"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt dis a sed tortor tortor malesuada quis euismod. Aenean ullamcorper integer tempor placerat diam. Ultrices enim ullamcorper ut egestas. Eget sapien."}
            />
            <Card
            title={"Our Vision"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt dis a sed tortor tortor malesuada quis euismod. Aenean ullamcorper integer tempor placerat diam. Ultrices enim ullamcorper ut egestas. Eget sapien."}
            />
            
        </div>
        
    </div>
  )
}

export default MissionVision