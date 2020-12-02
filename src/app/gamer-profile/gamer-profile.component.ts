import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer-profile',
  templateUrl: './gamer-profile.component.html',
  styleUrls: ['./gamer-profile.component.scss']
})
export class GamerProfileComponent implements OnInit {

  public systems = [
    { name: 'Android' , brand: 'Mobile', own: false},
    { name: 'Nintendo DS', brand: 'Nintendo', own: false },
    { name: 'Nintendo Game Boy Advance', brand: 'Nintendo', own: false },
    { name: 'PC' , own: true},
    { name: 'PlayStation 2', brand: 'Sony', own: true },
    { name: 'PlayStation 3', brand: 'Sony', own: false },
    { name: 'PlayStation Portable', brand: 'Sony', own: false },
    { name: 'Super Nintendo Entertainment System', brand: 'Nintendo', own: false },
    { name: 'Xbox One', brand: 'Microsoft', own: false },
    { name: 'Xbox 360', brand: 'Microsoft', own: true }
  ];

  public genres = [
    { name: 'Action', favorite: true },
    { name: 'Fighting', favorite: false },
    { name: 'MMO', favorite: false },
    { name: 'Racing', favorite: false },
    { name: 'RPG', favorite: true },
    { name: 'RTS', favorite: false },
    { name: 'Shooter', favorite: false },
    { name: 'Survival', favorite: false },
    { name: 'Tactical', favorite: false }
  ];

  public games = [
    { name: 'Doom (2016)', favorite: false, img: 'https://i.ebayimg.com/images/g/PNUAAOSw6btXSKGn/s-l300.jpg' },
    { name: 'Halo 3', favorite: false, img: './../assets/halo3.jpg' },
    { name: 'Minecraft', favorite: false, img: 'https://cdn.vox-cdn.com/thumbor/ipajjnzaEyDK1badzdbQ32MSxVI=/0x0:767x431/1200x800/filters:focal(323x155:445x277)/cdn.vox-cdn.com/uploads/chorus_image/image/63226878/0fe20042_0bb8_4781_82f4_7130f928b021.0.jpg' },
    { name: 'World of Warcraft', favorite: false, img: 'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
