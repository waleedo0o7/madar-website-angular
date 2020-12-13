import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maindashboardheader-layout',
  templateUrl: './maindashboard-layout-header.compnent.html'
})
export class MainDashboardHeaderLayoutComponent implements OnInit 
{
  curLang:string;
  curLangTitle:string;
  constructor() { }
  ngOnInit() {
    this.curLang=localStorage.getItem("lang")||"en";
    if(this.curLang=="ar")
    {
      this.curLangTitle="English";
    }
    else
    this.curLangTitle="العربية";

    
  }
swichLang()
{
  if(this.curLang=="ar")
  {
    localStorage.setItem("lang","en")
  }
  else
  localStorage.setItem("lang","ar")

  window.location.reload();
}
}
