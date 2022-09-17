import { useState } from 'react';
import { View, Text, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator  } from 'react-native';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles';
import { THEME } from '../../theme';

interface DuoMatchProps extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: DuoMatchProps) {
    const [isCopying, setIsCopying] = useState(false)

    async function copyDiscordUserToClipBoard(){
        setIsCopying(true)
        await Clipboard.setStringAsync(discord)
        setIsCopying(false)

        Alert.alert("Discord Copiado!", 'Usuário copiado para sua área de transferência')
    }

  return (
    <Modal 
        transparent
        statusBarTranslucent
        animationType='fade'
        {...rest}
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={onClose}
                >
                    <MaterialIcons 
                        name="close"
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight="bold"
                />

                <Heading 
                    title="Let's play!"
                    subtitle='Agora é só começar a jogar!'
                    style={{alignItems: 'center', marginTop: 24}}
                />

                <Text 
                    style={styles.label}
                >
                    Adicione no Discord
                </Text>

                <TouchableOpacity 
                    style={styles.discordButton}
                    onPress={copyDiscordUserToClipBoard}
                    disabled={isCopying}
                >
                    <Text style={styles.discord}>
                        {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  );
}