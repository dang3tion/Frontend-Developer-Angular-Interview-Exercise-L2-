import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { NgFor } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  import { Contact } from '../model/Contact';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  imports:[NgFor, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  searchText: string = '';
  selectedAddress: string = '';
  uniqueAddresses: string[] = [];
  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = this.contactService.getAllContacts();
    this.filteredContacts = this.contacts;
    this.uniqueAddresses = [...new Set(this.contacts.map((c) => c.address))];
  }

  search() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.fullname.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedAddress === '' || contact.address === this.selectedAddress)
    );
  }



  goToDetail(contactId: number) {
    this.router.navigate(['/contact-detail', contactId]);
  }
}
