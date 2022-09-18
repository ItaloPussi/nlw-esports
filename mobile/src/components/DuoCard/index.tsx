import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { GameController } from 'phosphor-react-native';

export interface AdProps {
    id: string;
    hourStart: string;
    hourEnd: string;
    name: string;
    useVoiceChannel: boolean;
    yearsPlaying: number;
    weekDays: string[];
}

interface DuoCardProps {
    data: AdProps,
    onConnect: () => void;
}

export function DuoCard({data, onConnect}: DuoCardProps) {
  const [hoursPadronized, setHoursPadronized] = useState("")

  useEffect(() => {
    if(data.hourStart.endsWith("00") && data.hourEnd.endsWith("00")){
      setHoursPadronized(`${data.hourStart.split(":")[0]}h-${data.hourEnd.split(":")[0]}h`)
    } else {
      setHoursPadronized(`${data.hourStart}-${data.hourEnd}`)
    }
  }, [data])
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano${data.yearsPlaying != 1 ? "s" : ''}`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dia${data.weekDays.length != 1 ? 's' : ''} \u2022 ${hoursPadronized}`}
      />

      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.TEXT}
      />

      <ButtonIcon 
        title="Conectar"
        onPress={onConnect}
        Icon={GameController}
      />
    </View>
  );
}