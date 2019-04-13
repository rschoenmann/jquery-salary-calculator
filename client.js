console.log('js');
 $(document).ready(readyNow);

let employeeArray = [];

 function readyNow(){
    console.log('jquery is ready');
    buttonClick();
 }//end readyNow

 function buttonClick(){
     //on button click, add new employee object
    $('#submitButton').on('click', addNewEmployee);
 }//end buttonClick

 function addNewEmployee(){
    console.log('in addNewEmployee');
    const newEmployeeObject = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idNumberIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }//end newEmployeeObject constant
    employeeArray.push(newEmployeeObject);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
    displayInputs();
 }//end addNewEmployee

 function displayInputs(){
    let newest = employeeArray[employeeArray.length - 1];
    $('#tableBody').append(`
    <tr>
    <td>${newest.firstName}</td>
    <td>${newest.lastName}</td>
    <td>${newest.id}</td>
    <td>${newest.title}</td>
    <td>${newest.annualSalary}</td>
    </tr>`);
    calculateMonthly(employeeArray);
 }//end displayInputs function

 function calculateMonthly(employeeArray){
    console.log('in calculateMonthly');
    let allAnnualSalaries = [];
    //for loop to access each newEmployeeObject's annual salary
    for(let i=0; i<employeeArray.length; i++){
        //find each annualSalary in employeeArray and pull it into a new allSalaries array
        allAnnualSalaries.push(employeeArray[i].annualSalary);
        //add together and divide by 12 to get monthly salary
        console.log(allAnnualSalaries);
        //let totalSalaries = allAnnualSalaries.reduce(reduceSalaries);
    }//end for loop
    //put that in new variable of all total annual salaries (did this above at salaryTotal)
    //postToDom(monthly)
 }//end calculateMonthly function