// Disable loading of the configuration from the default config.yml file
window.CMS_MANUAL_INIT = true;
// Initialize NetlifyCMS with the JS configuration objext
window.CMS_CONFIGURATION = config;

import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import pagesCollection from "./collections/pages";
import CMS from "netlify-cms";
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
      cloud_name: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.PUBLIC_CLOUDINARY_API_KEY,
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
  collections: [
    // Include the collections imported from cms/config/collections
    pagesCollection,
  ],
};



CMS.init({ config });
// Register the custom editor component

export default config;
