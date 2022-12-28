import React from 'react'

export default function CategoriesTable({categories, handleDelete, moveToEditForm}) {
  return (
    
    <tbody>
        {categories.map((el, index) => {
            return(
                <tr key={el.id}>
                    <th>
                        {index+1}
                    </th>
                    <td className='max-w-sm whitespace-normal'>
                        {el.name}
                    </td>
                    <th>
                        <div className='flex gap-3'>
                            <button onClick={() => moveToEditForm(el.id)}  className="btn btn-secondary">Edit</button>
                            <button onClick={() => handleDelete(el.id)} className="btn btn-error">Delete</button>
                        </div>
                    </th>
                </tr>
            )
        })}

    </tbody>

  )
}
