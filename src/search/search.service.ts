// src/services/item.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entity/search.entity';
import { CreateItemDto } from './dto/search.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(itemDto: CreateItemDto): Promise<Item> {
    const item = this.itemRepository.create(itemDto);
    return await this.itemRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  // Implement search and filter methods here
}
