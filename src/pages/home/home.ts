import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCommentPage } from "../new-comment/new-comment";
import { CommentService } from "../../services/comment.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  comments: {title: string}[] = [];
  constructor(public navCtrl: NavController, private commentService: CommentService) {

  }

  ionViewWillEnter() {
    this.comments = this.commentService.getComments();
  }

  onLoadNewComment() {
    this.navCtrl.push(NewCommentPage);
  }

}
