import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, View, ViewStyle, useColorScheme } from "react-native";
import { styles } from "./style";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useAppSelector } from "../../redux/hooks";

interface DefaultPageProps {
    children: React.ReactNode;
    style?: ViewStyle;
}
export const DefaultPage: React.FC<DefaultPageProps> = ({ children, style }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const { isLoading } = useAppSelector(state => state.appState);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (

        <SafeAreaView style={[style, { flex: 1 }]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={'black'}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                {isLoading && <ActivityIndicator size="large" color="#008080" />}
                {children}
            </ScrollView>
        </SafeAreaView>

    );

};