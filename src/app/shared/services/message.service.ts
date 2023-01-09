import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private messageService: MessageService) {}

  getMesaggeSucess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
  getMessageError(messsage: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: `Error ${messsage}`,
    });
  }
}
