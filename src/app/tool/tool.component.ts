import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})

 
export class ToolComponent 

implements OnInit {  

  constructor() { }

  ngOnInit() {
    this.loadScript("./src/app/tool/script.js"); 

  }

  loadScript(url){
    // var costs : HTMLInputElement = document.getElementsByName('costop')  as HTMLInputElement ;
    
    var costs = <any> document.getElementsByName('costop');
    var iccs  = <any> document.getElementsByName('icc') ;

    // var costs  = document.getElementsByName('costop') ;
    // var iccsLength   = document.getElementsByName('icc') ;

      for(let i=0; i< costs.length; i++) {
        costs[i].addEventListener('click', function() {
          
          
          if (costs[i].checked === true) {          
            for (let y=0; y< iccs.length; y++) {
              iccs[y].checked = false;
            }
             
            for(let x = i; x >= 0; x--){
              costs[x].checked = true;
              //console.log(costs[x].checked)
              iccs[i].checked = true; 

             }
            } else {
          for(let x = i+1; x > 1 && x < costs.length ; x++){
            for (let y=0; y< iccs.length; y++) {
              iccs[y].checked = false;
            }

            costs[x].checked = false;
            costs[i].checked = true;
            iccs[i].checked = true;
            //console.log(costs[x].checked)
          }
        };
       }   
      ) 
    }
/* icc part */
    for(let i=0; i< iccs.length; i++) {
      iccs[i].addEventListener('click', function() {
        
        
        if (iccs[i].checked === true) {

          for (let y=0; y< costs.length; y++) {
            costs[y].checked = false;
            }
          for(let x = i; x >= 0; x--){
            costs[x].checked = true; 
           }
          for (let z=0; z < iccs.length; z++) {
            iccs[z].checked = false;
            iccs[i].checked = true;
          }
          
      };
     }   
    ) 
  }

/* icc part */

  }
}

