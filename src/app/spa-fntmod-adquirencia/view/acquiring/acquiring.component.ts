import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ad-acquiring',
  templateUrl: 'acquiring.component.html',
  styleUrls: ['acquiring.component.scss']
})
export class AcquiringComponent implements OnInit {
  telaAtual: string;
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.telaAtual = this.router.url;
  }
}
