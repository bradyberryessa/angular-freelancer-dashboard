import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list-component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, "ABC Company", "http://bradyberryessa.com", "Angular 2", 150, 120, 15, "brady.berryessa@gmail.com")
  proposalTwo: Proposal = new Proposal(99, "XYZ Company", "http://bradyberryessa.com", "Angular 2", 150, 120, 15, "brady.berryessa@gmail.com")
  proposalThree: Proposal = new Proposal(300, "Something Company", "http://bradyberryessa.com", "Angular 2", 150, 120, 15, "brady.berryessa@gmail.com")

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}