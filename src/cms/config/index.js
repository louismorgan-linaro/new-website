window.CMS_MANUAL_INIT = true;
// Usage with import from npm package
import CMS, { init } from "netlify-cms";

// Initialize NetlifyCMS with the JS configuration objext

import pagesCollection from "./collections/pages";
import "netlify-cms/dist/cms.css";
// Build the Netlify JS configuration object
const config = {
  backend: {
    name: "github",
    repo: "louismorgan-linaro/new-website",
    use_graphql: false,
    branch: "development",
    open_authoring: true,
    preview_context: "Deploy preview",
  },
  // It is not required to set `load_config_file` if the `config.yml` file is
  // missing, but will improve performance and avoid a load error.
  load_config_file: false,
  publish_mode: "editorial_workflow",
  media_library: {
    name: "cloudinary",
    output_file_name_only: true,
    config: {
      cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
      default_transformations: {
        fetch_format: "auto",
        width: 160,
        quality: "auto",
        crop: "scale",
      },
    },
  },
  media_folder: "src/assets",
  public_folder: "/assets",
  collections: [pagesCollection],
};

// Make the config object available on the global scope for processing by
// subsequent scripts.Don't rename this to `CMS_CONFIG` - it will cause the
// config to be loaded without proper processing.
window.CMS_CONFIGURATION = config;

init({ config });
// Register the custom editor component

export default config;
