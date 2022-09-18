import { CheckSquare, GameController } from 'phosphor-react-native';
import React from 'react';
import {View, Text, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { LaberedInput } from '../../components/LaberedInput';
import { THEME } from '../../theme';

import { styles } from './styles';

export function CreateDuo() {
  return (
    <Background>
        <SafeAreaView 
            style={styles.container}                 
        >
            <Header />
            <View 
                style={styles.content}
            >

                <Text style={styles.title}>
                    Crie seu anúncio:
                </Text>

                <LaberedInput 
                    label="Qual é o game?"
                    placeholder='Selecione o game que deseja jogar'
                />

                <LaberedInput 
                    label="Seu nome (ou nickname):"
                    placeholder='Como te chamam dentro do game?'
                />

                <View style={styles.inputGroupContainer}>
                    <View style={styles.inputGroup}>
                        <LaberedInput 
                            label="Joga há quantos anos?"
                            placeholder='Tudo bem ser zero...'
                        />
                    </View>

                    <View style={[styles.inputGroup, {marginLeft: 12}]}>
                        <LaberedInput 
                            label="Qual o seu Discord?"
                            placeholder='Usuario#0000'
                        />
                    </View>
                </View>

                <LaberedInput 
                    label="Joga em que dias da semana?"
                    placeholder='S T Q Q S S D'
                />
                <View style={styles.inputGroupContainer}>
                    <View style={styles.inputGroup}>
                        <LaberedInput 
                            label="Horário de Início:"
                            placeholder='--:--'
                        />
                    </View>

                    <View style={[styles.inputGroup, {marginLeft: 12}]}>
                        <LaberedInput 
                            label="Horário de Fim:"
                            placeholder='--:--'
                        />
                    </View>

                </View>

                <View style={styles.checkbox}>
                    <CheckSquare 
                        size={24}
                        color="#aaa"
                    />
                    <Text style={styles.checkboxText}>
                        Costumo me conectar ao chat de voz
                    </Text>
                </View>
                

                <ButtonIcon 
                    title='Encontrar DUO'
                    Icon={GameController}
                    height={52}
                />
            </View>
        </SafeAreaView>
    </Background>
  );
}