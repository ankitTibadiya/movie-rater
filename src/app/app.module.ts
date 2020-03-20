import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { MainModule } from "./main/main.module";
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";

const routes: Routes = [{ path: "", pathMatch: "full", redirectTo: "movies" }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
