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

import {
  SavedObjectsClientContract,
  ChromeStart,
  OverlayStart,
} from 'opensearch-dashboards/public';
import { DataPublicPluginStart, IndexPatternsContract } from '../../../../plugins/data/public';
import { SavedObjectLoader } from '../../../../plugins/saved_objects/public';
import { createSavedDashboardClass } from './saved_dashboard';

interface Services {
  savedObjectsClient: SavedObjectsClientContract;
  indexPatterns: IndexPatternsContract;
  search: DataPublicPluginStart['search'];
  chrome: ChromeStart;
  overlays: OverlayStart;
}

/**
 * @param services
 */
export function createSavedDashboardLoader(services: Services) {
  const SavedDashboard = createSavedDashboardClass(services);
  return new SavedObjectLoader(SavedDashboard, services.savedObjectsClient);
}
