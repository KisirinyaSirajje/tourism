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

export const fetchEventById = async (id) => {
  try {
    // Try to find in highlighted events
    let response = await apiClient.get('/events/highlighted-events');
    let event = response.data.find(event => event.id === parseInt(id));
    
    // If not found, try epic adventures
    if (!event) {
      response = await apiClient.get('/events/epic-adventure-events');
      event = response.data.find(event => event.id === parseInt(id));
    }
    
    return event || null;
  } catch (error) {
    console.error('Error fetching event by ID:', error);
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
