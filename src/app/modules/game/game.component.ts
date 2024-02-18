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
  loadingGame:boolean = true;

  constructor(private programacionService: ProgramacionService,private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.currentData.subscribe(data => {
      
      if(data){
        this.games = [];
        this.loadingGame = true;
        this._list(data.fecha);
      }
    });
  }

  _list(date:string){
    this.programacionService.getAll(date).subscribe(
      response => {
        this.games = response;
        this.loadingGame = false;
      },
      error => {
        console.warn( '_list() => ', error );
      }
    );
  }
}