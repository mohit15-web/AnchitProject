import React, { useState } from "react";

function RetrieveInfo({ directory }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  console.log(directory);
  const find = () => {
    const x = directory.filter((person) => person.aadhaar == search);
    console.log(x);
    setSearchResult(x);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-4 justify-center w-full">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Aadhar Number"
          className="outline-none border-black border px-2 rounded-lg"
          type="text"
        />
        <button
          onClick={find}
          className="bg-blue-500 rounded-lg px-5 py-1 text-white font-semibold"
        >
          Find
        </button>
      </div>

      <div className="pt-10 flex flex-wrap gap-5 w-full">
          {searchResult.length > 0
            ? searchResult.map((person, index) => (
                <div className="mb-8 border-black border px-5 py-2 rounded-xl shadow-xl" key={index}>
                  <p>Name: {person.name}</p>
                  <p>Dob: {person.dob}</p>
                  <p>Aadhaar: {person.aadhaar}</p>
                  <p>Mobile: {person.mobile}</p>
                  <p>Age: {person.age}</p>
                </div>
              ))
            : <h1 className="text-center font-bold text-3xl">No Data</h1>}
      </div>

    </div>
  );
}

export default RetrieveInfo;
