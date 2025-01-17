import { Component, OnInit } from '@angular/core';
import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import * as mutations from '../../graphql/mutations';
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

import { CreateEmployeeMutation } from '../API.service';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { APIService, Employee } from '../API.service';
Amplify.configure(awsconfig);
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  public createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
    });
  }



  public onCreate(employee: Employee) {
    // this.api
    //   .CreateEmployee(employee)
    //   .then(() => {
    //     console.log('employee created');
    //     this.createForm.reset();
    //   })
    //   .catch((e) => {
    //     console.log('error creating employee..', e);
    //   });
    API.graphql(graphqlOperation(createEmployee, { input: todo }));
      API.graphql<GraphQLQuery<CreateEmployeeMutation>>({
        query: mutations.createEmployee,
        variables: { input: employee },
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM
      }).then(()=>{
        console.log('employee created');
        this.createForm.reset();
      }).catch((e) => {
        console.log('error creating employee..', e);
      });

  }
}
