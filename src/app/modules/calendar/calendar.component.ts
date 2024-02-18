import { Component } from '@angular/core';
import { CalendarService } from 'src/app/core/services/calendar.service';
import { calendar } from 'src/app/shared/interfaces/calendar.interface';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  calendars: calendar[] = [];
  dateCurrent:number = 0;

  constructor(
    private calendarService: CalendarService,
    private sharedService:SharedService
    ) {}

  ngOnInit(){
    this._list();
  }

  _list(){
    this.calendarService.getAll().subscribe(
      response => {
        this.calendars = response;
        this.dateCurrent = this.calendars[0].id;
        this.sendDataToGameComponent(this.calendars[0]);
      },
      error => {
        console.warn( '_list() => ', error );
      }
    );
  }

  sendDataToGameComponent(data: any) {
    this.dateCurrent = data.id;
    this.sharedService.updateData(data);
  }
}