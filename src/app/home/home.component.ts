import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from '../repo';
import { GitHubService } from '../git-hub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repos: Repo[];

  constructor(
   @Inject(GitHubService) private git, 
  ) { }

  ngOnInit() {
    this.getRepository();
  }

  getRepository(): void{
    this.git.getRepos().subscribe(
      (val)=>{ this.repos = val}
    )
  }

} 