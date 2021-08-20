import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { MatModule } from './mat.module';
import { LoadingComponent } from './loading/loading.component';
import { MessagesService } from './messages/messages.service';
import { LoadingService } from './loading/loading.service';
@NgModule({
  declarations: [MessagesComponent, LoadingComponent],
  imports: [CommonModule, MatModule],
  exports: [MessagesComponent, LoadingComponent],
  providers: [MessagesService, LoadingService],
})
export class SharedModule {}
