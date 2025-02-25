import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from '../list/list.component';

@Component(
{
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent
{
  lists =
  [
    {title: 'To Do', tasks: ['Task 1', 'Task 2']},
    {title: 'In Progress', tasks: ['Task 1']},
    {title: 'Done', tasks: []}
  ];

  addList()
  {
    this.lists.push({title: `New List ${this.lists.length+1}`, tasks: []});
  }
}
