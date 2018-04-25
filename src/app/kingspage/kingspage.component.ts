import { Component } from '@angular/core';

@Component({
  selector: 'app-kingspage',
  templateUrl: './kingspage.component.html',
  styleUrls: ['./kingspage.component.css']
})
export class KingspageComponent {
  rulers = [
      {
          name: 'Roman I The Great',
          pic: 'http://uahistory.info/uploads/posts/1358874429_roman_velikijj_1.jpg',
          bio: 'Founder of the Principality. He was prince of Novgorod (1168–1170), of Vladimir-in-Volhynia (1170–1189, 1189–1205), and of Halych (1189, 1198/99–1205).'
      }, {
          name: 'Daniel I Romanovich',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Yurko_Shkvarok.Istoriya_Ukrajiny-Rusy_virshamy-11.png/375px-Yurko_Shkvarok.Istoriya_Ukrajiny-Rusy_virshamy-11.png',
          bio: ' King of Ruthenia, Prince (Knyaz) of Galicia (Halych) (1205–1255), Peremyshl (1211), and Volodymyr (1212–1231). He was crowned by a papal archbishop in Dorohochyn 1253 as the first King of Ruthenia (1253–1264). Founder of city Lviv, which he named after his son and successor Leo (Lev)'
      }, {
          name: 'Leo I Danilovach',
          pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lev_Danylovich_of_Halych.PNG/220px-Lev_Danylovich_of_Halych.PNG',
          bio: 'was a Knyaz (prince) of Belz (1245–1264), Peremyshl, Halych (1264–1269), Grand Prince of Kiev (1271–1301) and King of Galicia-Volhynia. He was a son of King Daniel of Galicia and his first wife, Anna Mstislavna Smolenskaya (daughter of Mstislav Mstislavich the Bold). As his father, Lev was a member of the senior branch of Vladimir II Monomakh descendents. '
      }, {
          name: 'Yuri I Lvovich',
          pic: 'https://upload.wikimedia.org/wikipedia/uk/3/3b/%D0%AE%D1%80%D1%96%D0%B9_I.png',
          bio: 'His full title was Yuri I, King of Ruthenia, Grand Prince of Kiev, Volydymyr-Volhynia, Halych, Lutsk, Dorohochyn. He married three times. His first wife was Yaroslavna of Tver (died ca. 1286). His second wife was Euphemia of Kuyavia (died 18 March 1308), daughter of Casimir I of Kuyavia. His third wife is unknown.'
      }
  ];

  constructor() { }

}
