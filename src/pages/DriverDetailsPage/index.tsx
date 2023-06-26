import React from "react";
import { DefaultPage } from "../DefaultPage";
import { TextBox } from "../../ui/components";
import { styles } from "./style";
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