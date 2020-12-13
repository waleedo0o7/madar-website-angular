import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'madar';

  hideLoadingScreen() {
    var loadingScreenDiv = document.getElementById('loading-screen');
    var loadingScreenDivLeft = document.getElementById('loading-left');
    var loadingScreenDivRight = document.getElementById('loading-right');
    var loadingScreenDivldsRoller = document.getElementById('lds-roller');

    setTimeout( function(){
      loadingScreenDivldsRoller.remove();
      loadingScreenDivLeft.style.width = "0";
      loadingScreenDivRight.style.width = "0";
    } , 1000);

    setTimeout( function(){
      loadingScreenDiv.remove();
    } , 1800)
  }
  
  ngOnInit(): void {
    if(!localStorage.getItem("lang"))
     {
      localStorage.setItem("lang","en")
     }
     this.hideLoadingScreen()
    }

}
