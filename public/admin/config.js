window.CMS_MANUAL_INIT = true;
window.CMS_CONFIGURATION = config;

import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import config from './config'
// Disable loading of the configuration from the default config.yml file
// Initialize NetlifyCMS with the JS configuration objext
CMS.init({ config });
// Register the custom editor component