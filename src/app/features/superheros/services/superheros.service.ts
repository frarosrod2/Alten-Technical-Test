import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero.interface';

@Injectable({
  providedIn: 'root',
})
export class SuperherosService {
  private _superheroes: Superhero[] = [
    {
      id: 1,
      name: 'Hulk',
    },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Batman' },
    { id: 4, name: 'Spiderman' },
    { id: 5, name: 'Flash' },
    { id: 5, name: 'Catwoman' },
  ];

  constructor() {}

  get superheroes(): any[] {
    return this._superheroes;
  }

  getSuperheroById(id: number): any {
    return this._superheroes.find((hero) => hero.id === id);
  }

  searchSuperheroesByName(searchTerm: string): any[] {
    return this._superheroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  createSuperhero(hero: Superhero): void {
    hero.id = this.generateUniqueId();
    this._superheroes.push(hero);
  }

  updateSuperhero(hero: Superhero): void {
    const index = this._superheroes.findIndex(
      (superhero) => superhero.id === hero.id
    );
    if (index !== -1) {
      this._superheroes[index] = hero;
    }
  }

  deleteSuperhero(id: number): void {
    this._superheroes = this._superheroes.filter((hero) => hero.id !== id);
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
