import { Component, OnInit, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() changePage = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(page:string){

    this.changePage.emit(page)


  }

}
