import { Component, OnInit } from '@angular/core';

/* Este selector nos permite "llamar" (mostrar, no linkear) esta página desde otros lados de la app 
  * sin embargo, si invocamos la página a través de este método, necesitamos declararla en el módulo 
  * de la página donde queramos 
*/

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor() { }

/* ngOnInit -> "angular On Initiation"
  * es una función que se ejecuta al inicializar la página
*/

  ngOnInit() {
  }

}
