import {BaseComponent} from "./interfaces";
import {About} from "./about";

export class WebsiteCtrl { }

export const Website: BaseComponent = {
    name: 'website',
    controller: WebsiteCtrl,
    $routeConfig: [
        { path: '/about', name: 'About', component: About.name }
    ],
    template: `
    <h1>Angular 1.5 components</h1>

    <nav>
        <a ng-link="['About']">About</a>
    </nav>

    <p>
      This code shows how to setup Angular 1.5 ngComponentRouter in Typescript
      plus systemjs and jspm
    </p>

    <ng-outlet></ng-outlet>
    `
};
