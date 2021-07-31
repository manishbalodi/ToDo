export class TodoModel{
    public title : string;
    public content : string;
    public completed : boolean;

    constructor(title : string, content : string , completed : boolean){
        this.title = title;
        this.content = content;
        this.completed = completed;
    }
}