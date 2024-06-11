const API_BASE_URL = "https://eldenring.fanapis.com/api";

export const getArmors = async (type) => {
  try {
    const response = await fetch(`${API_BASE_URL}/armors`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch armors:", error);
    return [];
  }
};

export const getWeapons = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/weapons`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch weapons:", error);
    return [];
  }
};

export const getTalismans = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/talismans`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch talismans:", error);
    return [];
  }
};
