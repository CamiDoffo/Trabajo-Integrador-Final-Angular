import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../service/chat';
import { Chat } from '../../interfaces/chat';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FechaPipe } from '../pipes/fecha-pipe';

@Component({
  selector: 'app-chat-detail-component',
  imports: [CommonModule, FormsModule, FechaPipe],
  templateUrl: './chat-detail-component.html',
  styleUrl: './chat-detail-component.css',
})
export class ChatDetailComponent {

  newText = '';


  chatSignal: Signal<Chat | undefined>;
router: any;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {
    const chatIdSignal = toSignal(
      this.route.paramMap.pipe(
        map(params => params.get('id'))
      )
    );

    this.chatSignal = computed(() => {
      const id = chatIdSignal();
      return id ? this.chatService.getChatSignal(id)() : undefined;
    });
  }

  send() {
    const chat = this.chatSignal();
    if (!chat || !this.newText.trim()) return;

    this.chatService.sendMessage(chat.id, this.newText.trim(), true);
    this.newText = '';
  }

  formatDate(date: string) {
    return date ? new Date(date).toLocaleString() : '';
  }
}
