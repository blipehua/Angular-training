import { JsonPipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'C7dHMYCJvX3qvgkdn3bf5UtMegQdv8A1';
  private urlService: string = 'https://api.giphy.com/v1/gifs';

  public gifList: Gif[] = [];

  constructor(private httpClient: HttpClient) {
    
  }
  
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this.tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);
  }

  searchTag(tag: string) {
    if (tag.length === 0) {
      return;
    }
    
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.httpClient.get<SearchResponse>(`${this.urlService}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log({gifs: this.gifList});
        
      })
  }

  loadTagsFromLocal() {
    this.loadLocalStorage();
    const historyList = this._tagsHistory;
    return historyList;
  }
}
