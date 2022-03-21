import { Component, OnInit } from '@angular/core';
import { ScholarserVice } from '../Services/scholar.services';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor( private scholarService: ScholarserVice) { }

  ngOnInit(): void {
  }

  AddScholar(name :string, email:string,year:string,role:string, image:string){
    this.scholarService.addScholar(name,email,year,role, image)
    }

    onSetTo(name:string){
      
    }

}
