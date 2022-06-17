import Image from 'next/image'
import Link from 'next/link'
import instaImg from '../public/images/instagram.svg'
import fbImg from '../public/images/facebook.svg'
import calImg from '../public/images/calendar.svg'
import teamImg from '../public/images/team.svg'
import styles from './our_reach.module.css'
import { useEffect } from 'react'


const OurReach = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter') as NodeListOf<HTMLElement>
        const speed = 0.005

        counters.forEach(cntr => {
            const updateCount = () => {
                const target = +cntr.getAttribute('data-target')
                const count = +cntr.innerText
                const inc = target*speed

                if(count<target) {
                    cntr.innerText = Math.ceil(count + inc).toString()
                    setTimeout(updateCount, 1)
                } else {
                    cntr.innerText = target.toString()
                }
            }
            updateCount();
        })
    });

    return (
        <>  
            <div className={styles.body}>
                <h1 className={styles.heading}><b>Our Reach</b></h1>
                <div className={styles.container}>
                    <div className={styles.a}>
                        <div className={styles.icon}><Link href="/"><a><Image src={instaImg} className={styles.iconImg} width={'52px'} height={'52px'}/></a></Link></div>
                        <div className={`counter ${styles.counter}`} data-target={1023}></div>
                        <h3 className={styles.h3}>Instagram <br/>Followers</h3>
                    </div>
                    <div className={styles.a}>
                        <div className={styles.icon}><Link href="/"><a><Image src={fbImg} className={styles.iconImg} width={'52px'} height={'52px'}/></a></Link></div>
                        <div className={`counter ${styles.counter}`} data-target={1023}></div>
                        <h3 className={styles.h3}>Facebook <br/>Likes</h3>
                    </div>
                    <div className={styles.a}>
                        <div className={styles.icon}><Link href="/"><a><Image src={calImg} className={styles.iconImg} width={'50px'} height={'50px'}/></a></Link></div>
                        <div className={`counter ${styles.counter}`} data-target={5}></div>
                        <h3 className={styles.h3}>Current <br/>Initiatives</h3>
                    </div>
                    <div className={styles.a}>
                        <div className={styles.icon}><Link href="/"><a><Image src={teamImg} className={styles.iconImg} width={'56px'} height={'56px'}/></a></Link></div>
                        <div className={`counter ${styles.counter}`} data-target={40}></div>
                        <h3 className={styles.h3}>Club <br/>Members</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurReach;