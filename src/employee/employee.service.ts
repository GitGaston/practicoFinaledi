import { Injectable } from '@nestjs/common';
import { EmpleadoModel } from './empleadoModel';

@Injectable()
export class EmployeeService {
    employees = [];

    constructor () {
      let empleado = {
        "id": 1,
        "nombre": "Gaston Villalba",
        "telefono": "2494694209",
        "salario": "250000",
      }
      this.employees.push(empleado);

      empleado = {
        "id": 2,
        "nombre": "Maria Dick Crovo",
        "telefono": "2494360691",
        "salario": "300000",
      }
      this.employees.push(empleado);

      empleado = {
        "id": 3,
        "nombre": "Daniel Apley",
        "telefono": "2494123598",
        "salario": "150000",
      }
      this.employees.push(empleado);

      empleado = {
        "id": 4,
        "nombre": "Claudio Regarse",
        "telefono": "2494256578",
        "salario": "300000",
      }
      this.employees.push(empleado);
    }

    getEmployee (){
      return this.employees;
    }

    agregarEmpleado (empleadoModel: EmpleadoModel){
      let empleado = {
        "id":empleadoModel.id,
        "nombre":empleadoModel.nombre,
        "telefono":empleadoModel.telefono,
        "salario":empleadoModel.salario,
    }
    this.employees.push(empleado);
    return "modificacion realizada con exito";
  }

  modificarEmpleado(id: number, modelo: EmpleadoModel){
    let empleado = null;
    for(let i=0; i<this.employees.length;i++){
      if(this.employees[i].id==id){
        this.employees[i].salario=modelo.salario;
        return "El salario fue modificado"
      }
    }
    return "el empleado no existe"
  }

  eliminarEmpleado(id) {
    if(((id)>0)&&((id)<this.employees.length))
  {
this.employees.slice((id)-1,1)
return this.employees
}
else
{
  return "El empleado no existe"}
}
}
