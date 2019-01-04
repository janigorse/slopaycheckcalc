import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SalaryformComponent } from "./salaryform/salaryform.component";

@NgModule({
  declarations: [AppComponent, SalaryformComponent],
  imports: [CommonModule, FormsModule],
  providers: []
})
export class AppModule {}
