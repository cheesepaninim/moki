/**
 *  API 공통 규격 정의
 */
import axios from 'axios';

const api = {
    async request(url, config) {
        try {
            const res = await axios({ url, ...config });
            return res.data;
        } catch (e) {
            // TODO: 공통 에러 처리 시 여기에 작성
            return {};
        }
    },
};

export default api;
