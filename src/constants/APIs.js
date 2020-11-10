/**
 *  API 호출 경로
 */
import { CUSTOM_IP } from './URLs';

const API_SIGN_UP = `${CUSTOM_IP}/auth/signup`;
const API_SIGN_IN = user_token => `${CUSTOM_IP}/auth/signin/${user_token}`;
const API_SIGN_OUT = user_token => `${CUSTOM_IP}/auth/signout/${user_token}`;
const API_IMAGE_UPLOAD = `${CUSTOM_IP}/upload`;

export {
    API_SIGN_UP,
    API_SIGN_IN,
    API_SIGN_OUT,
    API_IMAGE_UPLOAD
};
