export interface Contact {
    id: number;
    fullname: string;
    email: string;
    address: string;
    phone_no: string;
    description: string;
    created_time: Date;
}

export class Contacts {
    private contacts: Contact[] = [];
    add(id: number,
        fullname: string,
        email: string, 
        address: string,
        phone_no: string,
        description: string
    ) {
        this.contacts.push({
            id,
            fullname,
            email,
            phone_no,
             address,
            description,
            created_time: new Date()
        });
    }

    find(id: number) {
        return this.contacts.find(t => t.id === id);
    }

    getAll(): Contact[] {
        return this.contacts;
    }
}