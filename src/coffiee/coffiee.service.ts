import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto/create-coffee.dto';
import { CoffeeEntity } from 'src/coffees/entities/coffiee.entity';

@Injectable()
export class CoffieeService 
{
    private coffieeDataObj : CreateCoffeeDto[] = [
        {
          
            name: 'JKM',
            brand: 'JKM',
            flavors: ['JKM' , 'JKM', 'JKM']
        }
        
    ]
    private coffieeData:CoffeeEntity[] = [
        {
            id:1,
            name: 'ABC',
            brand: 'ABC',
            flavors: ['ABC' , 'DEF', 'GHI']
        },
        {
            id:2,
            name: 'DEF',
            brand: 'DEF',
            flavors: ['ABC' , 'DEF', 'GHI']
        },
        {
            id:3,
            name: 'GHI',
            brand: 'GHI',
            flavors: ['ABC' , 'DEF', 'GHI']
        }
    ];

  
  findsAll() {
    return this.coffieeData;
  }

  findsOne(id: number) {
    var value = this.coffieeData.find(i=> i.id === +id);
    
    if(value)
    {
        return value;
    }
    throw new HttpException(`Coffiee #${id} not found`, HttpStatus.NOT_FOUND)
  }
  
 
  create(createCoffeeDto: any) {
     this.coffieeData.push(createCoffeeDto);
     return createCoffeeDto;
  }
 
  updateAll( id: number , updateCoffeDto: any)
  {
    const existCoffie = this.findsOne(id);
    if(existCoffie)
    {
      //  this.coffieeData.
    }
 
  }

  delete(id: number)
  {
    const existCheck = this.coffieeData.findIndex(item=> item.id === +id)
    if(existCheck)
    {
        this.coffieeData.splice(existCheck , 1)
    }
    return `This Action Deletes #${id} of the coffiee`
  }
}
