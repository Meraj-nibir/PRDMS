import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './search.service';
import { CreateItemDto } from './dto/search.dto';
import { Item } from './entity/search.entity';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  // Add search and filter endpoints here
}
