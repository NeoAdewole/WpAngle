import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from './model/project';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    baseUrl;
    defaultImage = environment.baseTokenUrl + environment.assetsUrl + 'Iconsocial.png';
    constructor(private http: HttpClient) {}

    // list: any = [];

    public getProjects(): Observable<Project[]> {
        return this.http
            .get<Project[]>(
                environment.baseTokenUrl+'wp-json/wp/v2/projects?_embed'
                // 'http://localhost/portfolio/wp-json/wp/v2/projects?_embed'
            )
            .pipe(
                map(projects => {
                    const newProjects: Project[] = [];
                    projects.forEach((project: any) => {
                        const newProject: Project = { ...project };
                        newProject.featured_image_src =
                            project._embedded['wp:featuredmedia'][0].source_url || this.defaultImage;
                        // console.log(newProject);
                        newProjects.push(newProject);
                    });
                    return newProjects;
                }),
                catchError(this.handleError)
            );
    }

    public getProject(id: number): Observable<Project> {
        return this.getProjects().pipe(
            map(projects => {
                console.log('Project is: ' + id);
                return projects.filter(p => p.id === id)[0];
            })
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
            console.log(errorMessage);
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
