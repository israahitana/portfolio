import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { home} from './home/home';
import { Skills } from './skills/skills';
import { Certificat } from './certificat/certificat';

import { Footer } from "./footer/footer";
import { Nav } from "./nav/nav";

import { Intro } from "./intro/intro";
import { AboutMe } from "./about-me/about-me";
import { Works } from "./works/works";
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, home, Skills, Certificat, Footer, Nav, Intro, AboutMe, Works,Contact,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
