import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'enterprisey-flashcards-entry',
  template: `<enterprisey-nx-welcome></enterprisey-nx-welcome>`,
})
export class RemoteEntryComponent {}
