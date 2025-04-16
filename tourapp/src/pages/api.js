import axios from 'axios';

// Get the API base URL from environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

// API functions for team members
export const fetchTeamMembers = async () => {
  try {
    const response = await apiClient.get('/team');
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

// Add more API functions as needed for other endpoints
