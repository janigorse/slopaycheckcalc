import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SalaryformComponent } from "./salaryform/salaryform.component";
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';

@NgModule({
  declarations: [AppComponent, SalaryformComponent, SalaryDetailComponent],
  imports: [CommonModule, FormsModule],
  providers: []
})
export class AppModule {}
