import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getAllGames(){
    return this.http.get(env.apiUrl+'gamesext',{
    }).pipe(map(data => {
            return data;
        }));
  }

}
