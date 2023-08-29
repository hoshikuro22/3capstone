
const Reports = () => {
  
 

  return (
    <div className="duration-500  w-screen h-screen mt-8">
      <div>
        <h1 className="font-semibold text-2xl mb-2">The Reports: </h1>
        <div className="border-2 border-black flex-col">
          <div className="font-bold text-center flex flex-row items-center justify-center gap-32 mt-2">
            <div className="">
            
            </div>
            <div className="">
              
            </div>
          </div>
          <div className="font-bold text-center border-2 border-black my-10 mx-5 text-1xl sm:text-3xl overflow-auto">
            <div className="text-2xl items-center text-center">
              <body className="bg-gray-100">
                <div className="container mx-auto p-6">
                  <h1 className="text-2xl font-semibold mb-4">--</h1>
                  <table className="table-auto w-full border-collapse border bg-white">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">Department</th>
                        <th className="px-4 py-2">Personnel</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Document</th>
                        <th className="px-4 py-2">Document Source</th>
                        <th className="px-4 py-2">Organization</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                       <td className="border px-4 py-2">dep1</td>{/* [place holder lng */}
                       <td className="border px-4 py-2">pers1</td>
                       <td className="border px-4 py-2">cat1</td>
                       <td className="border px-4 py-2">date</td>
                       <td className="border px-4 py-2">doc1</td>
                       <td className="border px-4 py-2">docsor1</td>
                       <td className="border px-4 py-2">org1</td>
                       <td className="border px-4 py-2">address1</td>
                       <td className="border px-4 py-2">stat1</td>
                       <td className="border px-4 py-2">remarks1</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                      <td className="border px-4 py-2">dep2</td>{/* [place holder lng */}
                       <td className="border px-4 py-2">pers2</td>
                       <td className="border px-4 py-2">cat2</td>
                       <td className="border px-4 py-2">date</td>
                       <td className="border px-4 py-2">doc2</td>
                       <td className="border px-4 py-2">docsor2</td>
                       <td className="border px-4 py-2">org2</td>
                       <td className="border px-4 py-2">address2</td>
                       <td className="border px-4 py-2">stat2</td>
                       <td className="border px-4 py-2">remarks2</td>
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

    
  export default Reports;