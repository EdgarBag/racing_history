import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from "react-native";
import { Table, Row, } from 'react-native-table-component';
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RowsComponent } from "./components";
import { setDriversPageAction, setSelectedDriverId } from '../../redux/features/drivers-slice';
import { PrevNextButtons } from '../PrevNextPageC';
import { TextBox } from '../../ui/components';


interface Props {
    // navigation: any;
    rowsData: string[][] | undefined;
    arrOfData: any[];
    rowData: string[];
    flexArr: number[];
    rowsFlexArr: number[];
    displayRowNumber: boolean;
}

const TableComponent: React.FC<Props> = ({ rowsData, arrOfData, rowData, flexArr, rowsFlexArr, displayRowNumber }) => {

    return (
        <Table>
            <Row data={rowData} flexArr={flexArr} style={styles.head} textStyle={styles.text} />
            <RowsComponent rowsData={rowsData} arrOfData={arrOfData} rowsFlexArr={rowsFlexArr} displayRowNumber={displayRowNumber} />
        </Table>


    );
};
export default TableComponent;
