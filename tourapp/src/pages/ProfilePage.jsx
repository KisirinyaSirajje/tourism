import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEdit, FaSignOutAlt, FaCog } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { revokeAccess } from '../components/PrivateRoute';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    preferences: {
      notifications: true,
      newsletter: false
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    const accessStatus = localStorage.getItem('accessGranted') === 'true';
    
    if (!userData || !accessStatus) {
      // Redirect to login if no user data found or no access
      navigate('/access', { replace: true });
      return;
    }
    
    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Initialize form data with user data
      setFormData({
        name: parsedUser.name || '',
        email: parsedUser.email || '',
        bio: parsedUser.bio || '',
        preferences: parsedUser.preferences || {
          notifications: true,
          newsletter: false
        }
      });
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/access', { replace: true });
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Update user data in localStorage
      const updatedUser = {
        ...user,
        ...formData
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEditing(false);
      setIsLoading(false);
      setSuccessMessage('Profile updated successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    // Revoke access
    revokeAccess();
    // Redirect to home
    navigate('/', { replace: true });
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#DD501DE8] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading profile...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <section className="bg-[#DD501DE8] text-white p-10 pt-28">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FaUser /> My Profile
            </h2>
            <p className="mt-2">Manage your account and safari preferences</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Profile Header */}
            <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border-b">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-[#DD501DE8] text-4xl font-bold">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold">{user.name || 'Safari Explorer'}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="mt-2 text-gray-700">{user.bio || 'No bio provided yet. Tell us about your safari interests!'}</p>
                
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  <button 
                    onClick={() => setIsEditing(true)} 
                    className="px-4 py-2 bg-[#DD501DE8] text-white rounded-md hover:bg-orange-700 transition-colors flex items-center gap-2"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div className="m-6 p-3 bg-green-50 text-green-600 rounded-md">
                {successMessage}
              </div>
            )}

            {/* Profile Content */}
            <div className="p-8">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="bio" className="block text-gray-700 text-sm font-medium mb-1">Bio</label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DD501DE8] focus:border-transparent"
                        placeholder="Tell us about your safari interests and experiences"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t pt-6">
                    <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <FaCog /> Safari Preferences
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="notifications"
                          name="notifications"
                          checked={formData.preferences.notifications}
                          onChange={handlePreferenceChange}
                          className="h-4 w-4 text-[#DD501DE8] focus:ring-[#DD501DE8] border-gray-300 rounded"
                        />
                        <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
                          Receive email notifications about new safari tours
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.preferences.newsletter}
                          onChange={handlePreferenceChange}
                          className="h-4 w-4 text-[#DD501DE8] focus:ring-[#DD501DE8] border-gray-300 rounded"
                        />
                        <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                          Subscribe to HiddenSafari newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`px-6 py-3 rounded-md text-white font-medium transition-all duration-300 flex items-center gap-2 ${
                        isLoading
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-[#DD501DE8] hover:bg-orange-700'
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </span>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <FaUser /> Account Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{user.name || 'Not provided'}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">Bio</p>
                      <p>{user.bio || 'No bio provided yet. Tell us about your safari interests!'}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t pt-6">
                    <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <FaCog /> Safari Preferences
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className={`inline-block w-4 h-4 rounded-full ${user.preferences?.notifications ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                        <span className="ml-2 text-gray-700">
                          {user.preferences?.notifications ? 'Receiving notifications about new safari tours' : 'Safari tour notifications disabled'}
                        </span>
                      </div>
                      
                      <div className="flex items-center">
                        <span className={`inline-block w-4 h-4 rounded-full ${user.preferences?.newsletter ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                        <span className="ml-2 text-gray-700">
                          {user.preferences?.newsletter ? 'Subscribed to HiddenSafari newsletter' : 'Not subscribed to newsletter'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
