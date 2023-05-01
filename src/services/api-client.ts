
import axios from "axios";

export interface FetchResponse <T>{
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b4daac230eac460d82a24601695dc978',
    }
})