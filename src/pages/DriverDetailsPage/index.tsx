import React, { useEffect, useState } from "react";
import { DefaultPage } from "../DefaultPage";
import { TextBox } from "../../ui/components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getDriverDataAPI } from "../../api/apiDrivers";
import { IDriver } from "../../interfaces/global";
import { Alert, SafeAreaView, View } from "react-native";
import { setSelectedDriverId } from "../../redux/features/drivers-slice";
import { styles } from "./style";
import WebView from "react-native-webview";
import { useDriverInfo } from "../../hooks/useDriverInfo";
import { DriverCard } from "../../components/DriverCard";


interface DriverPageProps {
    navigation: any;
}

const DriverPage: React.FC<DriverPageProps> = ({ navigation }) => {

    const { err } = useDriverInfo();


    return (

        <DefaultPage>
            {err ?
                <TextBox style={styles.label}> Loading Driver  info error.</TextBox>
                :
                <DriverCard />
            }

        </DefaultPage>


    );
};


export default DriverPage;