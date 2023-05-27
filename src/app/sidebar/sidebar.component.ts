import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isCasinoBlinking: boolean = true;
  showOthers: boolean = false;
  showAllSports: boolean = false;

  toggleOthers() {
    this.showOthers = !this.showOthers;
  }

  toggleAllSports() {
    this.showAllSports = !this.showAllSports;
  }
}
