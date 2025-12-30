import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../service/chat';
import { Chat } from '../../interfaces/chat';

@Component({
  selector: 'app-chat-detail-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-detail-component.html',
  styleUrl: './chat-detail-component.css',
})
export class ChatDetailComponent {
  chatSignal!: Signal<Chat | undefined>
  newText = ''
  private id?: string

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? undefined
    if (this.id) {
      this.chatSignal = this.chatService.getChatSignal(this.id)
    }
    else {
      this.chatSignal = computed(() => undefined)
    }
  }

  send() {
    if (!this.id || this.newText.trim()) {
      return
    }
    this.chatService.sendMessage(this.id, this.newText.trim(), true)
    this.newText = ''
  }

  formatDate(date: string) {
    if (!date) {
      return ''
    }
    const datetime = new Date(date)
    return datetime.toLocaleString()
  }

}
