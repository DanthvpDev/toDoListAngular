import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UserInfo } from '../../../tasks/interfaces/userInfo.interface';
import { Task } from '../../../tasks/interfaces/task.interfaces';

@Component({
  selector: 'util-modal',
  standalone: false,
  
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input()
  public userInfo!:UserInfo;

  @Input()
  public taskInfo!:Task;

  @Input()
  public background!:string;

  @Input()
  public badgeColor!:string;

  @Output()
  public closeModalEvent = new EventEmitter<void>();

  public CloseModal():void {
    this.closeModalEvent.emit();
  }


}
