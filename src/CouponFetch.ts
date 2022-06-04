import axios, { AxiosRequestConfig } from 'axios';
import 'dotenv/config'

export default class CouponFetch {
    private dealPath = process.env.DISCOUNT_DEAL_PATH;
    private key = process.env.DISCOUNT_KEY;
    axios = axios.create({
        baseURL: process.env.DISCOUNT_BASE_URL
    })
    public getCoupons(query: String) {
      const config: AxiosRequestConfig = {
            params: {
                api_key: this.key,
                online: false,
                provider_slugs: 'groupon',
                query: query
            }
        }
        this.axios.get(this.dealPath, config)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .then()
    }

}