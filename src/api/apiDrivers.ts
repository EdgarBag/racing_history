import axios from "axios";
import { API_URL } from "../constants/urls";
import { IDriver, IRace, ISeason } from "../interfaces/global";
import { useAppDispatch } from "../redux/hooks";
import { setLoading } from "../redux/features/app-slice";
import { AppDispatch } from "../redux/store";
const parseString = require('react-native-xml2js').parseString;

export const getDriversAPI = async (page: number, dispatch: AppDispatch): Promise<IDriver[] | false> => {

    try {
        dispatch(setLoading(true));
        let pageI = page === 0 ? 0 : `${page}0`;

        let res = await axios.get(`${API_URL}/api/f1/drivers.json?limit=10&offset=${pageI}`);
        return (res.data.MRData.DriverTable.Drivers as IDriver[]);

    } catch (error) {
        return false;
    } finally {
        dispatch(setLoading(false));
    }
};


export const getDriverDataAPI = async (driverId: string, dispatch: AppDispatch): Promise<any | false> => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch(setLoading(true));
            let res = await axios.get(`${API_URL}/api/f1/drivers/${driverId}`);
            parseString(res.data, (err: any, result: any) => {
                resolve(result.MRData.DriverTable[0].Driver);

            });

        } catch (error) {

            reject(false);
        } finally {
            dispatch(setLoading(false));
        }
    });
};



