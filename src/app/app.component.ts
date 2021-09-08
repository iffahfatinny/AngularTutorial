import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Heroes List';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  // isDarkTheme = false;

  constructor(private overlay: OverlayContainer){}


  ngOnInit(): void {
    // this.toggleControl.valueChanges.subscribe((darkTheme) => {
    //   const darkClassName = 'darkTheme';
    //   this.className = darkTheme ? darkClassName : '';
    // });


    this.toggleControl.valueChanges.subscribe((darkTheme) => {
      const darkClassName = 'darkTheme';
      this.className = darkTheme ? darkClassName : '';
      if (darkTheme) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
}


  // toggleTheme(){
  //   this.isDarkTheme = ! this.isDarkTheme;
  //   this.toggleControl.valueChanges.subscribe(val => {
  //     this.className = val ? 'darkMode' : '';
  //   })
  // }
}
