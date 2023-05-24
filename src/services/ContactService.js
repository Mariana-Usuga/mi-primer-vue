import axios from 'axios';

export class ContactService {
  static serverURL = 'http://localhost:9000';

  static getAllContacts() {
    let dataUrl = `${this.serverURL}/contacts`
    return axios.get(dataUrl);
  }

  static getContact(contactId) {
    let dataUrl = `${this.serverURL}/contacts/${contactId}`
    return axios.get(dataUrl);
  }

  static getContact(contactId) {
    let dataUrl = `${this.serverURL}/contacts/${contactId}`
    return axios.get(dataUrl);
  }
}