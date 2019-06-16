import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  nuevoTitulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitulo',
      message: 'Esto es un mensaje',
      inputs:[
        {
          name: 'txtTitulo',
          type: 'text',
          placeholder: 'Escribe un nuevo Titulo',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmación de Cancel: blah');
          }
        },
        {
          text: 'Aceptar',
          handler: (datos) => {
            this.nuevoTitulo = datos.txtTitulo;
          }
        }
      ]
    });

    await alert.present();
  }

}
