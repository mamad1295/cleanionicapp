import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCommentPage } from './new-comment';

@NgModule({
  declarations: [
    NewCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCommentPage),
  ],
  exports: [
    NewCommentPage
  ]
})
export class NewCommentPageModule {}
