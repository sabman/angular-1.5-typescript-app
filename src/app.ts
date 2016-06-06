/// <reference path="../vendor/jquery.ts"/>
/// <reference path="../typings/index.d.ts" />

import 'angular';
import 'ngcomponentrouter';

var app = angular.module("app", ["ngComponentRouter"]);

import {Website} from './website';
app.component(Website.name, Website);
app.value('$routerRootComponent', Website.name);

import {About} from './about';
app.component(About.name, About);

export default app;
