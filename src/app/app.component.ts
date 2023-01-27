import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { offset } from '@popperjs/core';
import { delay, of, tap, timer } from 'rxjs';
import { IForm } from './interfaces/iform';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-storage';

  isSaved = false;

  constructor(
    private formBuilder: FormBuilder,
    private storageService: LocalStorageService
  ) {}

  formGroup = this.formBuilder.nonNullable.group({
    name: [''],
    claim: [''],
  });

  formDataInStorage?: IForm;

  send = () => {
    this.storageService.setItem('form', this.formGroup.value);
    this.formDataInStorage = this.storageService.getItem<IForm>('form')!;

    this.isSaved = true;

    timer(3000).subscribe(() => {
      this.isSaved = false;
      this.formGroup.reset();
      this.formDataInStorage = {} as IForm;
    });
  };
}
