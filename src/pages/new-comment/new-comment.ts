import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentService } from "../../services/comment.service";


@IonicPage()
@Component({
  selector: 'page-new-comment',
  templateUrl: 'new-comment.html',
})
export class NewCommentPage {

  constructor(private commentService: CommentService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCommentPage');
  }

  onAddComment(value: {title: string}) {
    this.commentService.addComment(value);
    this.navCtrl.pop();
}
}
