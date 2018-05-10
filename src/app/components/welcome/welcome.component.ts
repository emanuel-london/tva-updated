import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../../services/index';
import { WelcomeContent } from '../../_models/index';
import { Form } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-welcome-component',
  templateUrl: 'welcome.component.html',
  providers: [WelcomeService]})
export class WelcomeComponent implements OnInit {
  welcome: WelcomeContent[];
  constructor (private welcomeService: WelcomeService) {}

  ngOnInit(): void {


  this.welcomeService.getWelcome().subscribe(welcome => this.welcome = welcome);

  }
}



