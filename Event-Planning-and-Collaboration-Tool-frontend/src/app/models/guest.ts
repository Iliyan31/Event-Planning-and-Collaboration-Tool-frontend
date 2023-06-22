import {PlannedEvent} from "./planned-event";

export class Guest {
  id: number;
  name: string;
  surname: string;
  email: string;
  guest_type: string;
  attendance_type: string;
  invitation_sent: boolean;
  associated_event: PlannedEvent;

  constructor(id: number = 0, name: string = "", surname: string = "", email: string = "", guest_type: string = "",
              attendance_type: string = "",
              invitation_sent: boolean = false,
              associated_event: PlannedEvent = new PlannedEvent()) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.guest_type = guest_type;
    this.attendance_type = attendance_type;
    this.invitation_sent = invitation_sent;
    this.associated_event = associated_event;
  }
}
