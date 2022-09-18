import { GameController } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import {View, Text, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Checkbox } from '../../components/Checkbox';
import { Header } from '../../components/Header';
import { LaberedInput } from '../../components/LaberedInput';
import { LaberedHourInput } from '../../components/LaberedHourInput';
import { styles } from './styles';
import { LaberedDaysSelector } from '../../components/LaberedDaysSelector';
import { Axios } from '../../services/axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GameProps } from '../../components/GameCard';
import { LaberedPicker } from '../../components/LaberedPicker';

export function CreateDuo() {
  const route = useRoute()
  const games = route.params as GameProps[]
  const navigation = useNavigation()

  const [gameId, setGameId] = useState("")
  const [name, setName] = useState("")
  const [yearsPlaying, setYearsPlaying] = useState("")
  const [discord, setDiscord] = useState("")
  const [hourStart, setHourStart] = useState("")
  const [hourEnd, setHourEnd] = useState("")
  const [useVoiceChannel, setUseVoiceChannel] = useState(true)
  const [weekDays, setWeekDays] = useState<String[]>([])

  function handleCreateAd(){
    const ad = {
        gameId,
        name,
        yearsPlaying: parseInt(yearsPlaying),
        discord,
        hourStart,
        hourEnd,
        useVoiceChannel,
        weekDays
    }

    Axios.post(`/games/${gameId}/ads`, ad)
    .then(() => {
        Alert.alert("Sucesso!", "AD Criado com sucesso.")
        navigation.navigate('home')
    })
    .catch(e => Alert.alert("Ocorreu um erro ao criar o AD."))
  }
  return (
      <Background>
        <SafeAreaView style={{flex:1}} >
            <Header />
            <ScrollView 
                style={styles.content}
            >

                <Text style={styles.title}>
                    Crie seu anúncio:
                </Text>

                <LaberedPicker 
                    label="Qual é o game?"
                    items={games.map(game => ({value: game.id, label: game.title}))}
                    onItemSelected={setGameId}
                />

                <LaberedInput 
                    label="Seu nome (ou nickname):"
                    placeholder='Como te chamam dentro do game?'
                    value={name}
                    onChangeText={setName}
                />

                <View style={styles.inputGroupContainer}>
                    <View style={styles.inputGroup}>
                        <LaberedInput 
                            label="Joga há quantos anos?"
                            placeholder='Tudo bem ser zero...'
                            value={yearsPlaying}
                            onChangeText={(text) => {
                                let reg = new RegExp(/^\d+$/)
                                if(reg.test(text) || text == ""){
                                    setYearsPlaying(text)
                                }
                            }}
                            keyboardType="numeric"

                        />
                    </View>

                    <View style={[styles.inputGroup, {marginLeft: 12}]}>
                        <LaberedInput 
                            label="Qual o seu Discord?"
                            placeholder='Usuario#0000'
                            value={discord}
                            onChangeText={setDiscord}
                        />
                    </View>
                </View>

                <LaberedDaysSelector 
                    label="Joga em que dias da semana?"
                    onDaySelection={setWeekDays}
                />

                <View style={styles.inputGroupContainer}>
                    <View style={styles.inputGroup}>
                        <LaberedHourInput 
                            label="Horário de Início:"
                            onHourPick={setHourStart}
                        />
                    </View>

                    <View style={[styles.inputGroup, {marginLeft: 12}]}>
                        <LaberedHourInput 
                            label="Horário de Fim:"
                            onHourPick={setHourEnd}
                        />
                    </View>

                </View>

                <Checkbox 
                    title="Costumo me conectar ao chat de voz"
                    value={useVoiceChannel}
                    onValueChange={setUseVoiceChannel}
                />

                <ButtonIcon 
                    title='Encontrar DUO'
                    Icon={GameController}
                    height={52}
                    onPress={handleCreateAd}
                />
            </ScrollView>
        </SafeAreaView>
    </Background>
  );
}