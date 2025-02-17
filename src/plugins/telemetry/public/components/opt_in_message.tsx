/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
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

import * as React from 'react';
import { EuiLink } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';
import { PRIVACY_STATEMENT_URL } from '../../common/constants';

export class OptInMessage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <FormattedMessage
          id="telemetry.telemetryBannerDescription"
          defaultMessage="Want to help us improve the OpenSearch Stack? Data usage collection is currently disabled. Enabling data usage collection helps us manage and improve our products and services. See our {privacyStatementLink} for more details."
          values={{
            privacyStatementLink: (
              <EuiLink href={PRIVACY_STATEMENT_URL} target="_blank" rel="noopener">
                <FormattedMessage
                  id="telemetry.welcomeBanner.telemetryConfigDetailsDescription.telemetryPrivacyStatementLinkText"
                  defaultMessage="Privacy Statement"
                />
              </EuiLink>
            ),
          }}
        />
      </React.Fragment>
    );
  }
}
