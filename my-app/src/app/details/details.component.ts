import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
     <article >
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h1 class="section-heading">Apply to live here</h1>
        <form [formGroup]="applyForm" (submit)="submitApplyForm()">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" formControlName="firstName" placeholder="Input first name">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" formControlName="lastName" placeholder="Input last name">
          
          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email" placeholder="Input email">
          <button type="submit" class="primary">Apply</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService: HousingService = inject (HousingService);
  housingLocation : HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
    console.log(this.housingLocation);
  }
  submitApplication(){
     this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}