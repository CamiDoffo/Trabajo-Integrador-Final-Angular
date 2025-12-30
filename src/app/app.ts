import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ChatComponent } from './chat-component/chat-component';

@Component({
  selector: 'app-root',
  imports: [ChatComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  chatOpen = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.chatOpen = this.router.url.includes('/chats/');
      });
  }
}
