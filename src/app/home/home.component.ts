import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from './repo';
import { GitHubService } from './git-hub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repo: Repo[];

  constructor(
   @Inject(GitHubService) private git,
  ) { }

  ngOnInit() {
    this.getRepository();
  }

  private getRepository(): void{
    this.git.getRepos(
      (val)=>{ this.repo = val}
    )
  }

} 