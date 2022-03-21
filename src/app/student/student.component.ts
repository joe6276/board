import { Component, OnInit } from '@angular/core';
import { Scholar } from '../Interfaces/scholar.interface';
import { ScholarserVice } from '../Services/scholar.services';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 scholars:Scholar[]=[]

  constructor(private scholarService: ScholarserVice) { }

  ngOnInit(): void {
    this.scholars=this.scholarService.getScholar()
  }

  onSetTo(i: number ,name:string){

    this.scholarService.suspendScholar(i,name)
      
  }

}
