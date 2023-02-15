import React from 'react'

export default function SubmitForm() {
  return (
    <div className='col-md-8' >
      <form style={{ float: "right" }}>
        <input class="form" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
      </form>
    </div>
  )
}
