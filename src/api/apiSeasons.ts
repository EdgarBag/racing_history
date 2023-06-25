
import axios from "axios";
import { API_URL } from "../constants/urls";
import { AppDispatch } from "../redux/store";
import { setLoading } from "../redux/features/app-slice";
import { IRace, ISeason } from "../interfaces/global";
const parseString = require('react-native-xml2js').parseString;

export const getSeasonsDataAPI = async (page: number, dispatch: AppDispatch): Promise<any | false> => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch(setLoading(true));
            let pageI = page === 0 ? 0 : `${page}0`;

            let res = await axios.get(`${API_URL}/api/f1/seasons.json?limit=10&offset=${pageI}`);

            parseString(res.data, (err: any, result: any) => {

                resolve(res.data.MRData.SeasonTable.Seasons as ISeason[]);
            });

        } catch (error) {

            reject(false);
        } finally {
            dispatch(setLoading(false));
        }
    });
};

export const getOneSeasonDataAPI = async (page: number, dispatch: AppDispatch): Promise<any | false> => {

    return new Promise(async (resolve, reject) => {
        try {
            dispatch(setLoading(true));

            let res = await axios.get(`${API_URL}/api/f1/${page}.json`);
            parseString(res.data, (err: any, result: any) => {

                resolve(res.data.MRData.RaceTable.Races as IRace[]);
            });

        } catch (error) {

            reject(false);
        } finally {
            dispatch(setLoading(false));
        }
    });
}

