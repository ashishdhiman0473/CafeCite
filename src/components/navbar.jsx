import React from 'react'

const Navbar = () => {
  return (
    <navbar className=''>
        <main className='pt-5 md:px-0 px-5'>
            <div className='flex md:justify-evenly text-[white] text-sm justify-self-start'>
                <div className='font-bold shadow-xl shadow-[#343434]'>
                    <p>Eat more</p>
                </div>
                <div>

                </div>
                <div className='md:flex md:gap-20 md:visible hidden justify-end text-[17px]'>
                    <div className=''>
                        <a href='#' className=''>About</a>
                    </div>
                    <div>
                        <a href='#' className=''>Login</a>
                    </div>   
                    <div>
                        <a href='#' className=''>Signup</a>
                    </div>   
                </div>            
            </div> 
        </main>
    </navbar>
  )
}

export default Navbar
