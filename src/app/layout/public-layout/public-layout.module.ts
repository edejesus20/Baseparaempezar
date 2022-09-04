import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicLayoutRoutingModule } from './public-layout-routing.module';
import { PublicLayoutComponent } from './public-layout.component';

import { LandingComponent } from '../private-layout/landing/landing.component';
import {MultiSelectModule} from 'primeng/multiselect';

import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { SplitterModule } from 'primeng/splitter';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ChartModule } from 'primeng/chart';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {PasswordModule} from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    FormLoginComponent,
    FormRegisterComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    GalleriaModule,
    HttpClientModule,
    MultiSelectModule,
    ConfirmPopupModule,
    ToastModule,
    // RouterModule,
    AvatarGroupModule,
    AvatarModule,
    PublicLayoutRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    DividerModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
  
    CardModule,
    MenuModule,
    MessagesModule,
    MessageModule,
  
    SplitterModule,
    MenubarModule,

    SidebarModule,
    PanelMenuModule,
    ChartModule,
    ToolbarModule,
    SplitButtonModule,
  
    TreeModule,
    // VirtualScrollerModule,
    TableModule,
    KeyFilterModule,
    DropdownModule,
    CalendarModule,
    FieldsetModule,
    FileUploadModule,
    InputTextareaModule,
  PasswordModule

  ],providers: [ConfirmationService,MessageService],
})
export class PublicLayoutModule { }
