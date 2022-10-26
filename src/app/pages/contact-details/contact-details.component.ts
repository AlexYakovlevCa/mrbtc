import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact.model';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  // @Input() contactId!: string
  // @Output() currContactId = new EventEmitter<string>()

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }


  paramsSub!: Subscription
  contact!: Contact

  async ngOnInit() {
    this.paramsSub = this.route.params.subscribe(async params => {
      const contact = await lastValueFrom(this.contactService.getContactById(params['_id']))
      if (contact) this.contact = contact
    })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe()
  }
}
