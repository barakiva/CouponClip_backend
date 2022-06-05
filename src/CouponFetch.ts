import axios, { AxiosRequestConfig } from 'axios';
import 'dotenv/config'
import {Deal} from "./http/model/Deal";
import {RawResponse} from "./http/model/RawResponse";
//deals[].deal.id

export default class CouponFetch {
    axios = axios.create({
        baseURL: process.env.DISCOUNT_BASE_URL,
        headers: {'Content-Type': 'application/json'}
    })
    public getCoupons(query: String) {
      const config: AxiosRequestConfig = {
            params: {
                api_key: process.env.DISCOUNT_KEY,
                online: false,
                provider_slugs: 'groupon',
                location: 'nyc',
                query: query
            },
          transformResponse: [function (data, headers) {
              const obj = JSON.parse(data)
              let deals: Deal[];
              return obj.deals.forEach( wrapper => deals.push(wrapper.deal));
          }]
      }
        this.axios.get(process.env.DISCOUNT_DEAL_PATH, config)
            .then(res => console.dir({res}))
            .catch(err => console.log(err))
            .then()
    }

}