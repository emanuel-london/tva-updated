import { bufferToggle } from 'rxjs/operator/bufferToggle';
import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../../services/index';
import { SliderComponent, UserNavComponent, WelcomeComponent } from '../../components/index';
import { FormGroup, FormControl, Validators,
FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-river-trek-start',
  templateUrl: 'river-trek-start.component.html',
  styleUrls: ['river-trek-start.component.css'],
  providers: [KnowledgeService]
})
export class RiverTrekStartComponent implements OnInit {
  riverTrekForm: FormGroup;
  user = {
    skills: [
      { name: '',  selected: true, id: 1 },
      { name: '',  selected: false, id: 2 },
    ]
  };
  knows: Levels[];
  constructor(private knowledgeService: KnowledgeService,
    private fb: FormBuilder, private router: Router) {
      this.knowledgeService.getKnows().subscribe(knows => {
        this.knows = knows;
        console.log(knows);
      });

       this.riverTrekForm = this.fb.group({
        skills: this.buildSkills()
      });

      this.riverTrekForm = new FormGroup({
        skills: new FormArray([
           new FormControl(true),
           new FormControl(false),
        ])
     });
}


 ngOnInit() {
  }
  get skills() {
    return this.riverTrekForm.get('skills');
  }

  buildSkills() {
    const arr = this.user.skills.map(skill => {
      return this.fb.control(skill.selected);
    });
    return this.fb.array(arr);
  }

  onSubmit() {
console.log(this.riverTrekForm.value);
this.router.navigateByUrl('/map');
}

}
interface Levels {
  name: DrupalArray[];
  tid: DrupalArray[];
}
interface DrupalArray {
  value: string;
}
