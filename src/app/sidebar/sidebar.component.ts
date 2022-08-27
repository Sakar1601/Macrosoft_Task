import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LayoutService } from '../service/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild("sidenav")
  sidenav!: MatSidenav;
  toggleSub: Subscription = new Subscription();

  constructor(private observer: BreakpointObserver, private layoutService : LayoutService) { }
  ngOnInit() {
   this.toggleSub = this.layoutService.toggleSubject.subscribe(()=>{
      this.sidenav.toggle();
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }

  ngOnDestroy(){
    this.toggleSub.unsubscribe();
  }

}
