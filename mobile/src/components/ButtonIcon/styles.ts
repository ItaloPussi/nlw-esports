import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        marginLeft: 8
    }
});