import { Component, OnInit } from '@angular/core';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript("./src/app/tool/script.js"); 
  }

  loadScript(url){
    var elements = document.getElementsByTagName('input');

      for(let i=0; i< elements.length-1; i++) {
        elements[i].addEventListener('click', function() {
          console.log("Et de un !");
          //console.log(elements[i].checked)
            var j= i-1;
            console.log(elements[j].checked);
            elements[j].checked === true;
            console.log(elements[j].checked);
          }
        )  
    }
  }
}

//       if(elements[3].checked === true) {
//         elements[i].addEventListener('click', function(){
//         for(let i=0; i<3; i++) {
//           elements[i].checked === true;
//         }
//       }
//     } 

//     // for(let i = 0 ; i < elements.length; i ++){
//     //     elements[i].addEventListener('click', function() {
//     //     console.log("Et de un !");
//    // })
//  // }
//  }
// }
/* lien utile/
https://openclassrooms.com/forum/sujet/cocher-une-checkbox-en-javascript-34265

