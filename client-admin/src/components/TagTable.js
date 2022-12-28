import React from 'react'



export default function TagTable({tags}) {
  return (



    <tbody>
        {tags.map((el, index) => {
            return(
                <tr key={el.id}>
                    <th>
                        {index+1}
                    </th>
                    <td className='max-w-sm whitespace-normal'>
                        {el.name}
                    </td>
                    <td className='max-w-sm whitespace-normal'>
                        {el.PostTags.length > 0 ? el.PostTags[0].Post.title : ''}
                    </td>
                </tr>
            )
        })}

    </tbody> 


  )
}
