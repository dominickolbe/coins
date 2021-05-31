import mongoose from "mongoose";
import * as rt from "runtypes";
import { RtCoin, RtCoinHistory } from "../runtypes";
import { RtCoingeckoCoin, RtCoingeckoCoinArr } from "../runtypes/Coingecko";

// COINGECKO API
export type CoingeckoCoin = rt.Static<typeof RtCoingeckoCoin>;
export type CoingeckoCoinArr = rt.Static<typeof RtCoingeckoCoinArr>;

// COINS
export type Coin = rt.Static<typeof RtCoin>;
export type CoinHistory = rt.Static<typeof RtCoinHistory>;

export interface ICoin extends Coin, mongoose.Document {}
