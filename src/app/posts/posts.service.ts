import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "./post.model";
import { map } from 'rxjs/operators';



@Injectable({providedIn:"root"})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {  }

  getPost(){
    // return [...this.posts];
    this.httpClient
    .get<{message:string, posts:any}>(
      'http://localhost:3000/api/posts'
      )
      .pipe(map((postData) =>{
          return postData.posts.map(post =>{
            return {
              id: post._id,
              content: post.content,
              title: post.title
            };
          });

      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts])
      });
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  receivePost(id: string){
    return {...this.posts.find(p => p.id === id)};
  }

  addPost(title:string, content: string){
    const post: Post ={id:null,title: title, content: content};
    this.httpClient.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) =>{
      const id = responseData.postId;
      post.id = id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }

  deletePost(postId: string){
    this.httpClient.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() =>{
      const updatedPosts =  this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}
