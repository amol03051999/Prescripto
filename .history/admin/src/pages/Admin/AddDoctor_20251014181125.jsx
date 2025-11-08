import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form>
    <p>Add Doctor</p>

    <div>
        <div>
            <label>
                <img src={assets} alt=''/>
            </label>
        </div>
    </div>

    </form>
  )
}

export default AddDoctor