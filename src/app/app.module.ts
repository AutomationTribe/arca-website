import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section3Component } from './section3/section3.component';
import { Section2Component } from './section2/section2.component';
import { Section1Component } from './section1/section1.component';
import { HeaderComponent } from './header/header.component';
import { Section8Component } from './section8/section8.component';
import { Section7Component } from './section7/section7.component';
import { TransactionProcessingComponent } from './transaction-processing/transaction-processing.component';
import { PTSPComponent } from './ptsp/ptsp.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { IssuingComponent } from './issuing/issuing.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { ProductsComponent } from './products/products.component';
import { TerminalMgtComponent } from './terminal-mgt/terminal-mgt.component';
import { ArcaPosComponent } from './arca-pos/arca-pos.component';
import { AccountSwitchComponent } from './account-switch/account-switch.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StoredValueAccountComponent } from './stored-value-account/stored-value-account.component';
import { CardMgtComponent } from './card-mgt/card-mgt.component';
import { Section6Component } from './section6/section6.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CollapseNavbarComponent } from './collapse-navbar/collapse-navbar.component';
import { CollapseSection2Component } from './collapse-section2/collapse-section2.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepageBodyComponent,
    Section4Component,
    Section5Component,
    Section3Component,
    Section2Component,
    Section1Component,
    HeaderComponent,
    Section8Component,
    Section7Component,
    TransactionProcessingComponent,
    PTSPComponent,
    EcommerceComponent,
    IssuingComponent,
    CareersComponent,
    AboutUsComponent,
    ManagementTeamComponent,
    ProductsComponent,
    TerminalMgtComponent,
    ArcaPosComponent,
    AccountSwitchComponent,
    PaymentGatewayComponent,
    StoredValueAccountComponent,
    CardMgtComponent,
    Section6Component,
    ContactUsComponent,
    CollapseNavbarComponent,
    CollapseSection2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',
      component:
      HomepageBodyComponent
    },
      {
        path:'transactionProcessing',
        component:TransactionProcessingComponent
      },
      {
        path:'ptsp',
        component:PTSPComponent
      },
      {
        path:'ecommerce',
        component:EcommerceComponent
      },
      {
        path:'issuing',
        component: IssuingComponent
      },
      {
        path:'careers',
        component: CareersComponent
      },
      {
        path:'about-us',
        component:AboutUsComponent
      },
      {
        path:'management-team',
        component:ManagementTeamComponent
      },
      {
        path:'products',
        component:ProductsComponent
      },
      {
        path:'terminal-mgt',
        component:TerminalMgtComponent
      },
      {
        path:'arca-pos',
        component: ArcaPosComponent
      },
      {
        path:'account-switch',
        component:AccountSwitchComponent
      },
      {
        path:'payment-gateway',
        component:PaymentGatewayComponent
      },
      {
        path:'stored-value-account',
        component:StoredValueAccountComponent
      },
      {
        path:'card-mgt',
        component:CardMgtComponent
      },
      {
        path:'contact-us',
        component:ContactUsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
