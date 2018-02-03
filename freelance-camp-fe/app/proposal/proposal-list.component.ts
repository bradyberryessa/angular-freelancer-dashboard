import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  providers: [ ProposalService ]
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private proposalService: ProposalService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
        );
  }
}

Proposal.create!(customer: "Google", portfolio_url: 'http://portfolio.jordanhudgens.com,' tools: 'Ruby on Rails, Angular 2, and Postgres' estimated_hours: 120, hourly_rate: 120, weeks_to_complete: 12, client_email: 'jordan@devcamp.com')
