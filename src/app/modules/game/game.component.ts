import { Component, Input } from '@angular/core';
import { ProgramacionService } from 'src/app/core/services/programacion.service';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  
  games: Game[] = [];

  constructor(private programacionService: ProgramacionService,private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => {
      
      if(data){
        console.info( "data => ", data );
        this._list(data);
      }
    });
  }

  _list(date:string){
    this.programacionService.getAll(date).subscribe(
      response => {
        this.games = response;
      },
      error => {
        console.warn( '_list() => ', error );
      }
    );
  }
}