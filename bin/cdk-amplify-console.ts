#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkAmplifyConsoleStack } from '../lib/cdk-amplify-console-stack';

const app = new cdk.App();
new CdkAmplifyConsoleStack(app, 'CdkAmplifyConsoleStack');
