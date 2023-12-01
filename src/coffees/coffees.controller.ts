import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CoffieeService } from 'src/coffiee/coffiee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffieService: CoffieeService)
  {
    
  }
  @Get('flavors')
  findsAll(@Res() response) {
    response.status(200).send(this.coffieService.findsAll());
  }
  
  @Get('flavor')
  findsAllByPagination(@Res() response, @Query() paginationQuery) {
    const {limit , offset} = paginationQuery;
    response.status(200).send(`This is Get All Coffiee using pagination that is the limit: ${limit} and offset: ${offset}`);
  }

  @Get(':id')
  findsOne(@Param('id') id: number) {
    
    console.log(typeof id); 
    return this.coffieService.findsOne(id);
   // return `This is no #${id} Coffie`;
  }
  
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof Cre)
    return this.coffieService.create(createCoffeeDto);
  }
  @Post('/name')
  @HttpCode(HttpStatus.GONE)
  createName(@Body('name') createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
  }
 
  @Put(':id')
  updateAll(@Param('id') id: number , @Body() updateCoffeedto: UpdateCoffeeDto)
  {
   return this.coffieService.updateAll(id, updateCoffeedto);
     //return `This Action Updates #${id} of the coffiee`
  }
  @Patch(':id')
  updatePatially(@Param('id') id: number , @Body() updateCoffeedto: UpdateCoffeeDto)
  {
    return this.coffieService.updateAll(id, updateCoffeedto);
   // return `This Action Patch #${id} of the coffiee`
  }
  @Delete(':id')
  delete(@Param('id') id: number)
  {
    return this.coffieService.delete(id);
   // return `This Action Deletes #${id} of the coffiee`
  }
}
