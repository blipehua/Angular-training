import { Component, Input } from '@angular/core';
import { GifsService } from '../../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  @Input()
  public historyTags: string[] = [];

}
