import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
export declare class ProjectsService {
    private projectsRepository;
    constructor(projectsRepository: Repository<Project>);
    findAll(): Promise<Project[]>;
    create(createProjectInput: CreateProjectInput): Promise<Project>;
}
