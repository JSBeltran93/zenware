import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { TestBed } from '@angular/core/testing';

import { MessagesService } from './message.service';

describe('MessageService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MessageService,
          useClass: MessageService,
        },
      ],
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
