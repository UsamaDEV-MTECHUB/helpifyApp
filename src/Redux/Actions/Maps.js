
import { MAPSCREENSTATE} from '../Types';

export const setMapScreenState = (payload,prevScreen) => {
    return {
        type: MAPSCREENSTATE,
        payload: payload,
        prevScreen:prevScreen
    }
};