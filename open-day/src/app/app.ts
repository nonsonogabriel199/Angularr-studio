import { Component, signal } from '@angular/core';
import { Intestazione } from './intestazione/intestazione';
import { PianoTerra } from './piano-terra/piano-terra';
import { PrimoPiano } from './primo-piano/primo-piano';

@Component({
  imports: [Intestazione, PianoTerra, PrimoPiano],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('open-day');
}