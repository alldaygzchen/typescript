"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); // call the base class constructor
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - Id" + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valud value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        AccountingDepartment.instance = new AccountingDepartment("d2", []);
        return AccountingDepartment.instance;
    }
    // override methods
    describe() {
        console.log("Accounting Department" + this.id);
    }
    testReport() {
        return this.lastReport;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addEmployeeExceptMax(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("gz");
console.log("employee1", employee1);
console.log("Department.fiscalYear", Department.fiscalYear);
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = 'Anna';
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log("accounting", accounting);
console.log("accounting2", accounting2);
accounting.addReport("Something went wrong...");
accounting.printReports();
accounting.mostRecentReport = "Hello world";
console.log("accounting.testReport()", accounting.testReport());
console.log("accounting.mostRecentReport", accounting.mostRecentReport);
