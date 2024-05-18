import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PessoasService } from '../pessoas.service';
import { Pessoas } from '../pessoas';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  pessoas: Pessoas[] = [];
  

  constructor(public pessoasService: PessoasService) { }

  ngOnInit(): void {

    this.pessoasService.getAll().subscribe((data: Pessoas[]) => {
      this.pessoas = data;
      console.log(this.pessoas);
    })
  }

  deletePessoa(id: number) {
    this.pessoasService.delete(id).subscribe(res => {
      this.pessoas = this.pessoas.filter(item => item.id !== id);
      console.log('Pessoa deletado com sucesso!');
    })
  }

}
