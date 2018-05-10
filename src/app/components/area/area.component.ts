import { Component, OnInit } from '@angular/core';
import { AreasService } from '../../services/index';
import { SliderComponent, UserNavComponent, WelcomeComponent  } from '../../components/index';
import { FormGroup, FormBuilder, FormControl, Form, FormArray, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-area',
  templateUrl: 'area.component.html',
  styleUrls: ['area.component.css'],
  providers: [AreasService]
})

export class AreaComponent implements OnInit {
  areas: Areas;
  areaForm: FormGroup;
  constructor(private areasService: AreasService , private fb: FormBuilder, private router: Router) {
    this.areasService.getAreas().subscribe(areas => {
      this.areas = areas;
    });
    this.areaForm = fb.group({
      'area': new FormControl(['', Validators.required]),
      'validate' : new FormControl([!1]),

    });
 }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.areaForm.value);
    this.router.navigateByUrl('/contents');
  }
}

interface Areas {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
