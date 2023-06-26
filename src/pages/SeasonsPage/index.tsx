import { View } from "react-native";
import { PrevNextButtons } from "../../components/PrevNextPageC";
import { setInitialSeasonsPage, setSeasonsAction } from "../../redux/features/seasons-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ErrorMessage, TextBox } from "../../ui/components";
import { DefaultPage } from "../DefaultPage";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { getSeasonsDataAPI } from "../../api/apiSeasons";
import SeasonsTable from "../../components/SeasonsTable";

interface Props {
    navigation: any;
}

const SeasonsPage: React.FC<Props> = ({ navigation }) => {
    const { initialSeasonsPage } = useAppSelector(state => state.seasonsState);
    const [err, setErr] = useState(false);
    const dispatch = useAppDispatch();

    const changePage = (num: number) => {
        dispatch(setInitialSeasonsPage(num));
    };

    useEffect(() => {
        const getDrivers = async () => {
            await getSeasonsDataAPI(initialSeasonsPage, dispatch)
                .then(data => dispatch(setSeasonsAction(data)))
                .catch(err => setErr(true));

        };
        getDrivers();
    }, [initialSeasonsPage]);

    return (

        <DefaultPage>
            {err ?
                <ErrorMessage />
                :
                <>
                    <View style={styles.btnsBox}>
                        <PrevNextButtons page={initialSeasonsPage} changePage={changePage} />
                    </View>
                    <SeasonsTable navigation={navigation} />
                </>
            }
        </DefaultPage>
    );

};


export default SeasonsPage;