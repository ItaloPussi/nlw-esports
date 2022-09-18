import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%'
    },
    label: {
        flex: 1,
        height: 40,
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM
    },
    input: {
        flex: 1,
        height: 40,
        padding: 8,
        borderWidth: 0.5,
        borderColor: THEME.COLORS.CAPTION_500,
        color: THEME.COLORS.TEXT,
        marginBottom: 16,
        marginTop: 8
    }
});