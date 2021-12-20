import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  private errorSub = new Subscription();
  private fetchSub = new Subscription();

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchSub = this.postsService.fetchPostsSubject.subscribe((posts) => {
      this.loadedPosts = posts;
      this.isLoading = false;
    });
    this.errorSub = this.postsService.fetchErrorsSubject.subscribe((error) => {
      this.error = error;
    });
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.isLoading = true;
    this.postsService.createAndStorePosts(postData);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deleteAllPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
    this.fetchSub.unsubscribe();
  }
}
