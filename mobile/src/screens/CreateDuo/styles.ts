import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 32,
    marginTop: 16,
  },
  title: {
    width: '100%',
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginBottom: 16,
  },
  inputGroupContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputGroup: {
    flex: 1,
  },
  test: {
  }
});