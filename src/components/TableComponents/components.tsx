
import { styles } from "./styles";
import React from "react";
import { Col, Rows, TableWrapper } from "react-native-table-component";


interface RowsProps {
    arrOfData: any[];
    rowsData: string[][] | undefined;
    rowsFlexArr: number[];
    displayRowNumber: boolean;
}

export const RowsComponent: React.FC<RowsProps> = ({ arrOfData, rowsData, rowsFlexArr, displayRowNumber }) => {
    return (
        <>
            <TableWrapper style={styles.wrapper}>
                <Col data={arrOfData.map((item, i) => displayRowNumber ? i + 1 : item.season)} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />

                <Rows data={rowsData} flexArr={rowsFlexArr} style={styles.row} textStyle={styles.text} />
            </TableWrapper>
        </>
    );
};
