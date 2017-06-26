import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material Design Demo';
  toggleButtonName =  'SHOW NAVBAR';

  toggleButtonClose(){
    this.toggleButtonName =  'HIDE NAVBAR';
  }

    toggleButtonOpen(){
    this.toggleButtonName =  'SHOW NAVBAR';
  }
}
