import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
  }

  onClick(){
      this.layoutService.toggleSubject.next(null);
  }
}
