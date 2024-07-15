import React, {useState, useEffect} from 'react';
import fetchBidHubAPI from "../utils/api";
import {API_METHOD, ME_API_PATH} from "../utils/api/api_constant";
import MaskedString from '../components/common/MaskedString';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchUserData = async () => {
            try {
                const result = await fetchBidHubAPI(ME_API_PATH, API_METHOD.GET, null, {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                })
                setUser(result.user)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchUserData().catch(error => console.log("An unexpected error happened:: ", error));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>User not found or not logged in</p>;
    }

    // const {loginId, fullName, PAN, GSTDetails, RSDInformation, contactInformation, accountInformation} = user;
    console.log(user) // use this on page.

    return (
        <div className="max-w-full mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Login Information</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="mb-2"><span className="font-semibold">Login Id:</span> <MaskedString inputString={user._id}/></p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-semibold">Full Name:</span> {user.name}</p>
                        <p className="mb-2"><span className="font-semibold">PAN No.:</span> {user.pan}</p>
                    </div>
                    <div>
                        <p className="mb-2"><span className="font-semibold">GST Details:</span> Random</p>
                    </div>
                </div>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">RSD Information</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="mb-2"><span
                            className="font-semibold">Remaining Deposit:</span> Random </p> 
                        <p className="mb-2"><span
                            className="font-semibold">Total Buying Limit:</span> Random</p>
                    </div>
                    <div>
                        <p className="mb-2"><span
                            className="font-semibold">Bank Generic Limit:</span>Random</p>
                    </div>
                </div>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Contact Information</h2>
                <div>
                    <p className="mb-2"><span
                        className="font-semibold">Contact Address:</span> {user.address}</p>
                    <p className="mb-2"><span className="font-semibold">City:</span> {user.city}</p>
                    <p className="mb-2"><span className="font-semibold">State:</span> {user.state}</p>
                    <p className="mb-2"><span className="font-semibold">Country:</span> {user.country}</p>
                    <p className="mb-2"><span className="font-semibold">Pin Code:</span> {user.pincode}
                    </p>
                    <p className="mb-2"><span
                        className="font-semibold">Primary Phone:</span> {user.phone}</p>
                    <p className="mb-2"><span
                        className="font-semibold">Secondary Phone:</span> {user.phone}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
                </div>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Account Information</h2>
                <div>
                    <p className="mb-2"><span
                        className="font-semibold">Participate In:</span> Random</p>
                    <p className="mb-2"><span
                        className="font-semibold">Registration Date:</span> Random</p>
                    <p className="mb-2"><span
                        className="font-semibold">Date of Activation:</span> Random</p>
                </div>
            </section>
            <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
            </button>
        </div>
    );
};

export default UserProfile;
