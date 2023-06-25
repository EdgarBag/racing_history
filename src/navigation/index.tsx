import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import DriversPage from "../pages/DriversPage";
import DriverPage from "../pages/DriverDetailsPage";
import { ParamListBase } from "@react-navigation/native";
import SeasonsPage from "../pages/SeasonsPage";
import SeasonDetailsPage from "../pages/SeasonDetailPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();

const DriversStackNav = () => {
    return (
        <Stack.Navigator initialRouteName="SeasonsPage">
            <Stack.Screen options={{ title: "Drivers" }} name='DriversPage' component={DriversPage} />
            <Stack.Screen options={{ title: "Driver Info" }} name='DriverDetails' component={DriverPage} />
        </Stack.Navigator>
    );
};


const SeasonsStackNav = () => {
    return (
        <Stack.Navigator initialRouteName="SeasonsPage">
            <Stack.Screen options={{ title: "Seasons Page" }} name='SeasonsPage' component={SeasonsPage} />
            <Stack.Screen options={{ title: "Season Details" }} name='SeasonDetails' component={SeasonDetailsPage} />
        </Stack.Navigator >
    );
};

const Tab = createBottomTabNavigator();

export default function AppNavigator() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Drivers" component={DriversStackNav} />
            <Tab.Screen name="Seasons" component={SeasonsStackNav} />
        </Tab.Navigator>

    );
}

