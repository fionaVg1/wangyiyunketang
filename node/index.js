#!/usr/bin/env node
const semver = require('semver');
const packageInfo = require('../package.json');
const fs = require('fs');
const targetVersion = semver.inc(packageInfo.version);
packageInfo.version = targetVersion;