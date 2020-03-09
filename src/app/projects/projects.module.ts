import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project-detail/project.component';
import { ProjectsComponent } from './project-list/projects.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ProjectsComponent, ProjectComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class ProjectsModule {}
