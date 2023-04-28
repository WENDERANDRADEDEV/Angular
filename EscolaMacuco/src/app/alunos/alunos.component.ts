import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

 public titulo = 'Alunos';
 public alunoSelecionado: string;

  public alunos = [
    { nome: 'Pedro' },
    { nome: 'Pedro' },
    { nome: 'Pedro' },
    { nome: 'Pedro' },
    { nome: 'Pedro' },
  ]

  alunoSelect(aluno: any)
  {
    this.alunoSelecionado = aluno;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
