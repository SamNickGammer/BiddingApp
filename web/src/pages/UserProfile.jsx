import React from 'react';
import user from '../db/userDB';

const UserProfile = () => {
    // Destructure user data from user object
    const {loginId, fullName, PAN, GSTDetails, RSDInformation, contactInformation, accountInformation} = user;
    return (
        <div className="max-w-full  mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
            {/* Login Information */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Login Information</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="mb-2"><span className="font-semibold">Login Id:</span> {loginId}</p>
                        <p className="mb-2"><span className="font-semibold">Password:</span> ********** <span className="text-blue-500 cursor-pointer">[Change Password]</span></p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-semibold">Full Name:</span> {fullName}</p>
                        <p className="mb-2"><span className="font-semibold">PAN No.:</span> {PAN}</p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-semibold">GST Details:</span> {GSTDetails}</p>
                    </div>
                </div>
            </section>
            {/* RSD Information */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">RSD Information</h2>
                <div className="  flex justify-around">
                        <div >
                            <p className="mb-2"><span className="font-semibold">Remaining Deposit:</span> {RSDInformation.remainingDeposit}</p>
                            <p className="mb-2"><span className="font-semibold">Total Buying Limit:</span> {RSDInformation.totalBuyingLimit}</p>
                        </div>
                        <div>
                            <p className="mb-2"><span className="font-semibold">Bank Generic Limit:</span> {RSDInformation.bankGenericLimit}</p>
                        </div>
                </div>
            </section>
            {/* Contact Information */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
                <div>
                    <p className="mb-2"><span className="font-semibold">Contact Address:</span> {contactInformation.contactAddress}</p>
                    <p className="mb-2"><span className="font-semibold">City:</span> {contactInformation.city}</p>
                    <p className="mb-2"><span className="font-semibold">State:</span> {contactInformation.state}</p>
                    <p className="mb-2"><span className="font-semibold">Country:</span> {contactInformation.country}</p>
                    <p className="mb-2"><span className="font-semibold">Pin Code:</span> {contactInformation.pinCode}</p>
                    <p className="mb-2"><span className="font-semibold">Primary Phone:</span> {contactInformation.primaryPhone}</p>
                    <p className="mb-2"><span className="font-semibold">Secondary Phone:</span> {contactInformation.secondaryPhone}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {contactInformation.email}</p>
                </div>
            </section>
            {/* Account Information */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Account Information</h2>
                <div>
                    <p className="mb-2"><span className="font-semibold">Participate In:</span> {accountInformation.participateIn}</p>
                    <p className="mb-2"><span className="font-semibold">Registration Date:</span> {accountInformation.registrationDate}</p>
                    <p className="mb-2"><span className="font-semibold">Date of Activation:</span> {accountInformation.dateOfActivation}</p>
                </div>
            </section>
            {/* Save Button */}
            <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Save
            </button>
        </div>
    );
};

export default UserProfile;
