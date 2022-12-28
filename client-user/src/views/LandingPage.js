import React from 'react'
import newspaper from '../pictures/25bd0df3-7b58-48d0-a553-9aa0f654169c.webp'
import { Link } from 'react-router-dom'

export default function LandingPage() {



  return (
    <div>

{/* <!-- Navigation --> */}
    <nav className="fixed bg-black flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center max-h-20 z-10">
        <div Link to="" className="flex font-bold text-white items-center hover:cursor-pointer">
            The Press
        </div>
        <ul className="font-montserrat items-center hidden md:flex">
        <li className="growing-underline mx-3">
            <a className='text-white' href="#advantages">Advantages</a>
        </li>
        <li className="growing-underline mx-3">
            <a className='text-white' href="#pricing">Pricing</a>
        </li>
        </ul>
    </nav>

  {/* <!-- Hero --> */}
  <section
    className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div className="md:flex-1 md:mr-10">
      <h1 className="font-pt-serif text-5xl font-bold mb-7">
        Your daily source of truth
      </h1>
      <p className="font-pt-serif font-normal mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
        tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
      </p>
      <div className="font-montserrat">
        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
          <Link to="/news">Click here to get your news</Link>
        </button>
      </div>
    </div>
    <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <img src={newspaper} />
    </div>
  </section>

  {/* <!-- How it works --> */}
  <section className="bg-black text-white sectionSize p-10">
    <div className='flex justify-center'>
      <h1 className="secondaryTitle bg-underline2 bg-100% font-bold text-3xl">How we operate</h1>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          1
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Independent verified contributors</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          2
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Fact Checker</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          3
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Growing Community</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>

  {/* <!-- Features --> */}
  <section className="sectionSize bg-secondary ml-10 mt-10" id="advantages">
    <div className='flex justify-center'>
      <h2 className="secondaryTitle bg-underline3 bg-100% font-bold text-3xl">Advantages</h2>
    </div>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2">

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Independent #1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Accurate #2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Actual #3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Affordable #4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

    </div>
  </section>

  {/* <!-- Pricing --> */}
  <section className="sectionSize py-0  my-20" id="pricing">
    <div className='flex justify-center'>
      <h2 className="secondaryTitle bg-underline4 mb-0 bg-100% font-bold text-3xl">Pricing</h2>
    </div>
    <div className="flex w-full flex-col md:flex-row">

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          Basic
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $25
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Unlimited free news</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Notification</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Access to Forum</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          Premium
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $40
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>All features on Basic</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Exclusive news and analysis</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Custom theme</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          Platinum
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $50
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>All features on Basic and Premium</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Free 2 months subscription for 12 months plan</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Access to Exclusive Interview</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

    </div>
  </section>

  {/* <!-- FAQ  --> */}
  <section className="sectionSize bg-black text-white px-20 pb-10">
    <div>
      <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        The Press    (Layout template by Ari Budin / aribudin.com)
      </h2>
    </div>

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          associated news street 5, Otego, Montserrat, 31412
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          +62 xxx-xxx-xxx
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          thepress@mail.com
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
    </div>
    <hr className="w-full bg-white" />

  </section>
  

    </div>
  )
}
