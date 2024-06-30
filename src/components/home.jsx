import Navbar from "./navbar"
import React from "react"
import background from '../green2.jpg'
// import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    // const location=useLocation()

    return (
        <main>
            <section className="md:w-[98.9vw] w-full lg:h-[50vh] h-[35vh]" style={{
                    backgroundImage:`url(${background})`,
                    }}>
                <div>
                    <Navbar/>
                </div>
                <div className="md:m-20 flex flex-col justify-center text-center items-center md:gap-10">
                <div className='flex flex-col justify-center text-center md:p-10'>
                    <div className='pb-4 md:p-0 p-10'>
                        <p className='text-[#e7e7e7] md:text-8xl text-5xl font-extrabold font-sans'>CafeSite</p>
                    </div>
                    <div>
                        <p className='md:text-2xl text-[#fafafa] font-semibold'>Discover the best food and drink of this era</p>
                    </div>
                </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="flex lg:flex-row flex-col justify-between mx-10 px-10 gap-10">

                    <div className="border-4 border-black flex flex-col lg:w-[20vw] md:m-10 rounded-xl cursor-pointer shadow-xl hover:shadow-[#000000aa]">
                        <div>
                            <img className="" src="/src/sweets.jpg" alt=""/>
                        </div>
                        <div className="flex flex-col justify-center text-center gap-2 mt-2">
                            <div>
                                <p className="font-bold font-mono text-2xl">Sweets</p>
                            </div>
                            <div>
                                <p>Order it online and enjoy the meal.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-4 border-black flex flex-col lg:w-[20vw] md:m-10 rounded-xl cursor-pointer shadow-xl hover:shadow-[#000000aa]">
                        <div>
                            <img className="" src="/src/green2.jpg" alt=""/>
                        </div>
                        <div className="flex flex-col justify-center text-center gap-2 mt-2">
                            <div>
                                <p className="font-bold font-mono text-2xl">Vegies</p>
                            </div>
                            <div>
                                <p>Order it online and enjoy the meal.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-4 border-black flex flex-col lg:w-[20vw] lg:m-10 rounded-xl cursor-pointer shadow-xl hover:shadow-[#000000aa]">
                        <div>
                            <img className="" src="/src/food2.jpg" alt=""/>
                        </div>
                        <div className="flex flex-col justify-center text-center gap-2 mt-2">
                            <div>
                                <p className="font-bold font-mono text-2xl">Fast-Food</p>
                            </div>
                            <div>
                                <p>Order it online and enjoy the meal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-[grey] h-full w-full mt-10">
                <div className="justify-center text-center p-2 text-[white]">
                    <div> <p className="md:text-2xl text-sm md:font-bold font-semibold">Connect here for more</p></div>
                    <div className="md:text-xl text-sm">
                        CafeSite@gmail.com
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Home