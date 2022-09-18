import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 32,
    marginTop: 16,
    flex: 1,
    alignItems:'center',
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
  checkbox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  checkboxText: {
    marginLeft: 4,
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD
  }
});