import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RecapitulatifComponent } from '../recapitulatif/recapitulatif.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {


  constructor(private router: Router) { }



  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const nom = form.value['nom'];
    const prenom = form.value['prenom'];
    const adresse = form.value['adresse'];
    const cp = form.value['cp'];
    const ville = form.value['ville'];
    const tel = form.value['tel'];
    const email = form.value['email'];
    const civilite = form.value['civilite'];
    const password = form.value['password'];
    const login = form.value['login'];
    const pays = form.value['pays'];
    this.router.navigate(['recapitulatif']);
}

}
