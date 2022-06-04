import express from 'express';
import CouponFetch from "./CouponFetch";
import 'dotenv/config'

const app = express();
const couponFetchService = new CouponFetch;
const port = 3002;
couponFetchService.getCoupons('pizza');

app.get('/',(req, res)=> {
    res.send("Hello world!")
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})