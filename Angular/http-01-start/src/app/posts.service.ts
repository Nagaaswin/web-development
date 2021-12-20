import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  fetchPostsSubject = new Subject<Post[]>();
  fetchErrorsSubject = new Subject<Error>();
  commonHeaders = new HttpHeaders({ commonHeader: "hi" });
  commonParams = new HttpParams().set("print", "pretty");
  constructor(private http: HttpClient) {}

  createAndStorePosts(postData: Post) {
    this.http
      .post<{ name: string }>(
        "https://angular-backend-4c6f4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        postData,
        {
          headers: this.commonHeaders,
          params: this.commonParams,
          observe: "response", // to get entire response
          responseType: "json", 
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
          this.fetchPosts();
        },
        (errorData: Error) => {
          this.fetchErrorsSubject.next(errorData);
        }
      );
  }

  fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>(
        "https://angular-backend-4c6f4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        {
          headers: this.commonHeaders.append("newHeader", "new"), // immuteable so returns new object
          params: this.commonParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(
        (posts) => {
          this.fetchErrorsSubject.next(null);
          this.fetchPostsSubject.next(posts);
        },
        (error: Error) => {
          console.error(error.message);
          this.fetchErrorsSubject.next(error);
        }
      );
  }

  deleteAllPosts() {
    this.http
      .delete(
        "https://angular-backend-4c6f4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        {
          observe: "events",
        }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            console.log("Sent Event");
          }
        })
      )
      .subscribe(() => {
        this.fetchPosts();
      });
  }
}
