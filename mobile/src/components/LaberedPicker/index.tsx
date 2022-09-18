import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';

interface LaberedPickerProps {
    label: string;
    items: {
        value: string;
        label: string;
    }[],
    onItemSelected: React.Dispatch<React.SetStateAction<string>>
}

export function LaberedPicker({label, items, onItemSelected}: LaberedPickerProps) {
  const [pickedItemId, setPickedItemId] = useState(items[0].value)

  useEffect(() => (
    onItemSelected(pickedItemId)
  ), [pickedItemId])
  
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={pickedItemId}
                onValueChange={setPickedItemId}
            >
                {
                    items.map(item => (
                        <Picker.Item label={item.label} value={item.value} key={item.value} />
                    ))
                }
            </Picker>
        </View>
    </View>
  );
}