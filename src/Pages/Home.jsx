import React from 'react'
import Banner1 from "../assets/banner1.avif"
const Home = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Chichi Enterprises
        <br className=" lg:inline-block"/>Your Trusted Travel Partner!
      </h1>
      <p className="mb-8 leading-relaxed">At CHICHI ENTERPRISES, we turn your travel dreams into reality. Whether you're planning a relaxing vacation, an adventurous getaway, or a business trip, we provide seamless and hassle-free travel solutions tailored to your needs.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={Banner1}/>
    </div>
  </div>
</section>
    </>
  )
}

export default Home
