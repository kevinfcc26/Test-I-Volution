import { Component, OnInit } from '@angular/core';

import { MunicipalitiesService } from '../../services/municipalities.service';
import { DepartmentResponse } from '../../interfaces/department-response';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  departments: DepartmentResponse [];

  forma: FormGroup;
  flag = false;
  municipalities


  constructor( private MunService: MunicipalitiesService,
               private fb: FormBuilder ) {
      this.forma = this.fb.group({
        department : ['',,],
      });
      this.forma.get('department').valueChanges.subscribe( (id) => {
        this.flag = true;
        this.getMunicipality(id);
      });
   }

  ngOnInit(): void {
    this.MunService.getDepartment().subscribe( (data:DepartmentResponse []) => { 
      this.departments = data
     });
  }
  getMunicipality(id){
    this.MunService.getMunicipality(id).subscribe( data => {
      console.log(data);
      this.municipalities = data
    })
  }

}
