import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { fetchNewsDetails } from '../store/middleware/thunk'
import { useDispatch } from 'react-redux'
import ClockLoader from "react-spinners/ClockLoader";
import { setLoadingTrue } from '../store/actions/actionCreator'

export default function NewsDetail() {
  const {newsId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

const randomView = Math.floor(Math.random() * (10000+ 1) );

 const {newsDetail} = useSelector((state) => state.newsReducer)
 const {loading} = useSelector((state) => state.helperReducer)

 useEffect(() => {
  dispatch(setLoadingTrue())
  dispatch(fetchNewsDetails(newsId))
  if(!newsDetail) navigate('/news')
 }, [])

 console.log(newsDetail.title)
 console.log(newsDetail.User)

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
          <main className='mt-16' id="content">

            {/* <!-- block news --> */}
            <div className="bg-gray-50 py-6">
              <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                  {/* <!-- full --> */}
                  <div className="flex-shrink max-w-full w-full overflow-hidden">
                    <div className="w-full py-3 mb-3">
                      <h2 className="text-gray-800 text-3xl font-bold">
                        <div className='flex flex-row'>
                          <span style={{color:'red'}} className="inline-block h-5 border-l-3 border-red-600 mr-2">I</span>
                          <h2>{newsDetail.title}</h2>
                        </div>
                      </h2>
                    </div>
                    <div className="flex flex-row flex-wrap -mx-3">
                      <div className="max-w-full w-full px-4">
                        {/* <!-- Post content --> */}

                        <div className="leading-relaxed pb-4">
                          
                          <figure className="text-center">
                            <img className="max-w-full h-auto" src={newsDetail.imgUrl}alt="Image description"/>
                          </figure>
                          <h3 className='text-lg font-bold mb-6' style={{color:'gray'}}>
                            {newsDetail.Category ? newsDetail.Category.name : ''}
                          </h3>
                        

                          <p className="mb-5">{newsDetail.content ? newsDetail.content : ''} </p>
                        
                          <div className="relative flex flex-row items-center justify-between overflow-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20 mt-12 mb-2 px-6 py-2">
                          <div className="my-4 text-sm">

                              <span className="mr-2 md:mr-4">
                                <i className="fas fa-user me-2"></i> 
                                <svg className="bi bi-person mr-2 inline-block" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" ></path>
                                </svg> by <a className="font-semibold"></a>{newsDetail.User ? newsDetail.User.username : ''}
                              </span>
                              <time className="mr-2 md:mr-4">
                                <i className="fas fa-calendar me-2"></i> 
                                <svg className="bi bi-calendar mr-2 inline-block" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" ></path>
                                  <path d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" ></path>
                                </svg> Oct 22, 2020
                              </time>

                              <span className="mr-2 md:mr-4">
                                <i className="fas fa-eye me-2"></i> 
                                <svg className="bi bi-eye mr-2 inline-block" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z" ></path>
                                  <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" ></path>
                                </svg> {randomView}x views
                              </span>

                              <span className="mr-2 md:mr-4">
                                Tag: {newsDetail.PostTags && newsDetail.PostTags.length > 0 ? newsDetail.PostTags[0].Tag.name : ''}
                              </span>

                            </div>

                            
                          </div>
                        </div>
                        
                      
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
   <section className="left-0 right-0 sectionSize bg-black text-white pb-10 px-20 bottom-0">
    <div>
      <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        The Press
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
