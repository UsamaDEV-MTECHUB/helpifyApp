import { SETSERVICE } from '../Types';
export const setService = payload => {
    return {
        type: SETSERVICE,
        payload: payload
    }
};