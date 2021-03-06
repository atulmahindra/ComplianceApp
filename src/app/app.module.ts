import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogpostModule } from './blogpost/blogpost.module';
import { FormsModule }   from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { CmspageModule } from './cmspage/cmspage.module';
import { TestComponent } from './test/test.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { ComplianceDetailsComponent } from './compliance-details/compliance-details.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    TestComponent,
    ComplianceDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BlogpostModule,
    CmspageModule,
    NgxPaginationModule,
    NgbModule,
    MalihuScrollbarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
