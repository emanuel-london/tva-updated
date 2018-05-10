import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, RequiredValidator , ReactiveFormsModule} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HtmlTagDefinition } from '@angular/compiler';
import { Http } from '@angular/http';

import { LevelsService } from '../../services/index';
import { SliderComponent, UserNavComponent,  WelcomeComponent } from '../../components/index';


@Component({
  moduleId: module.id,
  selector: 'app-level',
  templateUrl: 'level.component.html',
  styleUrls: ['level.component.css'],
  providers: [LevelsService]
})

export class LevelComponent implements OnInit {

  levels: Levels[];
  levelsForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  name: string = '';

  constructor(private levelsService: LevelsService,
     private fb: FormBuilder,
     private router: Router) {

      this.levelsForm = fb.group({
        'name': new FormControl(['', Validators.required]),
        'validate' : new FormControl([!0]),

      });
       this.levelsService.getLevels().subscribe(levels => {
        this.levels = levels;
           });
    }
  ngOnInit() {
    }

  onSubmit() {

    console.log(this.levelsForm.value);
     this.router.navigateByUrl('/choose');
}

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}

/*
export class LevelComponent implements OnInit {

  levels: Levels[];
  levelsForm: FormGroup;

  constructor(private levelsService: LevelsService,
     private fb: FormBuilder,
     private router: Router) {}
  ngOnInit() {

    this.levelsList();
  }



levelsList(): FormGroup {
  this.levelsService.getLevels().subscribe(levels => {
this.levels = levels;
   });
  this.levelsForm = this.fb.group ({
    name: new FormControl()
   });
return this.fb.group({
  name: ['']
});
}




  onSubmit() {

    console.log('Form Submitted!');
    this.router.navigateByUrl('/choose');
}

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
*/
