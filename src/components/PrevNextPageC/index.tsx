import { TouchableOpacity, View } from "react-native";
import { TextBox } from "../../ui/components";
import Icon from 'react-native-vector-icons/Foundation';
//Foundation

interface PrevNextPageProps {
    page: number,
    changePage(val: number): void;
}

export const PrevNextButtons: React.FC<PrevNextPageProps> = ({ page, changePage }) => {
    return (
        <>
            <TouchableOpacity
                style={{ opacity: page !== 0 ? 1 : 0.5 }}
                onPress={() => changePage(page === 0 ? page : page - 1)}>
                <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                    <Icon name="previous" size={17} />
                    <TextBox style={{}}>
                        {" "}Previous Page
                    </TextBox>
                </View>
            </TouchableOpacity>
            <TextBox style={{ fontWeight: 'bold' }}>Page {page + 1}</TextBox>
            <TouchableOpacity onPress={() => changePage(page + 1)} >
                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                    <TextBox style={{}}>
                        Next Page {" "}
                    </TextBox>
                    <Icon name="next" size={17} />
                </View>
            </TouchableOpacity>
        </>);
};
