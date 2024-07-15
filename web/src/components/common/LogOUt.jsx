const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
  
    // Redirect to login or home page
    window.location.href = '/login'; // Adjust the URL as needed
  };
  
  export default handleLogout;
  