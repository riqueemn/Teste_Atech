import { Component } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Pessoas } from '../pessoas';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  id!: number;
  pessoas!: Pessoas;

  constructor(
    public pessoasService: PessoasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.pessoasService.find(this.id).subscribe((data: Pessoas) =>{
      this.pessoas = data;
    });
  }
}
