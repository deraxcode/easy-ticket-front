import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../registry.service';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})

export class AssistantComponent implements OnInit {

  userForm: FormGroup;

  constructor(private registryService: RegistryService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    })

  }

  saveAssistant() {


    if(this.userForm.valid) {

      console.log(this.userForm.value);
      this.registryService.save(this.userForm.value).subscribe(
        data => console.log(data)
      )
    }
    
  }



}
