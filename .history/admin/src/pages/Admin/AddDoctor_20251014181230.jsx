import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form>
    <p>Add Doctor</p>

    <div>
        <div>
            <label htmlFor=''>
                <img src={assets.upload_area} alt=''/>
            </label>
            <input type='file' id='doc-img'/>
        </div>
    </div>

    </form>
  )
}

export default AddDoctor