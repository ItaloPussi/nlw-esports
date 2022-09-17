import { TouchableOpacity, Text, ImageBackground, TouchableOpacityProps, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType
}

interface GameCardProps extends TouchableOpacityProps {
    data: GameProps
}

export function GameCard({data, ...rest}: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
            source={data.cover}
            style={styles.cover}
        >
            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>
                    {data.name}
                </Text>

                <Text style={styles.ads}>
                    {data.ads} anúncios
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
} 