export class CommentService{
    private comments: {title: string}[] = [];

    addComment(comment: {title: string}){
        this.comments.push(comment);
    }

    getComments(){
        return this.comments.slice();
    }

}