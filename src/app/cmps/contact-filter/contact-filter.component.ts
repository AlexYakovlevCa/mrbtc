import { ContactFilter } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor(private contactService: ContactService) {

  }

  filterBy: ContactFilter = {
    term: ''
  }

  ngOnInit(): void {
    console.log('filterBy', this.filterBy);
  }

  onSetFilter() {
    this.contactService.loadContacts(this.filterBy)
  }

}
