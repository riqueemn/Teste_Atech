import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasService } from '../pessoas.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  form!: FormGroup;

  constructor(
    public pessoasService: PessoasService,
    private router: Router,
  ){ }

  ngOnInit(): void {
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
    this.pessoasService.create(this.form.value).subscribe((res: any) => {
      console.log('Pessoa cadastrada com sucesso!');
      this.router.navigateByUrl('pessoas/index');
    })
  }
}
