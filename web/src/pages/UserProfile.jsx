import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await fetch('http://localhost:4000/api/auth/me', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setUser(data.user);
                    } else {
                        console.error('Failed to fetch user data');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            } else {
                console.error('No token found');
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>User not found or not logged in</p>;
    }

    const { loginId, fullName, PAN, GSTDetails, RSDInformation, contactInformation, accountInformation } = user;

    return (
        <div className="max-w-full mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Login Information</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="mb-2"><span className="font-semibold">Login Id:</span> {loginId}</p>
                        <p className="mb-2"><span className="font-semibold">Password:</span>  <span className="text-blue-500 cursor-pointer">[Change Password]</span></p>
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
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">RSD Information</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="mb-2"><span className="font-semibold">Remaining Deposit:</span> {RSDInformation.remainingDeposit}</p>
                        <p className="mb-2"><span className="font-semibold">Total Buying Limit:</span> {RSDInformation.totalBuyingLimit}</p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-semibold">Bank Generic Limit:</span> {RSDInformation.bankGenericLimit}</p>
                    </div>
                </div>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
                <div>
                    <p className="mb-2"><span className="font-semibold">Contact Address:</span> {contactInformation.address}</p>
                    <p className="mb-2"><span className="font-semibold">City:</span> {contactInformation.city}</p>
                    <p className="mb-2"><span className="font-semibold">State:</span> {contactInformation.state}</p>
                    <p className="mb-2"><span className="font-semibold">Country:</span> {contactInformation.country}</p>
                    <p className="mb-2"><span className="font-semibold">Pin Code:</span> {contactInformation.pinCode}</p>
                    <p className="mb-2"><span className="font-semibold">Primary Phone:</span> {contactInformation.primaryPhone}</p>
                    <p className="mb-2"><span className="font-semibold">Secondary Phone:</span> {contactInformation.secondaryPhone}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {contactInformation.email}</p>
                </div>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Account Information</h2>
                <div>
                    <p className="mb-2"><span className="font-semibold">Participate In:</span> {accountInformation.participateIn}</p>
                    <p className="mb-2"><span className="font-semibold">Registration Date:</span> {accountInformation.registrationDate}</p>
                    <p className="mb-2"><span className="font-semibold">Date of Activation:</span> {accountInformation.activationDate}</p>
                </div>
            </section>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
            </button>
        </div>
    );
};

export default UserProfile;
