import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {

  constructor() { }

  name = 'Juan Pablo';
  count = 0;
  disable = true ;
  imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';

  showMe(event) {
    console.log(event)
    alert(event.target.value);
  }

  showImage(value) {
    switch(value) {
      case 'dog':
        this.imgSource = 'https://estag.fimagenes.com/img/4/3/2/y/g/32yg_900.jpg';
        break;
      case 'cat':
        this.imgSource = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63nusCwRltsSRR4taZcrUGPAopdRQHs5L0TL4FWmO03pyKSNC';
        break;
    }
  }
}