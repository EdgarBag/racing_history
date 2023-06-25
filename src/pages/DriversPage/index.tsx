import { Alert, Text, View } from "react-native";
import { DefaultPage } from "../DefaultPage";
import { useEffect } from "react";
import { getDriversAPI } from "../../api/apiDrivers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setDriversAction, setDriversPageAction } from "../../redux/features/drivers-slice";
import DriversTable from "../../components/DriversTable";
import { PrevNextButtons } from "../../components/PrevNextPageC";
import { styles } from "./style";

interface HomePageProps {
    navigation: any;
}

const DriversPage: React.FC<HomePageProps> = ({ navigation }) => {
    const { initialDriversPage } = useAppSelector(state => state.driversState);
    const dispatch = useAppDispatch();

    const changePage = (num: number) => {
        dispatch(setDriversPageAction(num));
    };

    useEffect(() => {
        const getDrivers = async () => {
            let res = await getDriversAPI(initialDriversPage, dispatch);
            if (typeof res === 'boolean') {
                dispatch(setDriversAction([]));
                return Alert.alert('Drivers loading', 'Error.');
            } else {
                return dispatch(setDriversAction(res));
            };
        };
        getDrivers();
    }, [initialDriversPage]);


    return (
        <DefaultPage>
            <View style={styles.btnsBox}>
                <PrevNextButtons page={initialDriversPage} changePage={changePage} />
            </View>
            <DriversTable navigation={navigation} />
        </DefaultPage>
    );
};

export default DriversPage;