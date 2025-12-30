import { Routes } from '@angular/router';
import { ChatDetailComponent } from './chat-detail-component/chat-detail-component';
import { NewChatComponent } from './new-chat-component/new-chat-component';
import { ChatComponent } from './chat-component/chat-component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'chats', pathMatch: 'full'
    },
    {
        path: 'chats', component: ChatDetailComponent,
    },
    {
        path: 'chats/:id', component: ChatDetailComponent,
    },
    {
        path: 'nuevo', component: NewChatComponent
    },
    {
        path: '**', redirectTo: 'chats'
    }
];