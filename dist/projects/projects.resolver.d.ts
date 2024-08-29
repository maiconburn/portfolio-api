import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
export declare class ProjectsResolver {
    private projectsService;
    constructor(projectsService: ProjectsService);
    projects(): Promise<Project[]>;
    createProject(createProjectInput: CreateProjectInput): Promise<Project>;
}
