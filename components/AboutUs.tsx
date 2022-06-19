import React from 'react'
const AboutUs = () => {
    return(
        <>
        
        <div className=" w-full lg:flex lg:flex-row">
        <h1 className="text-center text-white bg-black">ABOUT US</h1>
            <div className="mx-auto my-16 w-10/12 py-16 px-24 lg:w-2/5  bg-black text-white font-normal">
                <p className="text-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Montes, neque sagittis, malesuada feugiat fringilla morbi sit. Venenatis semper turpis eu nibh
                  rutrum pellentesque. </p>
            </div>
            <div> 
                <a href='#'><ion-icon name="logo-twitter"></ion-icon></a>
                <a href='#'><ion-icon name="logo-linkedin"></ion-icon></a>
                <a  href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href='#'><ion-icon name="logo-instagram"></ion-icon></a>
                <a href = '#'><ion-icon name="call"></ion-icon></a>
            </div>
           
        </div>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        </>
    )
}
export default AboutUs;