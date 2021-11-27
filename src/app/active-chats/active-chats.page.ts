import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-chats',
  templateUrl: './active-chats.page.html',
  styleUrls: ['./active-chats.page.scss'],
})
export class ActiveChatsPage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  public goBack() {
    this.location.back();
  }
}
