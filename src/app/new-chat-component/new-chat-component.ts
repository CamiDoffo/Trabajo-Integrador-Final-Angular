import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../service/chat';

@Component({
  selector: 'app-new-chat-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-chat-component.html',
  styleUrl: './new-chat-component.css',
})
export class NewChatComponent {
  name = ''
  initial = ''
  constructor(
    private chatService: ChatService,
    private router: Router

  ){}

  create(){
    if(!this.name.trim()){
      return
    }
    console.log(this.name)
    const chat = this.chatService.createChat(this.name.trim())
    if(this.initial.trim()){
      this.chatService.sendMessage(chat.id, this.initial.trim(), true)
    }
    this.router.navigate(['/chats', chat.id])
  }

  cancel(){
    this.router.navigate(['/chats'])
  }
}