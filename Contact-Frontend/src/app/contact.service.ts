import { Injectable } from '@angular/core';
import { Contacts } from './model/Contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts:Contacts =new Contacts();
  constructor() { 
    this.addMockContacts();
  }

  private addMockContacts() {
    this.contacts.getAll().push(
      { id: 1, fullname: "David Johnson", email: "david@email.com", address: "Ho Chi Minh", phone_no: "123456789", description: "Software Engineer", created_time: new Date() },
      { id: 2, fullname: "Alice Smith", email: "alice@email.com", address: "Ha Noi", phone_no: "987654321", description: "Project Manager", created_time: new Date() },
      { id: 3, fullname: "John Doe", email: "john@email.com", address: "Dong Nai", phone_no: "456123789", description: "UI/UX Designer", created_time: new Date() },
      { id: 4, fullname: "Michael Brown", email: "michael@email.com", address: "Ho Chi Minh", phone_no: "654987321", description: "Product Owner", created_time: new Date() },
      { id: 5, fullname: "Emily Davis", email: "emily@email.com", address: "Ha Noi", phone_no: "321654987", description: "Quality Analyst", created_time: new Date() },
      { id: 6, fullname: "Robert Wilson", email: "robert@email.com", address: "Dong Nai", phone_no: "852741963", description: "DevOps Engineer", created_time: new Date() },
      { id: 7, fullname: "Jessica Miller", email: "jessica@email.com", address: "Ho Chi Minh", phone_no: "741852963", description: "Business Analyst", created_time: new Date() },
      { id: 8, fullname: "Daniel Lee", email: "daniel@email.com", address: "Ha Noi", phone_no: "963258741", description: "Cloud Architect", created_time: new Date() },
      { id: 9, fullname: "Sarah Thompson", email: "sarah@email.com", address: "Dong Nai", phone_no: "789456123", description: "Cybersecurity Specialist", created_time: new Date() },
      { id: 10, fullname: "William Anderson", email: "william@email.com", address: "Ho Chi Minh", phone_no: "159753456", description: "Database Administrator", created_time: new Date() }
    );
  }getAllContacts() {
    return this.contacts.getAll();
  }

  getContactById(id: number) {
    return this.contacts.find(id);
  }
  
}
