import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-events-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createEventFormStep1: FormGroup;
  createEventFormStep2: FormGroup;
  createEventFormStep3: FormGroup;
  regions : any;
  communes : any;

  constructor(private eventsService : EventsService , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEventFormStep1 = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['',Validators.required],
      address: ['', Validators.email],
      addressNumber: ['', Validators.required],
      addressDescription: ['', Validators.required],
      region: ['', Validators.required],
      commune: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.eventsService.findAllRegions().subscribe(response => {
      this.regions = response.data;
    });

    this.communes = [];

  }

  toStep2(){

  }



}
