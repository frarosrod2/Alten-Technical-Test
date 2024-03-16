import { Component, OnInit } from '@angular/core';
import { Superhero } from '../../models/superhero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperherosService } from '../../services/superheros.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class SuperheroDetailComponent implements OnInit {
  superhero!: Superhero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private superheroService: SuperherosService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap?.get('id')!; // '+' converts string to number
    const superheroById = this.superheroService.getSuperheroById(id);
    this.superhero = superheroById;
  }
}
