
const listOfPersonnel = () => {
  
  const personnels = [ 'PERSONNEL 1' , 'PERSONNEL 2' , 'PERSONNEL 3' , 'PERSONNEL 4' , 'PERSONNEL 5'  
  ];

  return (
    <div className="duration-500  w-screen h-screen mt-8">
      <div>
        <h1 className="font-semibold text-2xl mb-2">Please select List of Personnel records below</h1>
        <div className="border-2 border-black flex-col">
          <div className="font-bold text-center flex flex-row items-center justify-center gap-32 mt-2">
            <div className="">
              <select
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected>SELECTED PERSONNEL</option>
                {personnels.map((pers, index) => (
                  <option key={index} value={pers}>
                    {pers}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              
            </div>
          </div>
          <div className="font-bold text-center border-2 border-black my-10 mx-5 text-1xl sm:text-3xl overflow-auto">
            <div className="text-2xl items-center text-center">
              <body className="bg-gray-100">
                <div className="container mx-auto p-6">
                  <h1 className="text-2xl font-semibold mb-4">List of Personnels Records</h1>
                  <table className="table-auto w-full border-collapse border bg-white">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">Files</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Remark</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       <td className="border px-4 py-2">File 1</td>{/* [place holder lng */}
                       <td className="border px-4 py-2">date</td>
                       <td className="border px-4 py-2">Signed</td>
                       <td className="border px-4 py-2">good?</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                       <td className="border px-4 py-2">File 2</td>{/* [place holder lng */}
                       <td className="border px-4 py-2">date</td>
                       <td className="border px-4 py-2">Pending</td>
                       <td className="border px-4 py-2">nice?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

    
  export default listOfPersonnel