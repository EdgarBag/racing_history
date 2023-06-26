import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setDriversPageAction, setSelectedDriverId } from '../../redux/features/drivers-slice';
import { PrevNextButtons } from '../PrevNextPageC';
import { TextBox } from '../../ui/components';
import { styles } from '../TableComponents/styles';
import { RowsComponent } from '../TableComponents/components';
import TableComponent from '../TableComponents';




interface Props {
    navigation: any;
}
const DriversTable: React.FC<Props> = ({ navigation }) => {

    const { currentDrivers } = useAppSelector((state) => state.driversState);
    const [rowsData, setRowsData] = useState<string[][]>();
    const dispatch = useAppDispatch();

    const goToDriverPage = (driverId: string) => {
        console.log("🚀 ~ file: index.tsx:24 ~ goToDriverPage ~ driverId:", driverId)
        navigation.navigate('DriverDetails');
        dispatch(setSelectedDriverId(driverId));
    };

    const ClickableText = (data: any, driverId: string) => (
        <TouchableOpacity onPress={() => goToDriverPage(driverId)}>
            <View style={styles.btn}>
                <TextBox style={styles.btnText}>{data}</TextBox>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        let arr = [];
        for (const { familyName, givenName, nationality, dateOfBirth, driverId } of currentDrivers) {

            arr.push(Object.values({ fullName: ClickableText(familyName + " " + givenName, driverId), nationality, dateOfBirth }));
        };
        //@ts-ignore
        setRowsData(arr);
    }, [currentDrivers]);

    return (
        <View>
            <TableComponent
                rowsData={rowsData}
                arrOfData={currentDrivers}
                rowData={['#', 'Driver name', 'Nationality', 'DOB']}
                rowsFlexArr={[1.7, 1, 1, 1.5]}
                flexArr={[0.5, 1.7, 1, 1]}
                displayRowNumber={true}
            />
        </View>
    );
};

export default DriversTable;