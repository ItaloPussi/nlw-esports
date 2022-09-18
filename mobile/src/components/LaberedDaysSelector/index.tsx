import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface LaberedDaysSelector {
    label: string;
    onDaySelection: React.Dispatch<React.SetStateAction<String[]>>
}

export function LaberedDaysSelector({label, onDaySelection}: LaberedDaysSelector) {
  const [daysSelected, setDaysSelected] = useState<String[]>([])

  const OPTIONS = ["D", "S", "T", "Q", "Q", "S", "S"]

  function handleToggleDayToSelection(day: string){
    let currentDaysSelected = [...daysSelected]
    if(currentDaysSelected.includes(day)){
        currentDaysSelected.splice(currentDaysSelected.indexOf(day),1)
    } else {
        currentDaysSelected.push(day)
    }
    setDaysSelected(currentDaysSelected)
  }

  useEffect(() => {
    onDaySelection(daysSelected)
  }, [daysSelected])

  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>
        <View style={styles.daysContainer}>
            {OPTIONS.map((item, index) => (
                <TouchableOpacity 
                    style={[styles.dayItem, daysSelected.indexOf(String(index)) != -1 ? styles.dayItemHighlighted : styles.dayItemDefault]}
                    key={index}
                    activeOpacity={0.9}
                    onPress={() => handleToggleDayToSelection(String(index))}
                >
                    <Text style={styles.dayItemTitle}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  );
}