import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CustomMaterialModule } from './modules/custom-material.module';
import { PrimengModule } from './modules/primeng.module';
import { HttpModule } from '@angular/http';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './cube/home/home.component';
import { UserComponent } from './user/user.component';
import { QBoardComponent } from './cube/qboard/qboard.component';
import { QcanvasComponent } from './cube/qboard/qcanvas/qcanvas.component';
import { QcreateComponent } from './cube/qboard/qcreate/qcreate.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { CubeComponent } from './cube/cube.component';
import { MastersComponent } from './cube/settings/masters/masters.component';
import { QuestionmasterComponent } from './cube/settings/masters/questionmaster/questionmaster.component';
import { SettingsComponent } from './cube/settings/settings.component';
import { PropertyprofileComponent } from './cube/settings/propertyprofile/propertyprofile.component';
import { UserprofileComponent } from './cube/settings/userprofile/userprofile.component';
import { CourseComponent } from './cube/settings/masters/coursemaster/coursemaster.component';
import { SubjectmasterComponent } from './cube/settings/masters/subjectmaster/subjectmaster.component';
import { LessonmasterComponent } from './cube/settings/masters/lessonmaster/lessonmaster.component';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    SignInComponent,
    QBoardComponent,
    QcanvasComponent,
    QcreateComponent,
    CubeComponent,
    ChangePasswordComponent,
    MastersComponent,
    QuestionmasterComponent,
    SettingsComponent,
    PropertyprofileComponent,
    UserprofileComponent,
    CourseComponent,
    SubjectmasterComponent,
    LessonmasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    PrimengModule,
    HttpModule,
    CKEditorModule
  ],
  providers: [UserService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }

