import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 @Input() user:any;
 @Output() back = new EventEmitter()
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  goBack() {
  this.back.emit()
  }
}
