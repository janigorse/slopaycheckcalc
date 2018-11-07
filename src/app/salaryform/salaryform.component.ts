import { Component, OnInit } from "@angular/core";
import { Salary } from "src/app/salaryform/salary";

@Component({
  selector: "app-salaryform",
  templateUrl: "./salaryform.component.html",
  styleUrls: ["./salaryform.component.css"]
})
export class SalaryformComponent implements OnInit {
  constructor() {}

  salary: Salary;

  ngOnInit() {
    this.salary = {
      bruto: "",
      noOfChildren: "",
      transportAndLunch: "",
      neto: "0",
      withGeneralRelief: true
    };
  }

  calculate() {
    let bruto = +this.salary.bruto;
    if (bruto > 100) {
      let brutoContributions = this.calculateBrutoContributions(bruto);
      let noOfChildren = +this.salary.noOfChildren;
      let transportAndLunch = +this.salary.transportAndLunch;
      let generalRelief = this.salary.withGeneralRelief
        ? this.calculateGeneralRelease(bruto)
        : 0;
      let reliefForFamilyMembers = this.calculateReliefForFamilyMembers(
        noOfChildren
      );
      let incomeTaxBase = this.calculateIncomeTaxBase(
        bruto,
        generalRelief,
        reliefForFamilyMembers,
        brutoContributions
      );
      let advancePayment = this.calculateAdvancePayment(incomeTaxBase);
      let netoSalary = bruto - brutoContributions - advancePayment;
      let netoPayCheck = netoSalary + transportAndLunch;
      this.salary.neto = netoPayCheck.toString();
    }
  }

  calculateIncomeTaxBase(
    bruto: number,
    generalRelief: number,
    reliefForFamilyMembers: number,
    brutoContributions: number
  ) {
    return (
      bruto - (generalRelief + reliefForFamilyMembers) - brutoContributions
    );
  }

  clearInputBruto() {
    this.salary.bruto = null;
    this.salary.neto = "0";
  }

  clearInputTransportAndLunch() {
    this.salary.transportAndLunch = null;
    this.salary.neto = "0";
  }

  clearInputKidsNumber() {
    this.salary.noOfChildren = null;
    this.salary.neto = "0";
  }

  private calculateGeneralRelease(bruto: number) {
    let yearlyBruto = bruto * 12;
    switch (true) {
      case yearlyBruto < 11166.37:
        return 6519.82 / 12;
      case yearlyBruto >= 11166.37 && yearlyBruto <= 13316.83:
        return (3302.7 + (19922.15 - 1.49601 * yearlyBruto)) / 12;
      case yearlyBruto > 13316.83:
        return 3302.7 / 12;
      default:
        return 3302.7 / 12;
    }
  }

  private calculateBrutoContributions(bruto: number) {
    return (bruto / 100) * 22.1;
  }

  private calculateAdvancePayment(incomeTaxBase: number) {
    switch (true) {
      case incomeTaxBase <= 668.44:
        return incomeTaxBase * (16 / 100);
      case incomeTaxBase > 668.44 && incomeTaxBase <= 1700:
        return 106.95 + (incomeTaxBase - 668.44) * (27 / 100);
      case incomeTaxBase > 1700 && incomeTaxBase <= 4000:
        return 385.47 + (incomeTaxBase - 1700) * (34 / 100);
      case incomeTaxBase > 4000 && incomeTaxBase <= 5908.93:
        return 1167.47 + (incomeTaxBase - 4000) * (39 / 100);
      case incomeTaxBase > 5908.93:
        return 1911.95 + (incomeTaxBase - 5908.93) * 0.5;
      default:
        return 0;
    }
  }

  private calculateReliefForFamilyMembers(noOfChildren) {
    let child1 = 203.08;
    let child2 = 220.77;
    let child3 = 368.21;
    let child4 = 515.65;
    let child5 = 663.09;
    let nchild = 147.44;
    switch (true) {
      case noOfChildren == 1:
        return child1;
      case noOfChildren == 2:
        return child1 + child2;
      case noOfChildren == 3:
        return child1 + child2 + child3;
      case noOfChildren == 4:
        return child1 + child2 + child3 + child4;
      case noOfChildren == 5:
        return child1 + child2 + child3 + child4 + child5;
      case noOfChildren > 5:
        return (
          child1 +
          child2 +
          child3 +
          child4 +
          child5 +
          (noOfChildren - 5) * nchild
        );
      default:
        return 0;
    }
  }
}
