import express from 'express';
import CouponFetch from "./CouponFetch";
import 'dotenv/config'

const app = express();
const couponFetchService = new CouponFetch;

couponFetchService.getCoupons('pizza');
app.get('/',(req, res)=> {
    res.send("Hello world!")
} )

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})