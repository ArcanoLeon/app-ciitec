import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-bt-test',
  templateUrl: './bt-test.page.html',
  styleUrls: ['./bt-test.page.scss'],
})
export class BtTestPage implements OnInit {

  devices

  constructor( 
    private bluetoothSerial: BluetoothSerial,
    private alertCtrl: AlertController
   ) {}

  activarBluetooth() {
    this.bluetoothSerial.isEnabled().then(response => {
      this.isEnabled("IsOn");
      this.listBtDevices();
    }, error => {
      this.isEnabled("IsOff");
    })
  }

  async isEnabled(msg) {
    const alert = await this.alertCtrl.create({
      header: "Alerta",
      message: msg,
      buttons: [{
        text: "Ok",
        handler: () => {
          console.log("BT habilitado?")
        }
      }]
    })
  }

  listBtDevices() {
    this.bluetoothSerial.list().then(response => {
      this.devices = response
    }, error => {
      this.isEnabled("ERROR")
    })
  }

  btConnect(address) {
    this.bluetoothSerial.connect(address).subscribe(success => {
      
    }, error => {
      console.log("ERROR")
    })
  }

  handler(value) {
    console.log(value)
  }

  sendData(){
    this.bluetoothSerial.write("77").then(response => {
      console.log("Ok")
    }, error => {
      console.log("Ocurrió un problema")
    })
  }

  btDisconnect() {
    this.bluetoothSerial.disconnect(),
    console.log("Dispositivo desconectado")
  }

  deviceConnect() {
    this.bluetoothSerial.subscribe("/n").subscribe(success => {
      this.handler(success)
    })
  }

  ngOnInit() {
  
  }

  
  

}
