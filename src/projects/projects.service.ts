import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  findAll(): Promise<Project[]> {
    return this.projectsRepository.find();
  }

  create(createProjectInput: CreateProjectInput): Promise<Project> {
    const project = this.projectsRepository.create(createProjectInput);
    return this.projectsRepository.save(project);
  }

  async update(updateProjectInput: UpdateProjectInput): Promise<Project> {
    const project = await this.projectsRepository.findOneBy({
      id: updateProjectInput.id,
    });

    if (!project) {
      throw new NotFoundException(
        `Project with id ${updateProjectInput.id} not found`,
      );
    }

    Object.assign(project, updateProjectInput);
    return this.projectsRepository.save(project);
  }
}
