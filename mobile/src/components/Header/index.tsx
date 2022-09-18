import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons"
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme';

export function Header() {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
    }
    
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleGoBack}
            >
                <Entypo 
                name='chevron-thin-left'
                color={THEME.COLORS.CAPTION_300}
                size={20}
                />
            </TouchableOpacity>

            <Image
                source={logoImg}
                style={styles.logo}
            />

            <View style={styles.right}/>
        </View>
    );
}