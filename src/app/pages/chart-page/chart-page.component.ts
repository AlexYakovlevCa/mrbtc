import { lastValueFrom } from 'rxjs';
import { BitcoinService } from './../../services/bitcoin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketHistoryChart: any = {
    title: 'Market History Chart',
    type: 'Line',
    data: [],
    options: {
      width: 600,
      height: 500,
    }
  }

  confirmedTransactionsChart: any = {
    title: 'Confirmed Transactions Chart',
    type: 'Line',
    data: [],
    options: {
      width: 600,
      height: 500,
    }
  }

  async ngOnInit(): Promise<void> {
    const historyRes = await lastValueFrom(this.bitcoinService.getMarketPriceHistory())
    this.marketHistoryChart.data = [...historyRes]
    const confirmedTransactionsRes = await lastValueFrom(this.bitcoinService.getConfirmedTransactions())
    this.confirmedTransactionsChart.data = [...confirmedTransactionsRes]
  }

}
