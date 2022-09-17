import { GameProps } from "../components/GameCard"

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined,
            game: GameProps
        }
    }
}