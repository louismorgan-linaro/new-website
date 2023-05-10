// Import the configuration of each collection from cms/config/collections
import pagesCollection from "./collections/pages";

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
      cloud_name: "dktnymsbc",
      api_key: "996477583627513",
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

export default config;
