import { TouchableOpacity, Text, ImageBackground, TouchableOpacityProps, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameProps {
    id: string;
    title: string;
    bannerUrl?: string,
    cover?: ImageSourcePropType,
    _count: {
        ads: number
    }
}

interface GameCardProps extends TouchableOpacityProps {
    data: GameProps
}

export function GameCard({data, ...rest}: GameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
            source={data.bannerUrl ? {uri: data.bannerUrl} : data.cover}
            style={styles.cover}
        >
            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>
                    {data.title}
                </Text>

                <Text style={styles.ads}>
                    {data._count.ads} anúncio{data._count.ads != 1 && "s"}
                </Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
} 