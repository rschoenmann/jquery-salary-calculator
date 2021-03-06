console.log('js');
 $(document).ready(readyNow);

let employeeArray = []; //array to store new objects coming from user inputs
let totalAnnualSalaries = 0; //global variable so we can calculate across functions

 function readyNow(){
    console.log('jquery is ready');
    buttonClick();
    $('#tableBody').on('click', '.deleteButton', deleteButtonClick);
 }//end readyNow

function deleteButtonClick(){
    $(this).parent().parent().remove();
    console.log('totally deleting');
    
}//end deleteButtonClick


 function buttonClick(){
    $('#submitButton').on('click', addNewEmployee);
 }//end buttonClick

 //takes input from DOM, creates new object and pushes to employeeArray
 function addNewEmployee(){
    console.log('in addNewEmployee');
    let newEmployeeObject = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idNumberIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }//end newEmployeeObject
    employeeArray.push(newEmployeeObject);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
    displayInputs();
    deleteButtonClick();
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
    <td><button class="deleteButton">Delete Employee</button></td>
    </tr>`);
     $('#deleteButton').on('click', function () {
         $(this).parent().parent().remove();
     });
    totalAnnualSalaries += parseFloat(newest.annualSalary);
    console.log(totalAnnualSalaries);
    updateDom();
 }//end displayInputs function

function updateDom(){
    let el = $('#totalMonthlyOut');
    //empty totalMonthlyOut
    el.empty();
    //append in updated monthly total
    let monthlyCosts = totalAnnualSalaries / 12;
    $('#totalMonthlyOut').append(`<div>Total Monthly: $${monthlyCosts.toFixed(2)}</div>`);
    if (monthlyCosts > 20000){
       $('#totalMonthlyOut').addClass('highlight');
    }//end if statement
 }// end updateDom function