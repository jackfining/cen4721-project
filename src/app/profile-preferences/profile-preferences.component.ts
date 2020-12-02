import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-preferences',
  templateUrl: './profile-preferences.component.html',
  styleUrls: ['./profile-preferences.component.scss']
})
export class ProfilePreferencesComponent implements OnInit {
  public name = 'TEST_USER';

  public systems = [
    { name: 'PlayStation 4', brand: 'Sony', own: true },
    { name: 'PlayStation Vita', brand: 'Sony', own: false },
    { name: 'PlayStation 3', brand: 'Sony', own: false },
    { name: 'PlayStation Portable', brand: 'Sony', own: false },
    { name: 'PlayStation 2', brand: 'Sony', own: true },
    { name: 'PlayStation', brand: 'Sony', own: false },
    { name: 'Xbox One', brand: 'Microsoft', own: false },
    { name: 'Xbox 360', brand: 'Microsoft', own: true },
    { name: 'Xbox', brand: 'Microsoft', own: false },
    { name: 'Switch', brand: 'Nintendo', own: true },
    { name: 'Wii U', brand: 'Nintendo', own: false },
    { name: '3DS', brand: 'Nintendo', own: false },
    { name: 'Wii', brand: 'Nintendo', own: false },
    { name: 'DS', brand: 'Nintendo', own: false },
    { name: 'Gamecube', brand: 'Nintendo', own: true },
    { name: 'Game Boy Advance', brand: 'Nintendo', own: false },
    { name: 'Nintendo 64', brand: 'Nintendo', own: false },
    { name: 'Super NES', brand: 'Nintendo', own: false },
    { name: 'Game Boy', brand: 'Nintendo', own: false },
    { name: 'Nintendo Entertainment System', brand: 'Nintendo', own: false },
    { name: 'PC' , own: true},
    { name: 'iOS' , brand: 'Mobile', own: false},
    { name: 'Android' , brand: 'Mobile', own: false},
  ];

  public genres = [
    { name: 'Action', favorite: true },
    { name: 'Adventure', favorite: true },
    { name: 'Fighting', favorite: false },
    { name: 'JRPG', favorite: true },
    { name: 'MMO', favorite: true },
    { name: 'MOBA', favorite: false },
    { name: 'Racing', favorite: false },
    { name: 'RPG', favorite: true },
    { name: 'RTS', favorite: false },
    { name: 'Shooter', favorite: false },
    { name: 'Simulation', favorite: true },
    { name: 'Survival', favorite: false },
    { name: 'Sports', favorite: true },
    { name: 'Tactical', favorite: false }

  ];

  public games = [
    { name: 'Among Us', favorite: true, img: 'https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1592601560' },
    { name: 'Animal Crossing', favorite: false },
    { name: 'Borderlands 3', favorite: true, img: 'https://teleread.files.wordpress.com/2019/04/borderlands-3-cover-art-1280x720.jpg' },
    { name: 'Destiny 2', favorite: false },
    { name: 'Doom (2016)', favorite: false, img: 'https://i.ebayimg.com/images/g/PNUAAOSw6btXSKGn/s-l300.jpg' },
    { name: 'God of War (2018)', favorite: false },
    { name: 'Halo 3', favorite: false },
    { name: 'Madden 25', favorite: false },
    { name: 'Mario Superstar Baseball', favorite: false },
    { name: 'Marvel\'s Spider-Man', favorite: false },
    { name: 'Minecraft', favorite: false },
    { name: 'Persona 5 Royal', favorite: true, img: 'https://cdn.mos.cms.futurecdn.net/8kFgCvZNdXfMxoK5dpxUmm-1200-80.jpg' },
    { name: 'Super Smash Bros. Ultimate', favorite: true, img: 'https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg?output-quality=80&output-format=webp' },
    { name: 'The Legend of Zelda: Breath of the Wild', favorite: false },
    { name: 'Tony Hawk\'s Pro Skater', favorite: false },
    { name: 'World of Warcraft', favorite: false }
  ];

  public editName = false;
  public editSystems = false;
  public editGenres = false;
  public editGames = false;

  constructor() { }

  ngOnInit(): void {
  }

  openEditName(){
    this.editName = !this.editName;
  } 

  openEditSystems(){
    this.editSystems = !this.editSystems;
  }

  openEditGenres(){
    this.editGenres = !this.editGenres;
  }

  openEditGames(){
    this.editGames = !this.editGames;
  }

  changeFavoriteGame(newName: string, oldName: string){
    this.games.forEach(game => {
      if(game.name === newName || game.name === oldName){
        game.favorite = !game.favorite;
      }
    });
  }

}
