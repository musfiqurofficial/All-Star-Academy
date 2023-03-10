import React, { useState } from 'react';

const ChekBox = () => {
    const [checkboxes, setCheckboxes] = useState([false, false, false]);
    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    };
    return (
        <div>
            <div className="mt-5 flex">
                <div className="hidden sm:block"></div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Steps to Enrollment:</h3>
                    <div className="flex items-center">
                        <input
                            id="checkbox1"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={checkboxes[0]}
                            onChange={() => handleCheckboxChange(0)}
                        />
                        <label htmlFor="checkbox1" className="ml-2 block text-base">
                            Schedule a Tour Using The Calendar Below
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="checkbox2"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={checkboxes[1]}
                            onChange={() => handleCheckboxChange(1)}
                        />
                        <label htmlFor="checkbox2" className="ml-2 block text-base my-2">
                            Have Your Children Attend a Trial Day
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="checkbox3"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={checkboxes[2]}
                            onChange={() => handleCheckboxChange(2)}
                        />
                        <label htmlFor="checkbox3" className="ml-2 block text-base">
                            Complete Enrollment Paperwork & Financial Commitment
                        </label>
                    </div>
                </div>
                <div className="hidden sm:block"></div>
            </div>
        </div>
    );
};

export default ChekBox;