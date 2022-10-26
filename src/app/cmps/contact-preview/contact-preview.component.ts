import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact!: Contact
  @Output() currContactId = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  
}
