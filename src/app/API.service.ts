/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
};

export type CreateEmployeeInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
};

export type ModelEmployeeConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Employee = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateEmployeeInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  or?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    address?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            address
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  OnCreateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > {
    const statement = `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput, $owner: String) {
        onCreateEmployee(filter: $filter, owner: $owner) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
    >;
  }

  OnUpdateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > {
    const statement = `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput, $owner: String) {
        onUpdateEmployee(filter: $filter, owner: $owner) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
    >;
  }

  OnDeleteEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > {
    const statement = `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput, $owner: String) {
        onDeleteEmployee(filter: $filter, owner: $owner) {
          __typename
          id
          firstName
          lastName
          address
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
    >;
  }
}
