'use strict';
// import { Component } from "@angular/core";
// import * as globalVars from "../service/global";

// import "/socket.io/socket.io.js";


const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './chat.routes';

export class ChatComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('meanApp.chat', [uiRouter])
  .config(routes)
  .component('chat', {
    template: require('./chat.html'),
    controller: ChatComponent,
    controllerAs: 'chatCtrl'
  })
  .name;
