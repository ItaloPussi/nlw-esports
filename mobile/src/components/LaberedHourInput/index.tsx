import React, { useState } from 'react';
import { LaberedInput, LaberedInputProps } from '../LaberedInput';
import DateTimePicker from '@react-native-community/datetimepicker'
import { TouchableOpacity } from 'react-native';
import { handleConvertTimestampToHourString } from '../../utils/handleConvertTimestampToHourString';

interface LaberedHourInputProps extends LaberedInputProps {
    onHourPick: React.Dispatch<React.SetStateAction<string>>;
}

export function LaberedHourInput({onHourPick, ...rest}: LaberedHourInputProps) {

  const [hourValue, setHourValue] = useState("")
  const [isPickingTime, setIsPickingTime] = useState(false)

  function handlePickTime(){
    setIsPickingTime(true)
  }

  function handleTimeChoosed(timestamp?: number){
    setIsPickingTime(false)
    if(timestamp){
        setHourValue(handleConvertTimestampToHourString(timestamp))
        onHourPick(handleConvertTimestampToHourString(timestamp))
    }
  }

  return (
    <TouchableOpacity onPress={handlePickTime} activeOpacity={0.9}>
        <LaberedInput 
            placeholder="--:--"
            editable={false}
            value={hourValue}
            {...rest}
        />

        {isPickingTime && (
            <DateTimePicker 
                mode="time" 
                value={new Date()}
                is24Hour={true}
                onChange={(e) => handleTimeChoosed(e.nativeEvent.timestamp)} 
            />
        )}
    </TouchableOpacity>
  );
}