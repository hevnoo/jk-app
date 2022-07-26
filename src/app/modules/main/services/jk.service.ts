// import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzTableQueryParams } from 'ng-zorro-antd/table';

interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

  
  @Injectable({ providedIn: 'root' })
  export class JkService {
    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(
      pageIndex: number,
      pageSize: number,
      sortField: string | null,
      sortOrder: string | null,
      filters: Array<{ key: string; value: string[] }>
    ): Observable<{ results: RandomUser[] }> {
      let params = new HttpParams()
        .append('page', `${pageIndex}`)
        .append('results', `${pageSize}`)
        .append('sortField', `${sortField}`)
        .append('sortOrder', `${sortOrder}`);
      filters.forEach(filter => {
        filter.value.forEach(value => {
          params = params.append(filter.key, value);
        });
      });
      return this.http
        .get<{ results: RandomUser[] }>(`${this.randomUserUrl}`, { params })
        .pipe(catchError(() => of({ results: [] })));
    }
  
    constructor(private http: HttpClient) {}
  }
