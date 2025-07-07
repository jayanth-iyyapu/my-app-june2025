import { Component } from '@angular/core';
import { IdCardService } from '../id-card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-idcard',
  templateUrl: './create-idcard.component.html',
  styleUrls: ['./create-idcard.component.css'],
})
export class CreateIdcardComponent {
  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    dob: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl(),
  });

  id: number = 0;
  constructor(
    private _idcardService: IdCardService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.id = data.id;
    })

    _idcardService.getidcarddetails(this.id,).subscribe(
      (data: any) => {
        console.log(data);
         this.studentForm.patchValue(data);
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }

  submit() {
    if (this.id) {
      this._idcardService.updateidcard(this.id, this.studentForm.value).subscribe(
          (data: any) => {
            alert('record updated successfully');
            this._router.navigateByUrl('/dashboard/id-card');
          },
          (err: any) => {
            alert('Internal Server Error');
          }
        )
    } else {
      console.log(this.studentForm.value);
      this._idcardService.createidcard(this.studentForm.value).subscribe(
        (data: any) => {
          alert('Student record add Successfully');
          console.log(data);
          this._router.navigateByUrl('/dashboard/id-card');
        },
        (error: any) => {
          alert('Internal Server Error');
        }
      );
    }
  }
}
