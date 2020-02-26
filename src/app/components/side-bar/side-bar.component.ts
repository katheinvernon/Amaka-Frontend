import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sideBar/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  status = false

  constructor(private sideBarSV: SidebarService) {

    this.sideBarSV.status.subscribe(e => {
      this.status=e;
    })
   }

  ngOnInit() {
  }

  toggleSideBar(){
    this.sideBarSV.toggleStatus();
  }

}
