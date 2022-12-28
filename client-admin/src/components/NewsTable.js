import React from 'react'

export default function NewsTable({news, moveToEditForm, handleDelete}) {
  return (
    <tbody>
        {news.map((el, index) => {
            return(
                <tr key={el.id}>
                    <th>
                        {index+1}
                    </th>
                    <td className='max-w-sm whitespace-normal'>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={el.imgUrl} alt="news-image"/>
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{el.title}</div>
                            <div className="text-sm opacity-50">{el.CategoryId}</div>
                            </div>
                        </div>
                    </td>
                    <td className='max-w-sm whitespace-normal'>
                        {el.content}
                    </td>
                    <td>{el.User.username}</td>
                    <th>
                        <div className='flex gap-3'>
                            <button onClick={() => moveToEditForm(el.id)} className="btn btn-secondary">Edit</button>
                            <button onClick={() => handleDelete(el.id)} className="btn btn-error">Delete</button>
                        </div>
                    </th>
                </tr>
            )
        })}
    </tbody>
  )
}
