import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from './repo';

@Injectable({
  providedIn:'root'
})
export class GitHubService {

  repo: Repo[];
  baseUrl: string = "https://api.github.com/";

  constructor(
    private http: HttpClient
  ) { }
  
  getRepos(): Observable<any>{
    let params = new HttpParams()
    params = params.set('sort', 'description');
    return this.http.get<Repo[]>( `${this.baseUrl}users/thamarais16/repos`, {params, withCredentials: true, } );
  }

}