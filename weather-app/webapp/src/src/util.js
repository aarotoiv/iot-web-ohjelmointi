import axios from 'axios';

const url = "https://webapi19sa-1.course.tamk.cloud/v1/weather/"

export const getData = async(extension, interval) => {
    const res = await axios.get(url + (extension ? extension + "/" : "") + (interval ? interval : ""));
    return res.data;
};