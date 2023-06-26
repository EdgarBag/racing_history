import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getOneSeasonDataAPI } from "../api/apiSeasons";
import { Alert } from "react-native";
import { setSelectedDriverId } from "../redux/features/drivers-slice";
import { IRace } from "../interfaces/global";



export const useSeasonInfo = () => {
    const { selectedSeason } = useAppSelector(state => state.seasonsState)
        , [seasonInfo, setSeasonInfo] = useState<IRace[]>()
        , [err, setErr] = useState(false)
        , dispatch = useAppDispatch();

    useEffect(() => {
        const getDriverData = async () => {
            if (!selectedSeason) return;
            await getOneSeasonDataAPI(selectedSeason, dispatch).then(data =>

                setSeasonInfo(data)

            ).catch(err => {
                Alert.alert('Loading Race info', 'Error.');
                setErr(true);
            });
        };
        getDriverData();

        return () => {
            dispatch(setSelectedDriverId(""));
            setErr(false);
        };
    }, [selectedSeason]);



    return { seasonInfo, err };
};