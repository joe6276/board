import { Component, OnInit } from '@angular/core';
import { Scholar } from '../Interfaces/scholar.interface';
import { ScholarserVice } from '../Services/scholar.services';

@Component({
  selector: 'app-disciplinary',
  templateUrl: './disciplinary.component.html',
  styleUrls: ['./disciplinary.component.css']
})
export class DisciplinaryComponent implements OnInit {
scholars:Scholar[]=[]
  constructor(private schoolservice:ScholarserVice) { }

  ngOnInit(): void {
    this.scholars= this.schoolservice.susi
  }

}
