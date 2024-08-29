"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const projects_service_1 = require("./projects.service");
const project_entity_1 = require("./project.entity");
const create_project_input_1 = require("./dto/create-project.input");
let ProjectsResolver = class ProjectsResolver {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    projects() {
        return this.projectsService.findAll();
    }
    createProject(createProjectInput) {
        return this.projectsService.create(createProjectInput);
    }
};
exports.ProjectsResolver = ProjectsResolver;
__decorate([
    (0, graphql_1.Query)(() => [project_entity_1.Project]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsResolver.prototype, "projects", null);
__decorate([
    (0, graphql_1.Mutation)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Args)('createProjectInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_input_1.CreateProjectInput]),
    __metadata("design:returntype", void 0)
], ProjectsResolver.prototype, "createProject", null);
exports.ProjectsResolver = ProjectsResolver = __decorate([
    (0, graphql_1.Resolver)(() => project_entity_1.Project),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsResolver);
//# sourceMappingURL=projects.resolver.js.map