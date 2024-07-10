import React from 'react'

function AddNewPerson( {directory, Edit, Delete} ) {

  // console.log(Edit);
  
  const headingRows = [
    "Name",
    "Date of Birth",
    "Aadhaar Number",
    "Mobile Number",
    "Age",
    "Actions"
  ];

  return (
    <>
        <table className='-translate-x-64 md:-translate-x-10 lg:translate-x-0 scale-50 md:scale-75 lg:scale-90  xl:scale-100 text-md w-[90%] border border-black'>
            <tr className='bg-blue-600 text-white font-semibold'>
                {headingRows.map((heading, index) => (
                <th className='px-10 xl:px-16 xl:min-w-fit py-1 border-r-2 border-white' key={index}>{heading}</th>
            ))}
            </tr>
            {directory.length > 0 ? directory.map((person, index) => (
                <tr className='border-b' key={index}>
                    <td className='flex justify-center'>{person.name}</td>
                    <td className='px-16 py-1 border-r-2 border-white text-ellipsis'>{person.dob}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>{person.aadhaar}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>{person.mobile}</td>
                    <td className='px-16 py-1 border-r-2 border-white'>{person.age}</td>
                    <td className='px-16 py-1 border-r-2 border-white flex gap-3'>
                      <button
                    className='hover:text-red-500'
                    onClick={()=>Edit(person.id)}
                    >Edit</button>
                    <button
                    onClick={() => Delete(person.id)}
                    className='text-red-500 hover:text-red-800'>Delete</button>
                    </td>
                </tr>
            )) : null}
        </table>
    </>
  )
}

export default AddNewPerson