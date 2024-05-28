import React from 'react'

const UserCard = ({user}) => {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{user.name.firstname+ " "+user.name.lastname}</h2>
    <div> 
        <p>{user.phone}</p>
        <p>{user.email}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{user.address.zipcode}</button>
    </div>
  </div>
</div>
    </>
  )
}

export default UserCard