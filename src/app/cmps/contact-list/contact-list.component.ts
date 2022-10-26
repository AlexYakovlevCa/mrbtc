import { Contact } from './../../models/contact.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts!: Contact[]
  @Output() currContactId = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
