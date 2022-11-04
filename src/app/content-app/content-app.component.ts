import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-app',
  templateUrl: './content-app.component.html',
  styleUrls: ['./content-app.component.scss'],
})
export class ContentAppComponent implements OnInit {
  constructor() {}

  mioDato: string = 'we, mioDato';

  @ViewChild('field', { read: ElementRef }) field?: ElementRef;

  ngOnInit(): void {
    console.log(this.field); // Qui sarà Undefined
  }

  ngAfterViewInit() {
    console.log(this.field?.nativeElement.value); // Mio testo
  }
  faiqualcosa(val1: string, val2: string) {
    alert(val1 + ' ' + val2);
  }
}
