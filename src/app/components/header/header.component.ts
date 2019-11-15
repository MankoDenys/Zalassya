import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isShow = true;  

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#header-menu ul li a').click(function (ev) {
          $('#header-menu ul li').removeClass('selected');
          $(ev.currentTarget).parent('li').addClass('selected');
      });
  });
  }

}

