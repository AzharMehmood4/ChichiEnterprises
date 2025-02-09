import React from 'react'
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter} from "react-icons/fa";

const Navebar = () => {
  return (
    <div className="bg-gray-100">
        <div className="flex justify-between p-5">
            {/* lef */}
      <div> 
        <h1>Travel Egency</h1>
      </div>
      {/* list */}
      <div className="flex justify-between">
        <ul className="flex justify-between gap-x-5 text-gray-500 ">
            <li className="hover:text-blue-600">Home</li>
            <li className="hover:text-blue-600">About</li>
            <li className="hover:text-blue-600">Travel</li>
            <li className="hover:text-blue-600">Eat</li>
            <li className="hover:text-blue-600">Relax</li>
            <li className="hover:text-blue-600">videos</li>
        </ul>
      </div>
      {/* right */}
      <div className="flex justify-between">
      <FaFacebookF color='gray'/>
      <FaInstagram color="gray"/>
      <FaPinterestP color='gray'/>
      <FaTwitter color='gray'/>
      </div>
      </div>
    </div>
  )
}

export default Navebar
