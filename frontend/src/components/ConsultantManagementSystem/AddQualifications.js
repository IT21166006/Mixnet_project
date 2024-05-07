import React from 'react'

export default function AddQualifications() {
  return (
    <div>
      
      <form className="form-con" >
          <div className="registerTopic-con">
            <center>Consultant Registration</center>
          </div>
          <div className="subTopic-con">
            <center>Qualification</center>
          </div>
          <hr className='hrLine-con'></hr>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Area of Advertise
            </label>
            <input
              className="input-con" id="username" type="text" placeholder="Username" required
              
              
            />
          </div>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Education
            </label>
            <input
              className="input-con" id="username" type="textarea" placeholder="address" required
              
            />
          </div>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Age
            </label>
            <input
              className="input-con" id="username" type="number" placeholder="Age" required
              
            />
          </div>

          
          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Email
            </label>
            <input
              className="input-con" id="username" type="text" placeholder="email"
              
            />
          </div>
          
          {/*new part              new part             new part*/ }
          <div className="image-upload-container">
      
    </div>

          
          
          <div className="button-group-con">
            <button className="Regbutton-con" >
              Create Profile
            </button>
          </div>

        </form>
    </div>
  )
}
