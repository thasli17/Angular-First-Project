import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department = [
    {
      id:1,
      image:'../../../assets/images/banner2.png',
      title:'This is new world',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente dolorem nemo maiores asperiores quibusdamexercitationem porro obcaecati atque veniam!'
    },
    {
      id:2,
      image:'../../../assets/images/Banner3.jpg',
      title:'This is new world',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente dolorem nemo maiores asperiores quibusdamexercitationem porro obcaecati atque veniam!'
    },
    {
      id:1,
      image:'../../../assets/images/banner2.png',
      title:'This is new world',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente dolorem nemo maiores asperiores quibusdamexercitationem porro obcaecati atque veniam!'
    },
    {
      id:2,
      image:'../../../assets/images/Banner3.jpg',
      title:'This is new world',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sapiente dolorem nemo maiores asperiores quibusdamexercitationem porro obcaecati atque veniam!'
    },
    
  ]

  }
  


