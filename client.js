console.log('js');
 $(document).ready(readyNow);

let employeeArray = []; //array to store new objects coming from user inputs
let allAnnualSalaries = []; //array of just the annualSalary key of each object in employeeArray
let totalAnnualSalaries = 0; //global variable so we can calculate across functions
let monthlyCost = 0;

 function readyNow(){
    console.log('jquery is ready');
    buttonClick();
 }//end readyNow

 function buttonClick(){
    $('#submitButton').on('click', addNewEmployee);
    //updateDom();
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
    totalAnnualSalaries += parseFloat(newest.annualSalary);
    console.log(totalAnnualSalaries);
    
    //calculateCosts(employeeArray);
 }//end displayInputs function

 //access each newEmployeeObject's annual salary and pull into allAnnualSalaries array
 /*function calculateCosts(){
    console.log('in calculateCosts');
    for(let i=0; i<employeeArray.length; i++){
        
        //allAnnualSalaries.push(parseFloat(employeeArray[i].annualSalary));
        console.log(allAnnualSalaries);
    }//end for loop
    calculateMonthly(allAnnualSalaries);
 }//end gatherAllSalaries function
*/
 //take array from gatherAllSalaries, sum all values, and divide by 12
 /*function calculateMonthly(allAnnualSalaries){
    //for(let i=0; i<allAnnualSalaries.length; i++){
        //let monthlyCost = totalAnnualSalaries + allAnnualSalaries[allAnnualSalaries.length -1];
    //}
    //console.log(monthlyCost);
    
 }//end calculateMonthly function
*/
/* function updateDom(total, value){
    totalAnnualSalaries = ((total + value) / 12);
    console.log(totalAnnualSalaries);
    let el = $('#totalMonthlyOut');
    //empty totalMonthlyOut
    el.empty();
    //append in updated monthly total
    $('#totalMonthlyOut').append(`<div>Total Monthly: ${totalAnnualSalaries}</div>`);
    //if (totalAnnualSalaries > 20000){
       // $('#totalMonthlyOut').toggleClass('highlight');
    //}//end if statement
 }// end updateDom function
 */


 