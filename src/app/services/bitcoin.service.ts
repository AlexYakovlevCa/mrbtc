import { Injectable } from '@angular/core';
import { take, map, of, Observable, delay } from 'rxjs';

import axios from 'axios'
import { HttpClient } from '@angular/common/http';

import { storageService } from './storage.service'

@Injectable({
    providedIn: 'root'
})

export class BitcoinService {

    constructor(private http: HttpClient) { }

    getRate(currency: string): Observable<number> {

        const rateMap: { [currency: string]: number } = storageService.loadFromStorage('rate') || {}
        if (rateMap[currency]) {
            console.log('From Cache');
            return of(rateMap[currency])
        }

        console.log('From Network');
        const apiStr = `https://blockchain.info/tobtc?currency=${currency}&value=1`

        return this.http.get(apiStr).pipe(map((res) => {
            const rate = +(1 / (res as number)).toFixed(2)
            console.log(rate);
            rateMap[currency] = rate
            storageService.saveToStorage('rate', rateMap)
            return rate
        }))
    }

    getMarketPriceHistory(): Observable<Array<[]>> {
        let marketPriceHistory = storageService.loadFromStorage('history')

        if (marketPriceHistory) {
            console.log('From Cache');
            return of(marketPriceHistory)
        }

        console.log('From Network');
        const str = `https://api.blockchain.info/charts/market-price?timespan=1years&format=json&cors=true`
        return this.http.get(str).pipe(map((res: any) => {
            marketPriceHistory = res.values.map((value: { x: number; y: any }) => {
                const newDate = new Date(value.x * 1000)
                const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
                return [dateToDisplay, value.y]
            })
            storageService.saveToStorage('history', marketPriceHistory)
            return marketPriceHistory
        }))
    }

    async getAvgBlockSize() {
        const str = `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
        const avgBlockSize = await axios.get(str)
    }

    getConfirmedTransactions(): Observable<Array<[]>> {
        let confirmedTransactions = storageService.loadFromStorage('confirmedTransactions')
        if (confirmedTransactions) {
            console.log('From Cache');
            return of(confirmedTransactions)
        }

        console.log('From Network');
        const str = `https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`
        return this.http.get(str).pipe(map((res: any) => {
            confirmedTransactions = res.values.map((value: { x: number; y: any }) => {
                const newDate = new Date(value.x * 1000)
                const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
                return [dateToDisplay, value.y]
            })
            storageService.saveToStorage('confirmedTransactions', confirmedTransactions)
            return confirmedTransactions
        }))
    }
}