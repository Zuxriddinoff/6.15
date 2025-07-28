import React from 'react'
import logo from "../../assets/footerlogo.png"

function Footer() {
  return (
    <footer>
        <div className=' container h-[275px] mt-[120px] flex text-[18px] gap-10 font-medium' >
            <div className='w-[50%] flex flex-col justify-center' >
                <div>
                    <img src={logo} alt="" />
                </div>
                <p>Powered by <span className='underline decoration-solid'>Webflow</span></p>
            </div>
            <div className='w-[50%] flex justify-between'>
                <div className='flex flex-col justify-center'>
                    <p>Password</p>
                    <p>404</p>
                </div>
                <div className='pt-[108px]'>
                    <p>Licenses</p>
                    <p>Style Guide</p>
                    <p>Changelog</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer 