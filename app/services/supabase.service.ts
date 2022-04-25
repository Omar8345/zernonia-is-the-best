import {Injectable} from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseClient!: SupabaseClient;

  constructor() {
    this.initializeSupabase();
  }

  private initializeSupabase() {
    this.supabaseClient = createClient("https://gqkuommdmfzmwkzdewma.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJmZjE3ZDE0NmQ4ZTU1OTZjNzMyNzQ1YTEiLCJpYXQiOjE2NTA3NzQ3NjZ9.sdlJx8VSW5zEXGSZeF0KZAUTnua1btj2wwnxDv_kRs8"
        }
      });
  }

  getSteam(params = {page: 0, limit: 6, search: '', sortBy: ''}) {
    const start = params.page * params.limit;
    const end = start + params.limit - 1;
    const query = this.supabaseClient
      .from<any>('steam')
      .select('*')
      .range(start, end)
      .limit(params.limit);


    if (params.sortBy) {
      query.order(params.sortBy)
    }
    if (params.search) {
      query.ilike('title', `%${params.search}%`)
    }
    return query;


  }
}
