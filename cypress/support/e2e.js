// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import '@cypress/grep'; // Add this line to initialize grep

import { setBaseUrl } from "../config/config.js";
setBaseUrl();
import { TAGS, LOG_STYLES } from "../config/constants/tags.js";
// Make constants globally available
global.TAGS = TAGS;
global.LOG_STYLES = LOG_STYLES;
