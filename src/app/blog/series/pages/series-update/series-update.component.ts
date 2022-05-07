import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { SeriesService } from 'src/app/blog/services/series.service';
import { ControlOptions } from 'src/app/shared/components/combobox/combobox.component';

@Component({
  selector: 'app-series-update',
  templateUrl: './series-update.component.html',
  styleUrls: ['./series-update.component.css']
})
export class SeriesUpdateComponent implements OnInit {

  statusOptions: ControlOptions[] = [
    {
      display: 'Show',
      value: 1
    },
    {
      display: 'Hide',
      value: 0
    }
  ]

  formSeries = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(2000)]),
    status: new FormControl(1, [Validators.required])
  });

  constructor(
    private seriesService: SeriesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  createSeries(value: any): Observable<any> {
    return this.seriesService.create(value);
  }

  onSubmit(): void {
    const {valid, value} = this.formSeries;
    if (valid) {
      this.createSeries(value).pipe(take(1))
        .subscribe(() => this.router.navigate(['../'], {relativeTo: this.activatedRoute}));
    } else {
      this.formSeries.markAllAsTouched();
    }
  }

}
