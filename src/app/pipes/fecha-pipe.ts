import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Fecha',
  standalone: true
})
export class FechaPipe implements PipeTransform {

  transform(value?: string | Date): string {
    if (!value) return '';

    const date = new Date(value);

    if (isNaN(date.getTime())) return '';

    const now = new Date();
    const sameDay =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (sameDay) {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    return date.toLocaleDateString([], {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) + ' ' +
    date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
