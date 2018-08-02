import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { FormBuilder, Validators, FormGroup, ValidationErrors } from '@angular/forms';
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
    this.communes = [];
    this.createEventFormStep1 = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['',Validators.required],
      address: ['', Validators.required],
      addressNumber: ['', Validators.required],
      addressDescription: ['', Validators.required],
      region: ['', Validators.required],
      commune: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.createEventFormStep1.get('region').valueChanges.subscribe(val => {
      this.communes = [];
      if(val){
        this.eventsService.findCommunesByRegionId(val).subscribe(data => {
          this.communes = data;
        });
      }
    });

    this.eventsService.findAllRegions().subscribe(data => {
      this.regions = data;
    });


  }

  toStep2(){
    console.log('toStep2');  
  }



}
