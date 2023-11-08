import { Body, Controller,Get, Post, Delete, Param, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmpleadoModel } from './empleadoModel';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly servicio: EmployeeService) {}

    @Get()
    getemployee() {
      return this.servicio.getEmployee();
    }

    @Post()
    agregarEmpleado(@Body() empleado: EmpleadoModel){
      return this.servicio.agregarEmpleado(empleado);
    }

    @Put(":id")
    modificarSalario(@Body() modelo: EmpleadoModel, @Param("id") id: number){
      return this.servicio.modificarEmpleado(id, modelo);
    }

    @Delete(":id")
    eliminarEmpleado(@Param("id")id: number){
      return this.servicio.eliminarEmpleado(id);
    }
}
