import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap  } from 'rxjs/operators';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }
  //typical service-inservice scenario

  //log a heroservice merssage with the message service
  private log(message: String){
    this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'api/heroes'; //URL to web api

  /**POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
     tap((newHero: Hero)=> this.log(`added hero w/id=${newHero.id}`)),
     catchError(this.handleError<Hero>('addHero))'))
    );
  }

  //get heroes from the server
  getHeroes(): Observable<Hero[]>{
    // const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes');
   console.log('HERO');
    
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes',[]))
      );
  }//method to return heroes

  //get hero by id. will 404 if id not found
  getHero(id: number): Observable<Hero> {
    //For now assume that a hero with the specified 'id' always exists
    //error handling will be added in the next step of the tutorial

    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService : fetched hero id=${id}`);
    // return of (hero);

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  //put: update the hero on the server
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /**GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      //if not search term, return empty hero array
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) : 
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes',[]))
    );
  }

  /**
   * Handle Http opetation that failed
   * Let the app continue
   * @/param operation - name of the operation that failed
   * @/param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure

      console.error(error);//log to console instead

      //TODO: beter job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      //let the app keep running by returning an empty result
      return of(result as T);
    };
  }
  httpOptions = {
    headers: new HttpHeaders({ 'contect-Type': "application/json'})"})
  };
}
