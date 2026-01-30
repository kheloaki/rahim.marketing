/**
 * Statsig Feature Flags Configuration
 * 
 * Make sure to set your Statsig Server API Key in your environment variables:
 * STATSIG_SERVER_API_KEY=your_server_api_key_here
 * 
 * Get your API key from: https://console.statsig.com/
 */

import { statsigAdapter, type StatsigUser } from "@flags-sdk/statsig";
import { flag, dedupe } from "flags/next";
import type { Identify } from "flags";

export const identify = dedupe((async () => ({
  // implement the identify() function to add any additional user properties you'd like, see docs.statsig.com/concepts/user
  // You can customize this to use actual user data from your session/auth system
  userID: "1234" //for example, set userID
})) satisfies Identify<StatsigUser>);

export const createFeatureFlag = (key: string) => flag<boolean, StatsigUser>({
  key,
  adapter: statsigAdapter.featureGate((gate) => gate.value, {exposureLogging: true}),
  identify,
});

