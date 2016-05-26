"use strict"

import {element, bootstrap} from 'angular';
import app from './app';

element(document).ready(() => bootstrap(document, [app.name]));
