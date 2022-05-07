import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { SeriesService } from 'src/app/blog/services/series.service';
import { ColumnDefintion } from 'src/app/shared/components/table-data/table-data.component';
import { initPage, Page } from 'src/app/shared/model/page';
import { Series } from 'src/app/shared/model/series';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  seriesPage: Page<Series> = initPage(0, 10);
  loadingTask = 0;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getPageSeries();
  }

  getPageSeries(): void {
    this.setLoading(true);
    this.seriesService.getPage().pipe(
      take(1), finalize(() => this.setLoading(false)))
      .subscribe(res => this.seriesPage = res)
  }

  setLoading(loading: boolean): void {
    if (loading) {
      this.loadingTask = this.loadingTask + 1;
    } else {
      this.loadingTask = this.loadingTask - 1;
    }
  }

}
