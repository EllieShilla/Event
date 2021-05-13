import { Component, OnInit } from '@angular/core';
import {Car} from '../car';

@Component({
  selector: 'app-click-item',
  template: `<div *ngFor="let item of carsArr"><button (click)="onSelect(item)">{{item.title}}</button>`+
  `</div><p>{{inform.about}}</p><img src="{{inform.image}}" *ngIf="inform.title.length>2"/>`,
  styleUrls: ['./click-item.component.css']
})
export class ClickItemComponent implements OnInit {


  carsArr:Car[]=[
    {title:"Машина",about:"На сегодняшний день самой большой машиной в мире"+
    " считается 810-тонный карьерный самосвал белорусского происхождения. Выпускается с 2013 года."+
    " Его заявленная грузоподъёмность составляет 450 тонн – представить такой вес довольно сложно.",image:"/assets/image/scale_1200.jfif"},
    {title:"Самолет",about:"Ан-225 «Мрия» – самый большой и по размерам,"+
    " и по грузоподъемности самолет в мире за всю историю авиации.",image:"/assets/image/an-225-mrio.jpg"},
    {title:"Корабль",about:"Нынешний чемпион, лайнер Symphony of the Seas,"+
    " принадлежащий Royal Caribbean в данный момент базируется на частном острове "+
    "компании на Багамских островах. Длина Symphony of the Seas составляет 361 метр,"+
    " ширина – 66 метров, а высота – 72,5 метра. На лайнере 18 палуб, вмещающих 6 680 "+
    "пассажиров и 2200 членов экипажа.",image:"/assets/image/2.jpg"}
  ];
  inform:Car={title:"",about:"",image:""};

  onSelect(item: Car): void {
    this.inform.title = item.title;
    this.inform.about = item.about;
    this.inform.image = item.image;
    }

    
  constructor() { }

  ngOnInit(): void {
    
  }

}
