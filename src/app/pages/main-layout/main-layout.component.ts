import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewAll(){
    this.router.navigateByUrl('/');
  }

  mostHomeRuns(){
    this.router.navigateByUrl('/mosthomeruns');
  }
  
  lte5Walks(){
    this.router.navigateByUrl('/lte5walks');
  }

  avgBatSpeedDes(){
    this.router.navigateByUrl('/avgbatspeeddes');
  }

  lowestOuts2(){
    this.router.navigateByUrl('/lowestouts2');
  }

  mostStrikes(){
    this.router.navigateByUrl('/moststrikes');
  }

}
