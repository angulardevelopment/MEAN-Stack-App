import { Component, OnInit } from '@angular/core';
import { BuisnessService } from '../buisness.service';
import Business from '../business';

@Component({
  selector: 'app-gstget',
  templateUrl: './gstget.component.html',
  styleUrls: ['./gstget.component.css']
})
export class GstgetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BuisnessService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        console.log(data);
        
        this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
