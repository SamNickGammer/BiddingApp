import axios from 'axios';

//   @param {string} url - The API endpoint URL
//   @param {string} method - The HTTP request method (e.g., 'GET', 'POST', etc.)
//   @param {Object} [data] - The request payload (for POST, PUT, PATCH methods)
//   @param {Object} [headers] - Additional headers (optional)
//   @returns {Promise} - Returns a promise that resolves with response data or rejects with error
 

const fetchBidHubAPI = (url, method, data = null, headers = {}) => {
    const config = {
        url,
        method,
        headers,
        data,
        validateStatus: function (status) {
            return status >= 200 && status < 300; // Resolve only if the status code is less than 300
        },
        timeout: 5000, // Set a timeout limit for the request
    };

    return axios(config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code outside the range of 2xx
                console.error('Error Response:', error.response);
                return Promise.reject({
                    status: error.response.status,
                    message: error.response.data.message || 'Something went wrong!',
                });
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error Request:', error.request);
                return Promise.reject({
                    status: 0,
                    message: 'No response from server. Please try again later.',
                });
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error Message:', error.message);
                return Promise.reject({
                    status: 0,
                    message: error.message,
                });
            }
        });
};

export default fetchBidHubAPI;
