import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
  ngOnInit(): void {
    let savedAppointment =localStorage.getItem('appointments');
    this.appointments=savedAppointment?JSON.parse(savedAppointment):[];
  }
  newappointmenttitle:string='';
  newappointmantdate:Date=new Date();
  appointments:Appointment[]=[]

  addAppointment(){
    if(this.newappointmenttitle.trim().length&&this.newappointmantdate){
      let newAppointment:Appointment={
        id:Date.now(),
        title:this.newappointmenttitle,
        date:this.newappointmantdate
      }
      this.appointments.push(newAppointment);
      this.newappointmenttitle='';
      this.newappointmantdate=new Date();
      localStorage.setItem('appointments',JSON.stringify(this.appointments));
    }
  }
  deleteAppointment(index:number){
    this.appointments.splice(index,1);
    localStorage.setItem('appointments',JSON.stringify(this.appointments));
  }

}
