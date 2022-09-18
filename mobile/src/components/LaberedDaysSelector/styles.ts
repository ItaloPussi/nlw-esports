import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
    },
    label: {
        flex: 1,
        height: 40,
        color: THEME.COLORS.CAPTION_300,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM
    },
    daysContainer: {
        flex: 1,
        height: 50,
        marginBottom: 32,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dayItem: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    dayItemDefault: {
        backgroundColor: THEME.COLORS.BACKGROUND_800,
    },
    dayItemHighlighted: {
        backgroundColor: THEME.COLORS.PRIMARY
    },
    dayItemTitle: {
        color: THEME.COLORS.CAPTION_300
    }
});