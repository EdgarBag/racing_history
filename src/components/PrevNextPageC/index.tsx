import { TouchableOpacity } from "react-native";
import { TextBox } from "../../ui/components";

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
                <TextBox> {'<<'} Previous</TextBox>
            </TouchableOpacity>
            <TextBox style={{ fontWeight: 'bold' }}>Page {page + 1}</TextBox>
            <TouchableOpacity onPress={() => changePage(page + 1)} >
                <TextBox>Next Page {'>>'}</TextBox>
            </TouchableOpacity>
        </>);
};
