{/* modal*/}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
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
                min="0"
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
            Add
          </button>
          </span>
        </Modal>

        {/* modal */}