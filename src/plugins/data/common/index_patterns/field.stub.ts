/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import { IFieldType } from '.';

export const stubFields: IFieldType[] = [
  {
    name: 'machine.os',
    esTypes: ['text'],
    type: 'string',
    aggregatable: false,
    searchable: false,
    filterable: true,
  },
  {
    name: 'machine.os.raw',
    type: 'string',
    esTypes: ['keyword'],
    aggregatable: true,
    searchable: true,
    filterable: true,
  },
  {
    name: 'not.filterable',
    type: 'string',
    esTypes: ['text'],
    aggregatable: true,
    searchable: false,
    filterable: false,
  },
  {
    name: 'bytes',
    type: 'number',
    esTypes: ['long'],
    aggregatable: true,
    searchable: true,
    filterable: true,
  },
  {
    name: '@timestamp',
    type: 'date',
    esTypes: ['date'],
    aggregatable: true,
    searchable: true,
    filterable: true,
  },
  {
    name: 'clientip',
    type: 'ip',
    esTypes: ['ip'],
    aggregatable: true,
    searchable: true,
    filterable: true,
  },
  {
    name: 'bool.field',
    type: 'boolean',
    esTypes: ['boolean'],
    aggregatable: true,
    searchable: true,
    filterable: true,
  },
  {
    name: 'nested.field.example',
    type: 'number',
    esTypes: ['float'],
    aggregatable: true,
    searchable: true,
    filterable: true,
    subType: {
      nested: {
        path: 'nested.field.example',
      },
    },
    // This spec is necessary to build the nested dsl.
    spec: {
      name: 'nested.field.example',
      type: 'number',
      esTypes: ['float'],
      aggregatable: true,
      searchable: true,
      subType: {
        nested: {
          path: 'nested.field.example',
        },
      },
    },
  },
];
