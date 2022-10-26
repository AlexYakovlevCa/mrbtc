import { Observable } from 'rxjs';
import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts$!: Observable<Contact[]>
  
  currContactId: string = ''

  onSetCurrContactId(contactId: string) {
    this.currContactId = contactId
  }

  ngOnInit(): void {
    this.contactService.loadContacts({ term: '' })
    this.contacts$ = this.contactService.contacts$
  }

}
