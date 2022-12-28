import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PopularNews({popularNews}) {
    const navigate = useNavigate()
    const checkNewsDetails = (id, slug) => {
        navigate(`${id}/${slug}`)
    }

  return (
    <div className="w-full bg-white">
        <div className="mb-6">
        <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold">Most Popular</h2>
        </div>
        <ul className="post-number">
            {popularNews.map(el => {
            return (
                <li className="border-b border-gray-100 hover:bg-gray-50" key={el.id}>
                <p onClick={() => checkNewsDetails(el.id, el.slug)} className="text-lg font-bold px-6 py-3 flex flex-row items-center hover:cursor-pointer" >{el.title}</p>
                </li>
            )
            })}
            
        </ul>
        </div>
    </div>
  )
}
