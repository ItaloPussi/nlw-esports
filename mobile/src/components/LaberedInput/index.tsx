import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface LaberedInputProps extends TextInputProps {
    label: string;
}

export function LaberedInput({label, ...rest}: LaberedInputProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        <TextInput 
            style={styles.input}
            placeholderTextColor={THEME.COLORS.CAPTION_300}
            {...rest}
        />
    </View>
  );
}