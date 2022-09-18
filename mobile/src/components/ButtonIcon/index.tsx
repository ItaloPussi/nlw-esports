import { IconProps } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
    title: string;
    Icon: React.FC<IconProps>,
    height?: number;
}

export function ButtonIcon({title, Icon , height = 36, ...rest}: ButtonIconProps) {
  return (
    <TouchableOpacity 
        style={[styles.button, {height}]} 
        {...rest}
    >
        <Icon
            color={THEME.COLORS.TEXT}
            size={20}
        />

        <Text style={styles.buttonTitle}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}