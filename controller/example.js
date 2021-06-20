function showModal(event, index){

    document.getElementsByClassName("container")[0].style.display="block";
    
    // let emp = employeeInfo[index]
    // console.log(emp);
    // document.getElementById('updateEmployeeName').value = emp.empName;
    // document.getElementById('updateEmpAge').value = emp.empAge;
    // document.getElementById('updateEmpGender').value = emp.empGender;
    // document.getElementById('updateEmpDesignation').value = emp.empDesignation;
    // document.getElementById('updateEmpSalary').value = emp.empSalary;
    // document.getElementById('updateEmpCompany').value = emp.empCompany;

    copyEmployee(index);
}

function hidemodal(event){
    
    console.log(event.target.className);
    if(event.target.className == "container"){
         document.getElementsByClassName("container")[0].style.display="none";
    }

}