import React from 'react';

import { LookerNodeSDK } from '@looker/sdk/lib/node'
(async () => {
  // create a Node SDK object for API 3.1
  const sdk = LookerNodeSDK.init31()
  // retrieve your user account to verify correct credentials
  const me = await sdk.ok(sdk.me(
    "id, first_name, last_name, display_name, email, personal_space_id, home_space_id, group_ids, role_ids"))
  console.log({me})
  // make any other calls to the Looker SDK
  const dashboards = await sdk.ok(
    sdk.search_dashboards({title: 'My SDK dashboard'})
  )
  if (dashboards.length === 0) {
    console.log('Dashboard not found')
  }
  const [ dashboard ] = dashboards
  // do stuff with dashboard
 
  await sdk.authSession.logout()
  if (!sdk.authSession.isAuthenticated()) {
    console.log('Logout successful')
  }
})()