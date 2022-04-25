import {Component, OnInit} from '@angular/core';
import {SupabaseService} from "../../services/supabase.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, delay, distinctUntilChanged, startWith, tap} from "rxjs";
import {IInfiniteScrollEvent} from "ngx-infinite-scroll";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  games?: any[];
  filters!: FormGroup;
  loading = true;

  constructor(
    private supabaseService: SupabaseService,
    private fb: FormBuilder
  ) {
  }

  async ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.filters = this.fb.group({
      page: 0,
      limit: 6,
      search: '',
      sortBy: ''
    });
    this.filters.valueChanges.pipe(
      startWith(this.filters.value),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(async filters => {
        this.loadGames(filters)
      })
    ).subscribe()

  }


  onScroll() {
    this.filters.patchValue({
      page: this.filters.value.page + 1
    }, {emitEvent: false});
    this.loadGames(this.filters.value, true)
  }

  private async loadGames(filters: any, append = false) {
    this.loading = true;
    if (!append){
      filters.page = 0;
    }
    const {data, statusText} = await this.supabaseService.getSteam(filters)
    this.games = append ? [...this.games, ...data] : data;
    this.loading = false;
  }
}
