import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasService } from '../pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoas } from '../pessoas';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  id!: number;
  pessoas!: Pessoas;
  form!: FormGroup;
    
  constructor(
    public pessoasService: PessoasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.pessoasService.find(this.id).subscribe((data: Pessoas)=>{
      this.pessoas = data;
    }); 
      
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      phone: new FormControl('')
    });
  }
    
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.pessoasService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Pessoa atualizada com sucesso!');
         this.router.navigateByUrl('post/index');
    })
  }

}
