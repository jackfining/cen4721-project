import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamer-search',
  templateUrl: './gamer-search.component.html',
  styleUrls: ['./gamer-search.component.scss']
})
export class GamerSearchComponent implements OnInit {

  public gamers = [
    { name: 'SmashLad64', game: 'Super Smash Bros. Ultimate', img: 'https://i.redd.it/e4b29b2a9wq51.jpg' },
    { name: 'Gamer_Girl3', game: 'Among Us', img: 'https://avatarfiles.alphacoders.com/862/86200.jpg' },
    { name: 'Terry', game: 'Doom (2016)', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1415-CUSA03724_00-AV00000000000106/1601172491000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'QueenMaeve', game: 'Among Us', img: 'https://avatarfiles.alphacoders.com/124/124715.jpg' },
    { name: 'Jerry', game: 'Persona 5 Royal', img: 'https://avatarfiles.alphacoders.com/189/189926.png' },
    { name: 'TheLegend27', game: 'Persona 5 Royal', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/SK/en/99/EP0001-CUSA02376_00-AV00000000000010/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720' },
    { name: 'dad of two', game: 'Among Us', img: 'https://i.redd.it/1jgfivrixcp51.png' },
    { name: 'Jenni <3', game: 'Among Us', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1675-CUSA11816_00-AV00000000000023/1601168092000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'Susbucket', game: 'Among Us', img: 'https://www.amongusavatarmaker.com/Assets/BOTONES/PLAYER.png' },
    { name: 'JimmyJohn', game: 'Among Us', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0937-CUSA05590_00-AV00000000000004/1585695081000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'xX_D3mon_Xx', game: 'Doom (2016)', img: 'https://avatarfiles.alphacoders.com/736/thumb-73676.jpg' },
    { name: 'Joe6141989', game: 'Doom (2016)', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0001-BLUS30991_00-UAASSASSIN000005/1593072885000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'Shadow King', game: 'Doom (2016)', img: 'https://avatarfiles.alphacoders.com/166/thumb-166294.jpg' },
    { name: 'sledge', game: 'Doom (2016)', img: 'https://avatarfiles.alphacoders.com/863/thumb-86393.jpg' },
    { name: 'el_Tigre', game: 'Doom (2016)', img: 'https://i.pinimg.com/originals/dc/00/65/dc00653cb368faf8bc14593b665ccb44.jpg' },
    { name: 'masquerade', game: 'Persona 5 Royal', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1415-CUSA03724_00-AV00000000000192/1601172562000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'PJPlays', game: 'Persona 5 Royal', img: 'https://avatarfiles.alphacoders.com/220/thumb-220347.png' },
    { name: 'Hee Ho Bro', game: 'Persona 5 Royal', img: 'https://vignette.wikia.nocookie.net/powerinstinct/images/e/e2/Jack_frost_purikura.png/revision/latest/window-crop/width/200/x-offset/36/y-offset/0/window-width/225/window-height/224?cb=20170507011340' },
    { name: 'Renren', game: 'Persona 5 Royal', img: 'https://i1.sndcdn.com/avatars-000568852293-fy7fe1-t500x500.jpg' },
    { name: 'Onixpected', game: 'Super Smash Bros. Ultimate', img: 'https://avatarfiles.alphacoders.com/160/thumb-160984.jpg' },
    { name: 'Tyler', game: 'Super Smash Bros. Ultimate', img: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0102-CUSA02516_00-AV00000000000010/1601168381000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' },
    { name: 'Sora4Smash', game: 'Super Smash Bros. Ultimate', img: 'https://i.imgur.com/2Ny3HCK_d.webp?maxwidth=728&fidelity=grand' },
    { name: 'zeldalol', game: 'Super Smash Bros. Ultimate', img: 'https://yt3.ggpht.com/a/AGF-l7_k69Pv4KISEuHPgIFXKPkEGP9PjQ7FB-GlAQ=s240-c-k-c0xffffffff-no-rj-mo' },
    { name: 'Mew2Guy', game: 'Super Smash Bros. Ultimate', img: 'https://i1.sndcdn.com/avatars-000192768620-y9lak2-t500x500.jpg' },

  ];

  public games = [
    { name: 'Among Us', img: 'https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1592601560' },
    { name: 'Doom (2016)', img: 'https://i.ebayimg.com/images/g/PNUAAOSw6btXSKGn/s-l300.jpg' },
    { name: 'Persona 5 Royal', img: 'https://cdn.mos.cms.futurecdn.net/8kFgCvZNdXfMxoK5dpxUmm-1200-80.jpg' },
    { name: 'Super Smash Bros. Ultimate', img: 'https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg?output-quality=80&output-format=webp' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
