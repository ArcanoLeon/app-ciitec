import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }
  
  goToProfile() {
    this.router.navigate(['profile'])
  }

  goToBlog() {
    this.router.navigate(['blog'])
  }

  goToLogs() {
    this.router.navigate(['logpage'])
  }

  goToDevice() {
    this.router.navigate(['bt-test'])
  }

  goToResults() {
    this.router.navigate(['results'])
  }

  goToQuestions() {
    this.router.navigate(['questions'])
  }
}
