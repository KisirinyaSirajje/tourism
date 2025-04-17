import axios from 'axios';

// Get the API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://sample-project-api.chordifyed.com/api/v1';

// Create an axios instance with the base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for events
export const fetchHighlightedEvents = async () => {
  try {
    const response = await apiClient.get('/events/highlighted-events');
    return response.data;
  } catch (error) {
    console.error('Error fetching highlighted events:', error);
    throw error;
  }
};

export const fetchAllEvents = async () => {
  try {
    const response = await apiClient.get('/events/all-events');
    return response.data;
  } catch (error) {
    console.error('Error fetching all events:', error);
    throw error;
  }
};

export const fetchEpicAdventureEvents = async () => {
  try {
    const response = await apiClient.get('/events/epic-adventure-events');
    return response.data;
  } catch (error) {
    console.error('Error fetching epic adventure events:', error);
    throw error;
  }
};

// export const fetchEventById = async (id) => {
//   try {
//     // Try to find in highlighted events
//     let response = await apiClient.get('/events/highlighted-events');
//     let event = response.data.find(event => event.id === parseInt(id));
    
//     // If not found, try epic adventures
//     if (!event) {
//       response = await apiClient.get('/events/epic-adventure-events');
//       event = response.data.find(event => event.id === parseInt(id));
//     }
    
//     return event || null;
//   } catch (error) {
//     console.error('Error fetching event by ID:', error);
//     throw error;
//   }
// };

// Add this function to your existing api.js file


// export const fetchSnowTreks = async () => {
//   try {
//     const response = await apiClient.get('/events/snow-treks');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching snow treks:', error);
//     throw error;
//   }
// };

// // Also update your fetchEventById function to include snow treks
// export const fetchEventById = async (id) => {
//   try {
//     // Try to find in all events
//     let response = await apiClient.get('/events/all-events');
//     let event = response.data.find(event => event.id === parseInt(id));
    
//     // If not found, try epic adventures
//     if (!event) {
//       response = await apiClient.get('/events/epic-adventure-events');
//       event = response.data.find(event => event.id === parseInt(id));
//     }
    
//     // If still not found, try highlighted events
//     if (!event) {
//       response = await apiClient.get('/events/highlighted-events');
//       event = response.data.find(event => event.id === parseInt(id));
//     }
    
//     // If still not found, try summer events
//     if (!event) {
//       response = await apiClient.get('/events/summer-events');
//       event = response.data.find(event => event.id === parseInt(id));
//     }
    
//     // If still not found, try snow treks
//     if (!event) {
//       response = await apiClient.get('/events/snow-treks');
//       event = response.data.find(event => event.id === parseInt(id));
//     }
    
//     return event || null;
//   } catch (error) {
//     console.error('Error fetching event by ID:', error);
//     throw error;
//   }
// };

export const fetchSpecialEvents = async () => {
  try {
    const response = await apiClient.get('/events/special-events');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching special events:', error);
    // If the endpoint doesn't exist (404), return an empty array instead of throwing
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw error;
  }
};


export const fetchEventById = async (id) => {
  try {
    // Try to find in all events
    try {
      const response = await apiClient.get('/events/all-events');
      const event = response.data.find(event => event.id === parseInt(id));
      if (event) return event;
    } catch (error) {
      console.error('Error fetching from all-events:', error);
    }
    
    // Try other endpoints in sequence, handling 404s gracefully
    const endpoints = [
      '/events/epic-adventure-events',
      '/events/highlighted-events',
      '/events/summer-events',
      '/events/snow-treks',
      '/events/special-events',
      '/events/snow-treks-events'  // Added special events endpoint
    ];
    
    for (const endpoint of endpoints) {
      try {
        const response = await apiClient.get(endpoint);
        const event = response.data.find(event => event.id === parseInt(id));
        if (event) return event;
      } catch (error) {
        // Log but continue to next endpoint
        console.error(`Error fetching from ${endpoint}:`, error);
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    throw error;
  }
};


export const fetchSnowTreksEvents = async () => {
  try {
    const response = await apiClient.get('/events/snow-treks-events');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching snow trek events:', error);
    // If the endpoint doesn't exist (404), return an empty array instead of throwing
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw error;
  }
};

// API function for team members
export const fetchPrivacyPolicy= async () => {
  try {
    const response = await apiClient.get('/info/privacy-policy');
    return response.data;
  } catch (error) {
    console.error('Error fetching PrivacyPolicy :', error);
    throw error;
  }
};

// Add more API functions as needed
export const fetchTeamMembers = async () => {
    try {
      const response = await apiClient.get('/team');
      return response.data;
    } catch (error) {
      console.error('Error fetching team members:', error);
      throw error;
    }
  };

  
export const fetchContactOffices = async () => {
  try {
    const response = await apiClient.get('/contact');
    return response.data;
  } catch (error) {
    console.error('Error fetching contact information:', error);
    throw error;
  }
};


// Add this function to your existing api.js file
export const fetchTestimonials = async () => {
  try {
    const response = await apiClient.get('/info/testimonials');
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

export const fetchSummerEvents = async () => {
  try {
    const response = await apiClient.get('/events/summer-events');
    return response.data;
  } catch (error) {
    console.error('Error fetching summer events:', error);
    throw error;
  }
};


export const fetchTermsConditions = async () => {
  try {
    const response = await apiClient.get('/info/terms-condition');
    return response.data;
  } catch (error) {
    console.error('Error fetching Terms and Conditions:', error);
    throw error;
  }
};

export const fetchAboutUs = async () => {
  try {
    const response = await apiClient.get('/info/about-us');
    return response.data;
  } catch (error) {
    console.error('Error fetching About Us information:', error);
    throw error;
  }
};

export default apiClient;
