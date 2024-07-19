// api.js
import axios from "axios";

export const finishRead = async (data) => {
  try {
    const response = await axios.patch(`https://motionapp-backend.vercel.app/user/usermodule/${data}`, "", {
      withCredentials: true,
    });
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
