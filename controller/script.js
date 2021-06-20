
let employeeInfo = [

    {
        empName: 'Mahesh',
        empAge: 28,
        empGender: 'Male',
        empDesignation: 'Senior QA',
        empSalary: 35000.00,
        empCompany: 'NorthAlley'

    },
    {
        empName: 'Suresh',
        empAge: 27,
        empGender: 'Male',
        empDesignation: 'Team Lead',
        empSalary: 45000.00,
        empCompany: 'Quisex'

    },{
        empName: 'Aditya',
        empAge: 28,
        empGender: 'Male',
        empDesignation: 'Senior Developer',
        empSalary: 45000.00,
        empCompany: 'BBQ'

    }
];
    if(localStorage.getItem("employeeInfo") == null){

        let stringEmployeeInfo = JSON.stringify(employeeInfo);
        localStorage.setItem("employeeInfo", stringEmployeeInfo);
    }



function display(empInfo){

    let tabledata = "";
    let srno =  1;

    empInfo.forEach(function(employee, index){

    let currentRow = `<tr>
    <td>${index + 1}</td>
    <td>${employee.empName}</td>
    <td>${employee.empAge}</td>
    <td>${employee.empGender}</td>
    <td>${employee.empDesignation}</td>
    <td>${employee.empSalary}</td>
    <td>${employee.empCompany}</td>
    <td>
        <button onclick='deleteEmployee(${index})'>Delete</button>
        <button onclick='showModal(event, ${index})'>Update</button>
    </td>
    </tr>`
    tabledata += currentRow;
    srno++;

    })
    document.getElementsByClassName('tdata')[0].innerHTML = tabledata;
}

display(employeeInfo);

function clearAll(){

    document.getElementById('employeeName').value = "";
    document.getElementById('empAge').value = "";
    document.getElementById('empGender').value = "";
    document.getElementById('empDesignation').value = "";
    document.getElementById('empSalary').value = "";
    document.getElementById('empCompany').value = "";
}

function addEmployee(event){

    event.preventDefault();
    let newEmployee = {};
    let empName = document.getElementById('employeeName').value;
    let empAge = document.getElementById('empAge').value;
    let empGender = document.getElementById('empGender').value;
    let empDesignation = document.getElementById('empDesignation').value;
    let empSalary = document.getElementById('empSalary').value;
    let empCompany = document.getElementById('empCompany').value;

    newEmployee.empName = empName;
    newEmployee.empAge = Number(empAge);
    newEmployee.empGender = empGender;
    newEmployee.empDesignation = empDesignation;
    newEmployee.empSalary = Number(empSalary);
    newEmployee.empCompany = empCompany;

   

    let employeeInfo =  JSON.parse(localStorage.getItem("employeeInfo"));
    employeeInfo.push(newEmployee);
    localStorage.setItem("employeeInfo", JSON.stringify(employeeInfo));
    display(employeeInfo);
    clearAll();

    console.log(empName, empAge, empGender, empDesignation, empSalary, empCompany);
    return false;
}

console.log(employeeInfo);

function searchEmployee(){

    let searchItem = document.getElementById('empSearch').value;

    let searchName = employeeInfo.filter(function(employee){

        return (employee.empName.toUpperCase().indexOf(searchItem.toUpperCase()) != -1);
    })

    display(searchName);
    
}


function deleteEmployee(index){

    employeeInfo.splice(index, 1);
    display(employeeInfo);
}

let getIndexValue;

function copyEmployee(index){

    getIndexValue =  index;
    let emp = employeeInfo[index]
    console.log(emp);
    document.getElementById('updateEmployeeName').value = emp.empName;
    document.getElementById('updateEmpAge').value = emp.empAge;
    document.getElementById('updateEmpGender').value = emp.empGender;
    document.getElementById('updateEmpDesignation').value = emp.empDesignation;
    document.getElementById('updateEmpSalary').value = emp.empSalary;
    document.getElementById('updateEmpCompany').value = emp.empCompany;
}

function updateEmployee(event){

    event.preventDefault();
    let updateEmp = employeeInfo[getIndexValue];
    let empName = document.getElementById('updateEmployeeName').value;
    let empAge = document.getElementById('updateEmpAge').value;
    let empGender = document.getElementById('updateEmpGender').value;
    let empDesignation = document.getElementById('updateEmpDesignation').value;
    let empSalary = document.getElementById('updateEmpSalary').value;
    let empCompany = document.getElementById('updateEmpCompany').value;

    updateEmp.empName = empName;
    updateEmp.empAge = Number(empAge);
    updateEmp.empGender = empGender;
    updateEmp.empDesignation = empDesignation;
    updateEmp.empSalary = Number(empSalary);
    updateEmp.empCompany = empCompany;

    display(employeeInfo);
}