import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useState } from 'react'
import UpdateUser from '@/pages/UpdateUser/UpdateUser'

const inter = Inter({ subsets: ['latin'] })

// function for delete user
const handleDelete = (id) => {
  fetch(`https://exp-server-three.vercel.app/crudapp/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        alert('Delete Successful!!')
        window.location.reload()
      }
    })
}


export default function Home({data}) {
  const [userdata, setUserdata] = useState([])
  return (
    <>
      <div className='container mx-auto'>
          <h2 className='text-center text-4xl text-black font-bold py-5 dark:text-fuchsia-50'>User Table</h2>
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>#Sl</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.map(user => 
                    <>
                      <tr>
                          <th>{user._id}</th>
                          <td>{user.name}</td>
                          <td>{user.designation}</td>
                          <td>{user.salary}</td>
                          <td>
                             <button onClick={() => handleDelete(user._id)} className="btn btn-warning mr-2">Delete</button>
                              <label htmlFor="my-modal" onClick={() => setUserdata(user)} class="btn btn-success">
                                  Update
                              </label>
                          </td>
                      </tr>
                    </>
                    )
                }
              </tbody>
            </table>
          </div>
          <UpdateUser userdata={userdata} />
      </div>
     
   </>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch("https://exp-server-three.vercel.app/crudapp");
  const data = await res.json();

  return {
    props : {
      data,
    }
  }
}







