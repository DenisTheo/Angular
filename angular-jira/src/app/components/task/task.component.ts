import {Component, Input} from '@angular/core';

@Component(
{
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent
{
  @Input() taskName: string = 'Default Task';
}
