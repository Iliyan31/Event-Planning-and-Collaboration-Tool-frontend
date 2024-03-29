export class Vendor {
  id: number;
  name: string;
  surname: string;
  address: string;
  phone_number: string;
  email: string;
  vendor_type: string;

  constructor(id: number = 0, name: string = "", surname: string = "", address: string = "", phone_number: string = "",
              email: string = "",
              vendor_type: string = "") {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;
    this.vendor_type = vendor_type.toLowerCase();
  }
}
