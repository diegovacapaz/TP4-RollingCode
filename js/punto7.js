class ContactList{
    constructor(size){
        this.contacts = new Array();
        this.size = size;
    }
    addContact(contact){
        if(this.isFull()){
            console.log("The contacts list is full");
        }
        else{
            this.contacts.push(contact);
            console.log("Added successfully");
        }
    }
    showContacts(){
        if(this.contacts.length===0){
            console.log("The contacts list is empty");
        }
        else{
            this.contacts.forEach((contact)=>{
                contact.showDetails();
            });
        }
    }
    searchContact(name){
        let flag = false;
        let tel = 0;
        this.contacts.forEach((contact)=>{
            if(contact.getName() === name){
                flag = true;
                tel = contact.getTel();
            }
        });
        if(flag === true){
            console.log("The phone number of "+name+" is: "+ tel);
        }
        else{
            console.log("The contact does not exist");
        }
    }
    deleteContact(contact){
        if(!(this.exists(contact))){
            console.log("The contact does not exist");
        }
        else{
            let index = -1;
            for(let i = 0; i < this.contacts.length; i++){
                if(contact.getName() === this.contacts[i].getName() && contact.getTel() === this.contacts[i].getTel()){
                    index = i;
                }
            }
            this.contacts.splice(index, 1);
            console.log("The contact has been deleted");
        }
    }
    exists(contact){
        for(let i=0;i<this.contacts.length;i++){
            if(this.contacts[i].equal(contact)){
                return true;
            }
        }
        return false;
        //return this.contacts.includes(contact); Anda mal porque includes devuelve true si los punteros apuntan al mismo objeto y no es el caso 
    }
    isFull(){
        return !(this.size > this.contacts.length);
    }
    freeSlots(){
        return this.size - this.contacts.length;
    }
}
class Contact{
    constructor(name, tel){
        this.name = name;
        this.tel = tel;
    }
    showDetails(){
        console.log(`${this.name} - ${this.tel}`);
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getTel(){
        return this.tel;
    }
    setTel(tel){
        this.tel = tel;
    }
    equal(contact){
        return (contact.getName() === this.name) && (contact.getTel() === this.tel);
    }
}
let option = -1;
let contacts = new ContactList(10);
let deletedContact;
let searchedContact;
let addedContact;
do{
    option = parseInt(prompt("7 - Add contact \n6 - Does the contact exist? \n5 - Show contacts \n4 - Search contact \n3 - Delete contact \n2 - Is the list full? \n1 - How many slots are free? \n0 - Quit"));
    switch(option){
        case 1:
            console.log("There are "+contacts.freeSlots()+" slots avaiable.");
            break;
        case 2:
            (contacts.isFull())? console.log("The list is full"):console.log("The list is not full");
            break;
        case 3:
            deletedContact = new Contact(prompt("Type de contact's name"),parseInt(prompt("Type the contact's number")));
            contacts.deleteContact(deletedContact);
            break;
        case 4:
            contacts.searchContact(prompt("Type de contact's name"));
            break;
        case 5:
            contacts.showContacts();
            break;
        case 6:
            searchedContact = new Contact(prompt("Type de contact's name"),parseInt(prompt("Type the contact's number")));
            (contacts.exists(searchedContact))? console.log("The contact exists"):console.log("The contact does not exists");
            break;
        case 7:
            addedContact = new Contact(prompt("Type de contact's name"),parseInt(prompt("Type the contact's number")));
            contacts.addContact(addedContact);
            break;
        case 0:
            break;
        default:
            console.error("Choose a valid option");
            break;
    }
}while(option != 0);