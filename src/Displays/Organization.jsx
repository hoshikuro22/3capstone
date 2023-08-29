import { useState } from 'react';

const Organization = () => {
    const [SelectedOrganization, setSelectedOrganization] = useState(null);
    const [SelectedCategory, setSelectedCategory] = useState(null);

    const handleOrganizationChange = (event) => {
        setSelectedOrganization(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const category = [
        'OFFICE MEMO',
        'MESSAGES',
        'CERTIFICATES',
        'RECCOMENDATIONS',
        'MAIL CERTIFICATES',
        'REGIONAL LETTER',
        'REGIONAL MEMO',
        'SPECIAL TRAVEL ORDER',
        'GOVERMENT OFFICE',
        'CHED MANILA',
        'MISCELLANEOUS',
        'SPECIAL ORDER DEFICIENCY',
        'APPROVED/REPLY LETTERS TO SCHOLARS',
        'GOVERNMENT RECOGNITION',
        'CERTIFICATE OF PROGRAM COMPLETION - SUCS',
        'GOVERNMENT AUTHORITY - LUCS/',
        'GOVERNMENT PERMIT',
        'COA - CHED 10 COMMUNICATION',
        'CHED MEMORANDUM',
        'SPECIAL ORDER DUPLICATES'
    ];

    return (
        <div className="duration-500 w-screen h-screen mt-8">
            <div>
                <h1 className="font-semibold text-2xl mb-2">Please select Organization records below</h1>
                <div className="border-2 border-black flex-col">
                    <div className="font-bold text-center flex flex-row items-center justify-center gap-32 mt-2">
                        <div className="">
                            <select onChange={handleOrganizationChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>SELECTED ORGANIZATION</option>
                                <optgroup label="Institution">
                                    <option>Institution 1</option>
                                    <option>Institution 2</option>
                                    <option>Institution 3</option>
                                    <option>Institution 4</option>
                                    <option>Institution 5</option>
                                </optgroup>
                                <optgroup label="Agency">
                                    <option>Agency 1</option>
                                    <option>Agency 2</option>
                                    <option>Agency 3</option>
                                    <option>Agency 4</option>
                                    <option>Agency 5</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="">
                            <select onChange={handleCategoryChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>CATEGORY</option>
                                {category.map((cat, index) => (
                                    <option key={index} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled selected>DATE</option>
                                <option>other dates</option>
                            </select>
                        </div>
                    </div>
                    <div className="font-bold text-center border-2 border-black my-10 mx-5 text-1xl sm:text-3xl overflow-auto">
                        <div className="text-2xl items-center text-center">
                            <body className="bg-gray-100">
                                <div className="container mx-auto p-6">
                                    <h1 className="text-2xl font-semibold mb-4">LIST OF SELECTED ORGANIZATION, DATE & CATEGORY</h1>
                                    <table className="table-auto w-full border-collapse border bg-white">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="px-4 py-2">Organization Type</th>
                                                <th className="px-4 py-2">Organization Category Records</th>
                                                <th className="px-4 py-2">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-4 py-2">
                                                    {SelectedOrganization ? SelectedOrganization : 'organization'}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    as if file sa: {SelectedCategory ? SelectedCategory : 'category of selected organization'}
                                                </td>
                                                {/*place holder lng */}
                                                <td className="border px-4 py-2">date</td>
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

export default Organization;