import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() titolo?: string;

  @ContentChild('heading') heading?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    console.log('ngAfterContentInit: ' + this.heading?.nativeElement.textContent);
  }
}
