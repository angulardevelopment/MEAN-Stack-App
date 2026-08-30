import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuisnessService } from '../buisness.service';

@Component({
    selector: 'app-gst-add',
    templateUrl: './gst-add.component.html',
    styleUrls: ['./gst-add.component.css'],
    imports: [FormsModule, ReactiveFormsModule]
})
export class GstAddComponent implements OnInit {

 
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BuisnessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
    });
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }

  ngOnInit() {
    
  }

}
