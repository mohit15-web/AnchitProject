import React from 'react'

function Modal({name, setName, dob, setDob, aadhaar, setAadhaar, mobile, setMobile, age, setAge, Add, closeModal, editing}) {
  
  
    return (
    <div className='absolute z-10 h-[100vh] w-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.4)]'>
        <div className=' bg-white rounded-xl py-8 px-8'>
        <h2 className="text-center font-bold text-blue-500">
            Add New Person
          </h2>
          <div className="py-5 text-sm flex flex-col min-w-fit">
            <span className="flex gap-4 items-center">
              <label className="min-w-[110px]" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-black rounded-lg px-2 py-1"
              />
            </span>

            <span className="flex gap-4 items-center mt-4">
              <label className="min-w-[110px]" htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border border-black rounded-lg px-2 py-1"
              />
            </span>

            <span className="flex gap-4 items-center mt-4">
              <label className="min-w-[110px]" htmlFor="aadhaar">Aadhaar Number</label>
              <input
                type="number"
                name="aadhaar"
                id="aadhaar"
                minLength={12}
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value)}
                className="w-full border border-black rounded-lg px-2 py-1"
              />
            </span>

            <span className="flex gap-4 items-center mt-4">
              <label className="min-w-[110px]" htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={mobile}
                minLength={10}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border border-black rounded-lg px-2 py-1"
              />
            </span>

            <span className="flex gap-4 items-center mt-4">
              <label className="min-w-[110px]" htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                min={0}
                max={150}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border border-black rounded-lg px-2 py-1"
              />
            </span>
          </div>

          <span className="flex w-full justify-between items-center px-5">
          <button
            className="bg-red-500 rounded-lg py-1 text-white font-bold px-5"
            onClick={closeModal}
          >
            Close
          </button>
          <button
          className=" bg-green-500 rounded-lg py-1 text-white font-bold px-5"
          onClick={Add}
        >
          Save
        </button>
        
          </span>
        </div>
    </div>
  )
}

export default Modal