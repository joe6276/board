import { Component, OnInit } from '@angular/core';
import { Scholar } from '../Interfaces/scholar.interface';
import { ScholarserVice } from '../Services/scholar.services';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  scholars:Scholar[]=[]
  constructor( private  schoolService:ScholarserVice) { }

  ngOnInit(): void {
    this.scholars=this.schoolService.getScholar()
  }

}
