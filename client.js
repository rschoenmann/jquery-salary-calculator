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
    </tr>`)
 }//end displayInputs function