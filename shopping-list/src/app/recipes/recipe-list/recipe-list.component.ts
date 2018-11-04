import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.imgur.com/lPbRFgG.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.imgur.com/vp1UOk7.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.imgur.com/gGiFkiR.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
