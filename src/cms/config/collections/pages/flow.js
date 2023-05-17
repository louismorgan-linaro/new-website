import sectionTypes from './sections'

const flowFields = [
    {
        label: "Row Component",
        name: "row_component",
        widget: "select",
        default: "Main Content",
        options: [
          "Main Content",
          "Container",
          "Full Width",
          "Custom"
        ],
        hint: "Select a row type to get started. Defaults to MainContent which will display the 'Page Content' section inside a container."
      },
      {
        label: "Custom Component",
        name: "source",
        widget: "string",
        hint: "Enter the name of a component to use as a custom include.",
        required: false
      },
      {
        label: "Absolute Image",
        name: "absolute_image",
        widget: "object",
        required: false,
        fields: [
          {
            label: "Image",
            name: "image",
            widget: "image",
            required: false
          },
          {
            label: "Image Alt",
            name: "image_alt",
            widget: "string",
            required: false
          },
          {
            label: "Image style",
            name: "style",
            widget: "string",
            required: false
          }
        ]
      },
      {
        label: "Row Style",
        name: "style",
        widget: "string",
        hint: "add tailwindcss classes here to customize styling",
        required: false
      },
      {
        label: "Sections",
        name: "sections",
        widget: "list",
        typeKey: "section_component",
        required: false,
        hint: "Add sections to your flow row (e.g Title, Text, Two Columns, Slider)",
        types: [
          {
            label: "Section Component",
            name: "section_component",
            widget: "select",
            multiple: false,
            required: false,
            options: [
              "Title",
              "Members",
              "Text",
              "Buttons",
              "Block",
              "Custom",
              "Tabs",
              "FeatureBlock",
              "TwoColumn",
              "Columns",
              "Slider",
              "Youtube"
            ]
          },
          ...sectionTypes,
        ],
      }
]

export default flowFields