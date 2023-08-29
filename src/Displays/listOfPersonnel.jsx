import { useState } from 'react';
const ListOfPersonnel = () => {
  const [selectedCommunication, setSelectedCommunication] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedCommunication(event.target.value);
  };

  const communications = [
    'AUTHORIZATION', 'HEIS DESIGNATIION/SPECIMEN', 'ENROLLMENT LIST', 'LIST OF GRADUATES', 'CAV CLAIM STUB', 'CAV TRACKER', 
    'THESIS/DISSERTATION'
  ];

  return (
    <div className="duration-500  w-screen h-screen mt-8">
      <div>
        <h1 className="font-semibold text-2xl mb-2">Please select List of Personnel records below</h1>
        <div className="border-2 border-black flex-col">
          <div className="font-bold text-center flex flex-row items-center justify-center gap-32 mt-2">
            <div className="">
              <select
                onChange={handleOptionChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected>SELECTED COMMUNICATION</option>
                {communications.map((communication, index) => (
                  <option key={index} value={communication}>
                    {communication}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected>DATE</option>
                <option>other dates</option>
              </select>
            </div>
          </div>
          <div className="font-bold text-center border-2 border-black my-10 mx-5 text-1xl sm:text-3xl overflow-auto">
            <div className="text-2xl items-center text-center">
              <body className="bg-gray-100">
                <div className="container mx-auto p-6">
                  <h1 className="text-2xl font-semibold mb-4">Communication Records according by Date</h1>
                  <table className="table-auto w-full border-collapse border bg-white">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">Communication Records</th>
                        <th className="px-4 py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          as if file sa: {selectedCommunication ? selectedCommunication : 'communications'}
                        </td>
                        {/* [place holder lng */}
                        <td className="border px-4 py-2">August-September</td>
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

    
  export default ListOfPersonnel