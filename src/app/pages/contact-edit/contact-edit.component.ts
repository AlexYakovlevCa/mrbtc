import { Contact } from './../../models/contact.model';
import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor() { }
  contactService = inject(ContactService)
  contact!: Contact

  ngOnInit(): void {
    this.contact = { name: '', email: '', phone: '' } as Contact
  }

  onSubmit() {
    this.contactService.saveContact(this.contact)
  }

}
