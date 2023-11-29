import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LookingForComponent } from './looking-for/looking-for.component';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { MatCardModule } from '@angular/material/card';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { HowToBookTicketComponent } from './how-to-book-ticket/how-to-book-ticket.component';
import { MatMenuModule } from '@angular/material/menu';
import { MessageBoxComponent } from './message-box/message-box.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { ChatResponseComponent } from './chat-response/chat-response.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ChatServiceService } from './chat-service.service';
import { MessageServiceService } from './message-service.service';
import { DataShareService } from './data-share.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LookingForComponent,
    WelcomeTextComponent,
    ContentComponent,
    LoginComponent,
    FooterComponent,
    HowToBookTicketComponent,
    MessageBoxComponent,
    ChatComponent,
    ChatResponseComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule, 
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    // HeaderComponent,
    // LookingForComponent,
    // WelcomeTextComponent,
    // ContentComponent,
    // LoginComponent,
    // FooterComponent,
    // HowToBookTicketComponent,
    // MessageBoxComponent,
    // ChatComponent,
    // ChatResponseComponent,
    // PopUpComponent
  ],
  providers: [ChatServiceService,MessageServiceService,DataShareService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
