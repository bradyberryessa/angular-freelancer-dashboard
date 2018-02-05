import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  // TemplateUrl has only one arguement while StyleUrls has multiple. Therefore it has to be an array.
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: 'Freelance Bootcamp Dashboard'
}