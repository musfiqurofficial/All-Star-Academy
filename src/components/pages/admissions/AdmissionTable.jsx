import React from 'react';

const AdmissionTable = () => {
    return (

        <div className='' >
            <table className="w-7/11 border-collapse">
                <thead >
                    <tr className="bg-sky-800 text-white">
                        <th className="border border-sky-500 px-4 py-4">Programs Offered</th>
                        <th className="border border-sky-500 px-4 py-4">Annual Tuition</th>
                        <th className="border border-sky-500 px-4 py-4">Monthly Tuition</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr>
                        <td className="border border-sky-500 py-10"> PreK-2nd [9am-3:30pm]</td>
                        <td className="border border-sky-500 px-4 py-10">$19,000*</td>
                        <td className="border border-sky-500 px-4 py-10">$2000*</td>
                        {/* <p> Additional annual $995 material fee applies</p> */}
                    </tr>
                    <tr>
                        <td className="border border-sky-500 px-4 py-10">3rd-6th [9am-3:30pm]</td>
                        <td className="border border-sky-500 px-4 py-10">$23,000*</td>
                        <td className="border border-sky-500 px-4 py-10">$2400*</td>
                        {/* <p>Additional annual $995 material fee applies</p> */}
                    </tr>
                    <tr>
                        <td className="border border-sky-500 px-4 py-10">Early drop-off [8:20am]</td>
                        <td className="border border-sky-500 px-4 py-10">$1,700</td>
                        <td className="border border-sky-500 px-4 py-10">$190</td>
                    </tr>
                    <tr>
                        <td className="border border-sky-500 px-4 py-10">After-School Enrichment <br />
                            3:30pm-4:30pm</td>
                        <td className="border border-sky-500 px-4 py-10">$2,500</td>
                        <td className="border border-sky-500 px-4 py-10">$300</td>
                    </tr>
                    <tr>
                        <td className="border border-sky-500 px-4 py-10">Extended Care
                            4:30pm-6:30pm</td>
                        <td className="border border-sky-500 px-4 py-10">$4,000</td>
                        <td className="border border-sky-500 px-4 py-10">$480</td>
                    </tr>
                    <tr>
                        <td className="border border-sky-500 px-4 py-10">Seasonal Camps 9am-3pm <br />
                            [mid-winter break, spring <br /> break, & summer break]</td>
                        <td className="border border-sky-500 px-4 py-10">$4,550</td>
                        <td className="border border-sky-500 px-4 py-10">$425/ week <br /> <a className='text-blue-500' href="https://www.6crickets.com/providerDirectory/US/WA/Issaquah/All-Star-Academy-fc79250f8c5b8043/programs/9942-w56b-zb3a/All-Star-Camp!?refer&provider=2439">Click here to learn more</a> </td>
                    </tr>


                </tbody>

            </table>



        </div>
    );
};

export default AdmissionTable;