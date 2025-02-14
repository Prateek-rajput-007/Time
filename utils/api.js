import axios from "axios";
import { toast } from "react-hot-toast";

export const deleteTask = async (id, router) => {
  try {
    const response = await axios.delete(`/api/task/${id}`);
    if (!response.data.success) {
      console.error("API Error:", response.data.message);
      return toast.error(response.data.message);
    }
    toast.success(response.data.message);
    router.refresh();
  } catch (error) {
    console.error("Request Error:", error.response?.data?.message || error.message);
    toast.error(error.response?.data?.message || "Something went wrong!");
  }
};
