import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskComponent} from '../task/task.component';

@Component(
{
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent
{
  @Input() listTitle: string = 'Default List';
  @Input() tasks: string[] = [];

  addTask()
  {
    this.tasks.push(`Task ${this.tasks.length+1}`);
  }
}
