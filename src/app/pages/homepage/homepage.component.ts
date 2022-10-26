import { lastValueFrom } from 'rxjs';
import { currencyFilter } from './../../models/bitcoin.model';
import { BitcoinService } from './../../services/bitcoin.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }

  filterBy!: currencyFilter
  user = this.userService.getUser();
  currency: string = 'USD'
  rate: any = 0

  async ngOnInit(): Promise<void> {
    this.rate = await lastValueFrom(this.bitcoinService.getRate('USD'))
  }

}
