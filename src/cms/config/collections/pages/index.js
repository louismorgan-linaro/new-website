import { collectionDefaults } from "../../patterns";
import flowFields from './flow'

const pagesCollection = {
  ...collectionDefaults("Pages", "pages"),
  label: "Pages",
  name: "pages",
  folder: "src/content/pages",
  identifier_field: "permalink",
  summary: "{{fields.title}} - {{fields.permalink}}",
  editor: {
    preview: false
  },
  preview_path: "{{slug}}",
  format: "frontmatter",
  create: true,
  description: "This collection allows you to add/edit/delete pages on Linaro.org",
  slug: "{{permalink}}",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string"
    },
    {
      label: "Description",
      name: "description",
      widget: "text"
    },
    {
      label: "URL",
      name: "permalink",
      widget: "string"
    },
    {
      label: "Keywords",
      name: "keywords",
      widget: "list",
      allow_add: true,
      hint: "Add meta tag keywords"
    },
    {
      label: "Page Tag",
      name: "tag",
      widget: "string",
      hint: "Tag pages to create a collection of related pages. If you're not sure then leave this blank.",
      required: false
    },
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "flow",
      required: true
    },
    {
      label: "Flow",
      name: "flow",
      widget: "list",
      required: false,
      files: flowFields
    }
  ]
};

export default pagesCollection;