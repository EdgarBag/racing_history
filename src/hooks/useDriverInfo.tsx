import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getDriverDataAPI } from "../api/apiDrivers";
import { Alert } from "react-native";
import { setSelectedDriverId } from "../redux/features/drivers-slice";



export const useDriverInfo = () => {
    const { selectedDriverId } = useAppSelector(state => state.driversState)
        , [driverInfo, setDriverInfo] = useState<any>()
        , [err, setErr] = useState(false)
        , dispatch = useAppDispatch();

    useEffect(() => {
        const getDriverData = async () => {
            await getDriverDataAPI(selectedDriverId, dispatch).then(data => setDriverInfo(data)).catch(err => {
                Alert.alert('Loading Driver info', 'Error.');
                setErr(true);
            });
        };
        getDriverData();

        return () => {
            dispatch(setSelectedDriverId(""));
            setErr(false);
        };
    }, [selectedDriverId]);



    return { driverInfo, err };
};