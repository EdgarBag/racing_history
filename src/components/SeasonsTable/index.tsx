import { TouchableOpacity, View } from "react-native";
import TableComponent from "../TableComponents";
import { styles } from "../TableComponents/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import React, { useEffect, useState } from "react";
import { TextBox } from "../../ui/components";
import { setSelectedSeason } from "../../redux/features/seasons-slice";

interface Props {
    navigation: any;
}

const SeasonsTable: React.FC<Props> = ({ navigation }) => {

    const { currentSeasons } = useAppSelector((state) => state.seasonsState);
    const [rowsData, setRowsData] = useState<string[][]>();
    const dispatch = useAppDispatch();

    const goToDriverPage = (season: number) => {
        navigation.navigate('SeasonDetails');
        dispatch(setSelectedSeason(season));
    };

    const ClickableText = (season: number) => (
        <TouchableOpacity onPress={() => goToDriverPage(season)}>
            <View style={styles.btn}>
                <TextBox style={styles.btnText}>{season}</TextBox>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        let arr = [];
        for (const { season, url } of currentSeasons) {

            arr.push(Object.values({ fullName: ClickableText(season), }));
        };
        //@ts-ignore
        setRowsData(arr);
    }, [currentSeasons]);

    return (

        <View>
            <TableComponent
                rowsData={rowsData}
                arrOfData={currentSeasons}
                rowData={['#', 'Season',]}
                flexArr={[1, 2.3, 1]}
                rowsFlexArr={[1.5, 1]}
                displayRowNumber={true} />
        </View>
    );
};


export default SeasonsTable;