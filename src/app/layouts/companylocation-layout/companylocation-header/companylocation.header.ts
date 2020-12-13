import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'companylocation-header',
  templateUrl: './companylocation.header.html',
  styleUrls: []
})
export class CompanyLocationHeaderComponent implements OnInit {
  constructor(private router: Router) {
  }

  curLang:string;
  curLangTitle:string;
 
  ngOnInit()
   {
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
