import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-recommendations',
  templateUrl: './home-recommendations.component.html',
  styleUrls: ['./home-recommendations.component.scss']
})
export class HomeRecommendationsComponent implements OnInit {

  public gamers = [
    { name: 'SmashLad64', criteria: 'Friends with Gamer_G0d', img: 'https://i.redd.it/e4b29b2a9wq51.jpg' },
    { name: 'Gamer_Girl3', criteria: 'Friends with Gamer_G0d', img: 'https://avatarfiles.alphacoders.com/862/86200.jpg' },
    { name: 'Terry', criteria: 'Friends with Gamer_G0d', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1415-CUSA03724_00-AV00000000000106/1601172491000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'xX_bob_Xx', criteria: 'Also plays Borderlands 3', img: 'https://avatarfiles.alphacoders.com/179/179932.jpg' },
    { name: 'QueenMaeve', criteria: 'Also plays Among Us', img: 'https://avatarfiles.alphacoders.com/124/124715.jpg' },
    { name: 'Jerry', criteria: 'Also enjoys RPGs', img: 'https://avatarfiles.alphacoders.com/189/189926.png' },
    { name: 'TheLegend27', criteria: 'Also enjoys Adventure', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SK/en/99/EP0001-CUSA02376_00-AV00000000000010/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' }
  ];

  public sessions = [
    { name: 'Among Us', action: 'Playing', friend: ' - Gamer_G0d is in', img: 'https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1592601560' },
    { name: 'Borderlands 3', action: 'Playing', friend: '', img: 'https://teleread.files.wordpress.com/2019/04/borderlands-3-cover-art-1280x720.jpg' },
    { name: 'Super Smash Bros. Ultimate', action: 'Playing', friend: '', img: 'https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg?output-quality=80&output-format=webp' },
    // { name: 'Super Smash Bros. Ultimate', action: 'Playing', friend: '', img: 'https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg?output-quality=80&output-format=webp' },
    // { name: 'Among Us', action: 'Playing', friend: '', img: 'https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg?output-quality=80&output-format=webp' },
    { name: 'Persona 5 Royal', action: 'Discussing', friend: '', img: 'https://cdn.mos.cms.futurecdn.net/8kFgCvZNdXfMxoK5dpxUmm-1200-80.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
