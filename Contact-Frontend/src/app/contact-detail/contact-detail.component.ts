import { Component } from '@angular/core';
import { Contact } from '../model/Contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  imports: [],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  contact?: Contact;

  constructor(private router:Router,private activeRoute: ActivatedRoute, private contactService: ContactService) {
    const contactId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.contact = this.contactService.getContactById(contactId);
  }
  backToContactList(){
    this.router.navigateByUrl("/")
  }
}
