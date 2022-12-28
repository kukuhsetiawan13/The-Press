import React from 'react'
import { useNavigate } from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";
import { useSelector } from 'react-redux';



export default function NewsComponent({news}) {
    const navigate = useNavigate()

    

    const checkNewsDetails = (id, slug) => {
        navigate(`${id}/${slug}`)
    }


  return (
    <div className="flex flex-row flex-wrap -mx-3">

    {news.map((el, index) => {
      if(index % 7 == 0) {
        return (
        
          <div className="flex-shrink max-w-full w-full px-3 mb-4 pb-5" key={el.id}>
            <div className="relative hover-img max-h-98 overflow-hidden">
              {/* <!--thumbnail--> */}
              <p className='hover:cursor-pointer' onClick={() => checkNewsDetails(el.id, el.slug)} href="#">
                <img className="max-w-full w-full mx-auto max-h-full h-auto" src={el.imgUrl} alt="Image description"/>
              </p>
              <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                {/* <!--title--> */}
                <p className='hover:cursor-pointer' onClick={() => checkNewsDetails(el.id, el.slug)} href="#">
                  <h2 className="text-3xl font-bold capitalize text-white mb-3">{el.title}</h2>
                </p>
                {/* <!-- author and date --> */}
                <div className="pt-2">
                <p className="text-gray-500" href="#"><span className="inline-block text-red-800 h-3 border-l-2 border-red-600 mr-2" style={{color:'red'}}></span>{el.Category.name}</p>
                </div>
              </div>
            </div>
          </div>
          
        
        
        )
      } else {
        return (
          <div className="flex-shrink mb-4 max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100" key={el.id}>
            <div className="flex flex-row sm:block hover-img">
              <p className='hover:cursor-pointer' onClick={() => checkNewsDetails(el.id, el.slug)} href="#">
                <img className="max-w-full w-full mx-auto h-48 " src={el.imgUrl} alt="alt title"/>
              </p>
              <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                <h3 className="text-lg font-bold leading-tight mb-2 h-16">
                  <p className='hover:cursor-pointer' onClick={() => checkNewsDetails(el.id, el.slug)} href="#">{el.title}</p>
                </h3>
                <p className="text-gray-500" href="#" style={{color:'gray'}}><span className="inline-block text-red-800 h-3 border-l-2 border-red-600 mr-2" style={{color:'red'}}></span>{el.Category.name}</p>
              </div>
            </div>
          </div>
        )
      }
    })}


  </div>
  )
}
