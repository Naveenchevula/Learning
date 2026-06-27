// class is blue print for object 
// ES 6 - ECMA SCRIPT 6 - 2015 

// class is collection of Properties(variable) and method (Function)

// ClassName should be similar to the file name (Employee.ts). Class name should be 
// Employee and it shold always start wiyh capital letter 
//Whenever you create a variable in class, we do not need to mention let/conts keyword
//without () - variable in class 
//Whenever yiu create a function in class, we do not need to "function" keyword 
//with () -method 

// Access Modifier - It is a permission to access variables and methods 
// public - default - can be accessible anywhere inside the project 
// privite - can only accessible inside the same class
// protected - can be accessible only by the child classes
// readonly - cannot be modified 

// static - Does't belongs to a class. It cannot be accessible by an object of a class
// you can access static varival or method by using the classname 

//Ex ; ClassName.Key1, ClassName.info()
// syntac to create a class
// export - import 
/*
export class ClassName{
// Properties - variables - Locator (PW)

key:datatype = value
key1: datatype
private key2 : datatype
static key3 : datatype =vaule 
readonly key4: datatype 
// construtor  - it is special method wich is use to initialize the properties of a class 
it automtaically  called when an object of the class is created.it can take a parameters to initialize the properties of a class

constructor (key:data type, key1: datatype....{
key = key// key = 10
key1 =


}
const obj = new className(1o,15,20,40) 
)

}

*/
class Employee{
 empId: number
 empName: string
 empAge: number
 private empSalary: number
 static companyName = "ABC"
 

constructor(id:number, name:string,age:number,salary:number){
// this - is the keyword which referes to the current class object
    this.empId =id
    this.empAge = age 
    this.empName = name
    this.empSalary = salary
    
}
employeeInformation(){
    console.log(`Employee Id is: ${this.empId}
        Employee Age is :${this.empAge}
        Employee Salary is ${this.empSalary}
        Employee CompanyName is ${Employee.companyName}` ) // static can acces with className 
}

static disaplyCompany(){
    console.log(Employee.companyName)
}

}
const obj = new Employee(3002,"Naveen",29,1000)
console.log(obj.empId)
obj.employeeInformation()
Employee.disaplyCompany()

const emp = new Employee(2002,"Rajesh",28,3000)
console.log(emp.empId)
emp.employeeInformation()
Employee.disaplyCompany()


class Manager extends Employee {
    bonus: number;

    constructor(
        id: number,
        name: string,
        age: number,
        salary: number,
        bonus: number
    ) {
        super(id, name, age, salary);
        this.bonus = bonus;
    }

    displayManagerInfo() {
        this.employeeInformation();
        console.log("Manager Bonus: " + this.bonus);
    }
}

const mgr = new Manager(23, "naveen", 29, 30000, 1000);
mgr.displayManagerInfo();