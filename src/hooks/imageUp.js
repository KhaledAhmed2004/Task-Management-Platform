import axios from "axios";

const imageUp = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=e6c8f1f97f71a9821f4a496ebb6b1be8`,
    formData
  );
  return data;
};

export default imageUp;
