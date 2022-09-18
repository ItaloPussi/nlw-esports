import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';
import { CheckSquare, Square } from 'phosphor-react-native';

import { styles } from './styles';
import React from 'react';

interface CheckboxProps {
    value: boolean;
    onValueChange: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
} 

export function Checkbox({title, value, onValueChange}: CheckboxProps) {
  return (
    <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onValueChange(!value)}
        activeOpacity={0.7}
    >
        {value ? (
            <CheckSquare 
                size={24}
                color="#aaa"
            />
        ) : (   
            <Square
                size={24}
                color="#aaa"
            />
        )}
        <Text style={styles.checkboxText}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}