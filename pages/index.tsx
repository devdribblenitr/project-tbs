import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MissionVision from '../components/MissionVision'
import OurReach from '../components/our_reach'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bioscience Society</title>
        <meta name="description" content="The Bioscience Society - NIT Rourkela" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
     <MissionVision/>
     <OurReach/>

     {/* <div style={{height: "100vh", background: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px", fontWeight: "900"}}>This is the Home page of Project TBS</div> */}
    </div>
  )
}
