import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchOutput = new EventEmitter<string>()
  public searchTerm: string = "";

  public onSearch(text: string): void {
    this.searchOutput.emit(text);
  }
  


}
