import { ScrollView, View } from "react-native";
import { TextBox } from "../../ui/components";
import { styles } from "./style";
import WebView from "react-native-webview";
import { useDriverInfo } from "../../hooks/useDriverInfo";
import React from "react";




export const DriverCard = () => {
    const { driverInfo } = useDriverInfo();
    if (!driverInfo) return <></>;
    return (
        <>
            <View style={styles.card}>
                <View style={styles.row}>
                    <TextBox style={styles.label}>Driver Name:</TextBox>
                    <TextBox style={styles.text}>{driverInfo && driverInfo[0].GivenName} {driverInfo && driverInfo[0].FamilyName}</TextBox>
                </View>
                <View style={styles.row}>

                    <TextBox style={styles.label}>Nationality:</TextBox>
                    <TextBox style={styles.text}>{driverInfo && driverInfo[0].Nationality}</TextBox>
                </View>
                <View style={styles.row}>
                    <TextBox style={styles.label}>Birth Date:</TextBox>
                    <TextBox style={styles.text}>{driverInfo && driverInfo[0].DateOfBirth}</TextBox>
                </View>
                <View style={styles.row}>
                    <TextBox style={styles.label}>URL:</TextBox>
                    <TextBox style={styles.text}>{driverInfo && driverInfo[0].$.url}</TextBox>
                </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <WebView source={{ uri: driverInfo && driverInfo[0].$.url }} style={{ flex: 1, height: 1000 }} />
            </ScrollView>

        </>
    );
};