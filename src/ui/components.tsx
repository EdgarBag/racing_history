import { Dimensions, Text, TextStyle, View, } from "react-native";

interface TextBoxProps {
    children: React.ReactNode;
    style?: TextStyle;
}
export const TextBox: React.FC<TextBoxProps> = ({ children, style }) => {
    return <Text style={[style, { color: 'black' }]}>{children}</Text>;
};

export const ErrorMessage = () => {
    return (
        <View style={{ padding: 10 }}>
            <TextBox style={{ fontSize: Dimensions.get('screen').width * 0.065 }}>An error occurred. Please try later.</TextBox>
        </View>);
};