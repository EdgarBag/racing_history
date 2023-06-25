import React, { useEffect, useState } from "react";
import { useSeasonInfo } from "../../hooks/useSeasonInfo";
import { ErrorMessage, TextBox } from "../../ui/components";
import { DefaultPage } from "../DefaultPage";
import TableComponent from "../../components/TableComponents";
import { Dimensions, View } from "react-native";


const SeasonDetailsPage = () => {
    const { seasonInfo, err } = useSeasonInfo();
    const [rowsData, setRowsData] = useState<string[][]>();

    useEffect(() => {
        let arr = [];
        if (!seasonInfo) return;
        for (const { season, round, raceName, Circuit, date } of seasonInfo) {

            arr.push(Object.values({ round, raceName, date, }));
        };
        //@ts-ignore
        setRowsData(arr);
    }, [seasonInfo]);

    return (
        <DefaultPage>

            {err ?
                <ErrorMessage />
                :
                <TableComponent
                    rowsData={rowsData}
                    arrOfData={seasonInfo || []}
                    rowData={['Season', 'Round', 'Race Name', 'Date',
                        // 'Circuit Name'
                    ]}
                    rowsFlexArr={[0.5, 1, 0.7, 0.5, 1,]}
                    flexArr={[0.6, 0.5, 1, 0.7, 0.5, 1]}
                    displayRowNumber={false}
                />}
        </DefaultPage>
    );
};


export default SeasonDetailsPage;