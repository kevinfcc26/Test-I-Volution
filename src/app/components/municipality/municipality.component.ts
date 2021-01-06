import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {

  @Input() municipalities
  constructor() { }

  ngOnInit(): void {
  }

}
