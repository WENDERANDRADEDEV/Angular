import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {
 public titulo = 'Professores';
  public professores = [
    { nome: 'João Pedro' },
    { nome: 'João Pedro' },
    { nome: 'João Pedro' },
    { nome: 'João Pedro' },
    { nome: 'João Pedro' },

  ]

  constructor() { }

  ngOnInit() {
  }

}
