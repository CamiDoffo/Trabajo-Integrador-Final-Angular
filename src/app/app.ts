import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat-component/chat-component';
// Asegúrate de importar tu componente de lista de chats

@Component({
  selector: 'app-root',
  standalone: true, // Requisito Angular 17 
  imports: [RouterOutlet, ChatComponent], // Importante: agrega ChatComponent aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Trabajo-Integrador-Final-Angular');
}