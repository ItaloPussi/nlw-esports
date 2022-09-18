import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: 104,
        width: '100%',
    },
    label: {
        flex: 1,
        height: 40,
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM
    },
    pickerContainer: {
        height: 50,
        borderWidth: 1,
        borderColor: THEME.COLORS.CAPTION_500,
        marginBottom: 16,
    },
    picker: { 
        flex: 1,
        color: THEME.COLORS.TEXT,
    }
}); 