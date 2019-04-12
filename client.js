console.log('js');
 $(document).ready(readyNow);

let employeeArray = [];

 function readyNow(){
    console.log('jquery is ready');
    buttonClick();
 }//end readyNow

 function buttonClick(){
    $('#submitButton').on('click', addNewEmployee);
 }//end buttonClick

 function addNewEmployee(){
    console.log('in addNewEmployee');
    
 }//end addNewEmployee