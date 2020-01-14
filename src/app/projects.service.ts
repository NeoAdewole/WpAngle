import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from './model/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor(private http: HttpClient) {}

    public getProjects(): Observable<Project[]> {
        return this.http
            .get<Project[]>(
                'http://localhost/portfolio/wp-json/wp/v2/projects?_embed'
            )
            .pipe(
                // tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }
    public getProject(slug: string): Observable<Project> {
        // map(epics => epics.filter(epic => epic.id === id)[0]
        return this.getProjects().pipe(
            map(projects => {
                return projects.filter(p => p.slug === slug)[0];
            })
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
