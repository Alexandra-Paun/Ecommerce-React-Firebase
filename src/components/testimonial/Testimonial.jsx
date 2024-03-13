import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext'
import latinWoman from "./latin-woman.jpg"
import manPic from "./man-pic.jpg"
import reactSvg from "../../assets/react.svg"

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-blue-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={latinWoman} />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"A flawless reputation is evidence of successful partnerships. We value what our customers think about us, and we’re sure you do too."</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Senior Product Designer</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Gerline Isidora</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-center rounded-full inline-block" src={reactSvg} />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">"I am very glad with the service. Keep up the good work!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Developer</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">John Nance</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={manPic} />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"I love your services"</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">General Manager</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Tim Trent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial