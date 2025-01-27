import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @MessagePattern({ cmd: 'createPost' })
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @MessagePattern({ cmd: 'findAllPosts' })
  findAll() {
    return this.postsService.findAll();
  }

  @MessagePattern({ cmd: 'findOnePost' })
  findOne(@Payload() id: number) {
    return this.postsService.findOne(id);
  }

  @MessagePattern({ cmd: 'updatePost' })
  update(@Payload() updatePostDto: UpdatePostDto) {
    return this.postsService.update(updatePostDto.id, updatePostDto);
  }

  @MessagePattern({ cmd: 'removePost' })
  remove(@Payload() id: number) {
    return this.postsService.remove(id);
  }
}
