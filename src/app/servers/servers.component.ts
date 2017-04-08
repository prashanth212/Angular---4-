import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server><app-server></app-server>000`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
