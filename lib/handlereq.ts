import axios from "axios";

export const handlePostRequest = async (data: any) => {
  try {
    const response = await axios.post('/api/contact', data);
    // Handle the response here
    console.log(response.data);
  } catch (error) {
    // Handle the error here
    console.error(error);
  }
};
