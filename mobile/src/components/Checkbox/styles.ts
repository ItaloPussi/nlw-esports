import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    checkbox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkboxText: {
        marginLeft: 4,
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.MD
    }
});