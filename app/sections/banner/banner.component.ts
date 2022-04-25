import {Component, OnInit} from '@angular/core';
import {Plugin, FlickingOptions, NgxFlickingComponent, MoveEndEvent, ChangedEvent} from '@egjs/ngx-flicking';
import {Fade, AutoPlay, Pagination, Perspective} from "@egjs/flicking-plugins";
import {SupabaseService} from "../../services/supabase.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  plugins: Plugin[] = [new Fade(),
    new AutoPlay({
      duration: 5000,
      direction: "NEXT",
      stopOnHover: true
    }),
    new Pagination({
      type: 'bullet'
    }),
    new Perspective({scale: 1, rotate: 0})
  ];
  options: any = {
    circular: false,
    duration: 500,
    defaultIndex: 0,
    align: "center",
    noPanelStyleOverride: true
  };
  items?: any[] | null;

  constructor(
    private supabaseService: SupabaseService
  ) {
  }

  async ngOnInit() {
    const { data } = await this.supabaseService.getSteam();
    this.items = data;
  }

}
