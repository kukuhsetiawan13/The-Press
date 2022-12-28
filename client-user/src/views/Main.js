import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleFetchNews , handlePopulateNews} from '../store/middleware/thunk'
import NewsComponent from '../components/NewsComponent'
import PopularNews from '../components/PopularNews'
import samaritans from '../pictures/SamaritansTalktous.jpg'
import ClockLoader from "react-spinners/ClockLoader";
import { setLoadingTrue } from '../store/actions/actionCreator'
import { Link } from 'react-router-dom'


export default function Main() {
  const dispatch = useDispatch()
  const {news} = useSelector((state) => state.newsReducer)
  const {popularNews} = useSelector((state) => state.newsReducer)
  const {loading} = useSelector((state) => state.helperReducer)


  useEffect( () => {
    dispatch(setLoadingTrue())
    dispatch(handleFetchNews())
  }, [])



  return (
    <div>

<header className="fixed max-h-32 top-0 left-0 right-0 z-50">
     <nav className="bg-black">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex justify-between">
            <div  className="mx-w-10 text-2xl font-bold capitalize text-white hover:cursor-pointer flex items-center"><Link to="/">The Press</Link></div>
            
            <div className="flex text-white flex-row">
              {/* <!-- nav menu --> */}
              <ul className="navbar lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                  <p className="block py-3 px-6 border-b-2 border-transparent hover:cursor-pointer" ><Link to="/">Home</Link></p>
                </li>
                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                  <p className="block py-3 px-6 border-b-2 border-transparent " >Breaking News</p>
                </li>
                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                  <p className="block py-3 px-6 border-b-2 border-transparent " >Videos</p>
                </li>
                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                  <p className="block py-3 px-6 border-b-2 border-transparent " >World</p>
                </li>
                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                  <p className="block py-3 px-6 border-b-2 border-transparent " >Opinions</p>
                </li>
                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                  <p className="block py-3 px-6 border-b-2 border-transparent " >Analysis</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
     </nav>
  </header>


{loading
  ?
      <div className='mt-48 mb-64'>
          <ClockLoader
          className='mx-auto'
          color="#F37A24"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
      />
      </div>
  :
  <>
    <main id="content">
    
    {/* <!-- block news --> */}
    <div className="bg-gray-50 py-6 mt-20">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">

            {/* <!-- Left --> */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                <NewsComponent news={news} />
            </div>

            {/* <!-- right --> */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              
              <PopularNews popularNews={popularNews}/>

              <div className="text-sm mt-5 py-6 sticky">
                <div className="text-center mt-5 mx-auto w-96">
                  <a className="uppercase" href="#">The Press partners with (not real) The Samaritans to help those in mental crisis. Please call if you need help.</a>
                  <a href="#">
                    <img className="mx-auto w-96" src={samaritans} alt="advertisement area"/>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  </>

}
  

  

  {/* <!-- FAQ  --> */}
  <section className="sectionSize bg-black text-white px-20 pb-10">    
  <div>
      <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        The Press
      </h2>
    </div>

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div  className="font-montserrat font-medium mr-auto">
          associated news street 5, Otego, Montserrat, 31412
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div  className="font-montserrat font-medium mr-auto">
          +62 xxx-xxx-xxx
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div  className="font-montserrat font-medium mr-auto">
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
