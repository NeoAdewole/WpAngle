import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../model/project';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    data: Observable<Project>;
    defaultImage = environment.assetsUrl + 'Iconsocial.png';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ) {}

    ngOnInit() {
        this.getProject();
    }

    getProject() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data = this.projectsService.getProject(id);
        console.log(this.data);
        // .subscribe();
        // console.log(this.data).filter((project: any) => {

        // });
        // throw new Error('Method not implemented.');
    }

    onBack(): void {
        this.router.navigate(['/projects']);
    }
}
