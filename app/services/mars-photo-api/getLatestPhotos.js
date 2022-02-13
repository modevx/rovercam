import Axios from "./config";

export const getLatestPhotos = async rover => {
	const res = await Axios.get(`/rovers/${rover}/latest_photos`);
	return res.data;
};
