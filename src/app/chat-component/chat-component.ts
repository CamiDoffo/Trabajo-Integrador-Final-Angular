import { Component } from '@angular/core';
import { ChatService } from '../service/chat';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-component',
  imports: [CommonModule],
  templateUrl: './chat-component.html',
  styleUrl: './chat-component.css',
})
export class ChatComponent {
  constructor(public chatService: ChatService, private router: Router){

  }
  open(id: string){
    //Redireccion hacia un chat
    this.router.navigate(['/chats', id])
  }
  nuevo(){
    this.router.navigate(['/nuevo'])
  }
}
