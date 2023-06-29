export class Contract {
  id: number;
  total_price: string;
  finished: boolean;
  associated_event: number | null;
  associated_vendor: number | null;

  constructor(id: number = 0, total_price: string = "", finished: boolean = false,
              associated_event: number | null = 0,
              associated_vendor: number | null = 0) {
    this.id = id;
    this.total_price = total_price;
    this.finished = finished;
    this.associated_event = associated_event;
    this.associated_vendor = associated_vendor;
  }
}
