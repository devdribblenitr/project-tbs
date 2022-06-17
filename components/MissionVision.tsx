


import React from 'react'


interface Props {
    title: string,
    text: string,
}

const Card = ({title,text}:Props)=>{
  return(
    <div className="mx-auto w-10/12 py-16 px-24 lg:w-2/5 shadow-sm  bg-neutral-800 text-gray-500  font-normal my-16" >
          <h1 className="text-center text-4xl font-semibold text-amber-600 pb-12" style={{color:'#DA8B7B'}}>{title}</h1>
          <p className="text-2xl"  >{text}</p>
      </div>
  )
}

const MissionVision = () => {
  return (
    <div style={{fontFamily:'Montserrat', backgroundColor: '#181818'}} >
        <h1 className="text-5xl text-center lg:ml-20 lg:text-left" style={{color:'#7FC43F'}}><b>Mission & Vision</b></h1>
        <div className=" w-full lg:flex lg:flex-row">
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