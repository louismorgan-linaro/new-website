const sectionTypes = [
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
        {
          label: "Text",
          name: "Text",
          summary: "{{fields.text_content.text}}",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "string",
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "Text Section Content",
              name: "text_content",
              widget: "object",
              fields: [
                {
                  label: "Text",
                  widget: "markdown",
                  name: "text"
                }
              ]
            }
          ]
        },
        {
          label: "Title",
          name: "Title",
          typeKey: "section_component",
          summary: "{{fields.title_content.text}}",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "select",
              options: [
                "zoom",
                "grayscale",
                "fixed",
                "block_row",
                "text-center",
                "text-white"
              ],
              multiple: true,
              hint: "add tailwindcss classes here to customize styling",
              required: false
            },
            {
              label: "Title Section Content",
              name: "title_content",
              widget: "object",
              fields: [
                {
                  label: "Text",
                  name: "text",
                  required: false,
                  widget: "string",
                  hint: "Text for your title"
                },
                {
                  label: "Title Size",
                  name: "size",
                  widget: "select",
                  required: false,
                  options: [
                    {
                      label: "1",
                      value: "h1"
                    },
                    {
                      label: "2",
                      value: "h2"
                    },
                    {
                      label: "3",
                      value: "h3"
                    },
                    {
                      label: "4",
                      value: "h4"
                    },
                    {
                      label: "5",
                      value: "h5"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "Blocks",
          name: "Block",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "select",
              options: [
                "zoom",
                "grayscale",
                "fixed",
                "block_row",
                "text-center",
                "text-white"
              ],
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "Blocks Section Content",
              name: "block_section_content",
              widget: "object",
              hint: "Content for a blocks section",
              required: false,
              fields: [
                {
                  label: "Block Width",
                  name: "item_width",
                  widget: "select",
                  required: false,
                  options: [
                    "3",
                    "4",
                    "6"
                  ]
                },
                {
                  label: "Blocks",
                  name: "blocks",
                  widget: "list",
                  hint: "Add the content for your blocks",
                  required: false,
                  fields: [
                    {
                      label: "Block Title",
                      name: "title",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Block URL",
                      name: "url",
                      required: false,
                      widget: "string",
                      hint: "Provide a url for your block to link to"
                    },
                    {
                      label: "Block Modal Content",
                      name: "modal_content",
                      required: false,
                      widget: "markdown"
                    },
                    {
                      label: "Block Background Image",
                      name: "background_image",
                      widget: "image",
                      required: false,
                      hint: "Provide a background image for your block"
                    },
                    {
                      label: "Block Content Image",
                      name: "image",
                      widget: "image",
                      required: false,
                      hint: "An image to be displayed inside the block"
                    },
                    {
                      label: "Block Text",
                      name: "description",
                      widget: "markdown",
                      required: false,
                      hint: "Provide text content for your block"
                    },
                    {
                      label: "Block Style",
                      name: "style",
                      widget: "string",
                      required: false,
                      hint: "CSS classes to be applied to a given block."
                    },
                    {
                      label: "Block Content Style",
                      name: "content_style",
                      widget: "string",
                      required: false,
                      hint: "CSS classes to be applied to a given blocks content."
                    },
                    {
                      label: "Block Buttons",
                      name: "buttons",
                      widget: "list",
                      required: false,
                      identifier_field: "url",
                      fields: [
                        {
                          label: "Button Title",
                          name: "title",
                          widget: "string",
                          required: false
                        },
                        {
                          label: "Button URL",
                          name: "url",
                          widget: "string",
                          required: false
                        },
                        {
                          label: "Button Icon",
                          name: "icon",
                          required: false,
                          widget: "string",
                          hint: "Format is fa fa-icon-name - see fontawesome 4.7 icons"
                        },
                        {
                          label: "Button Style",
                          name: "style",
                          widget: "string",
                          required: false,
                          hint: "btn-primary, btn-secondary, btn-danger, btn-warning"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "Tabs",
          name: "Tabs",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              hint: "add tailwindcss classes here to customize styling",
              widget: "string",
              multiple: true,
              required: false
            },
            {
              label: "Tabs Section Content",
              name: "tabs",
              widget: "list",
              hint: "Content for a tabs section",
              identifier_field: "title",
              required: false,
              fields: [
                {
                  label: "Tab Title",
                  name: "title",
                  widget: "string",
                  required: false
                },
                {
                  label: "Tab Content",
                  name: "content",
                  widget: "markdown",
                  hint: "Markdown content for your tab.",
                  required: false
                }
              ]
            }
          ]
        },
        {
          label: "Columns",
          name: "Columns",
          widget: "object",
          fields: [
            {
              label: "Section Anchor",
              name: "section_anchor",
              widget: "string",
              required: false
            },
            {
              label: "Section Anchor Margin Top",
              name: "section_anchor_margin",
              widget: "string",
              required: false
            },
            {
              label: "XS Col Size",
              name: "xs",
              widget: "number",
              required: true,
              default: 12
            },
            {
              label: "SM Col Size",
              name: "sm",
              widget: "number",
              required: true,
              default: 6
            },
            {
              label: "Md Col Size",
              name: "md",
              widget: "number",
              required: true,
              default: 6
            },
            {
              label: "LG Col Size",
              name: "lg",
              widget: "number",
              required: true,
              default: 6
            },
            {
              label: "XL Col Size",
              name: "xl",
              widget: "number",
              required: true,
              default: 6
            },
            {
              label: "Columns",
              name: "columns",
              widget: "list",
              identifier_field: "text",
              required: false,
              fields: [
                {
                  label: "XS Col Size",
                  name: "xs",
                  widget: "number",
                  required: false,
                  default: 12
                },
                {
                  label: "SM Col Size",
                  name: "sm",
                  widget: "number",
                  required: false,
                  default: 6
                },
                {
                  label: "Md Col Size",
                  name: "md",
                  widget: "number",
                  required: false,
                  default: 6
                },
                {
                  label: "LG Col Size",
                  name: "lg",
                  widget: "number",
                  required: false,
                  default: 6
                },
                {
                  label: "XL Col Size",
                  name: "xl",
                  widget: "number",
                  required: false,
                  default: 6
                },
                {
                  label: "Column Title",
                  name: "title",
                  widget: "string",
                  required: false
                },
                {
                  label: "Column Text",
                  name: "text",
                  widget: "markdown",
                  hint: "Markdown text content.",
                  required: false
                },
                {
                  label: "Column Style",
                  name: "style",
                  widget: "string",
                  hint: "Space separte css classes",
                  required: false
                },
                {
                  label: "Column Icon",
                  name: "icon",
                  widget: "image",
                  required: false
                },
                {
                  label: "Custom Include",
                  name: "custom_include",
                  widget: "string",
                  required: false
                }
              ]
            }
          ]
        },
        {
          label: "Feature Block",
          type: "Feature Block",
          name: "FeatureBlock",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "string",
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "Feature Block Section Content",
              name: "feature_block_content",
              widget: "object",
              hint: "Feature Block Section Content",
              required: false,
              fields: [
                {
                  label: "Position",
                  name: "position",
                  widget: "select",
                  options: [
                    "left",
                    "right"
                  ],
                  required: false,
                  hint: "Align your feature block media content to the left or the right."
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "text",
                  required: false,
                  hint: "Text content for your feature block"
                },
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: false,
                  hint: "The title for your feature block"
                },
                {
                  label: "Type",
                  name: "type",
                  widget: "select",
                  options: [
                    "youtube_video",
                    "image",
                    "slider"
                  ],
                  hint: "Select the media type for your feature block",
                  required: false
                },
                {
                  label: "Image Content",
                  name: "image_content_path",
                  widget: "image",
                  hint: "Select an image for your image type feature block",
                  required: false
                },
                {
                  label: "Video Content",
                  name: "youtube",
                  widget: "object",
                  required: false,
                  fields: [
                    {
                      label: "YouTube Video URL",
                      name: "url",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Poster Image",
                      name: "poster_image",
                      widget: "image",
                      required: false,
                      hint: "The image to be displayed before the video is played."
                    }
                  ]
                },
                {
                  label: "Feature block buttons",
                  name: "buttons",
                  widget: "list",
                  required: false,
                  fields: [
                    {
                      label: "Button Title",
                      name: "title",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Button URL",
                      name: "url",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Button Icon",
                      name: "icon",
                      required: false,
                      widget: "string",
                      hint: "Format is fa fa-icon-name - see fontawesome 4.7 icons"
                    },
                    {
                      label: "Button Style",
                      name: "class",
                      widget: "string",
                      required: false,
                      hint: "btn-primary, btn-secondary, btn-danger, btn-warning"
                    }
                  ]
                }
              ]
            },
            {
              label: "Slider Content",
              name: "SliderContent",
              widget: "object",
              hint: "The content details of a slider section",
              required: false,
              fields: [
                {
                  label: "Enable Lightbox",
                  name: "lightbox_enabled",
                  widget: "boolean",
                  required: false,
                  hint: "Allow slider images to show in a lightbox (popup)"
                },
                {
                  label: "Slide Delay",
                  name: "seconds_per_slide",
                  widget: "number",
                  required: false
                },
                {
                  label: "Enable Arrow Navigation",
                  name: "nav",
                  widget: "boolean",
                  required: false,
                  hint: "Toggle the arrow navigation on the slider"
                },
                {
                  label: "Enable Slider Dots",
                  name: "dots",
                  widget: "boolean",
                  required: false,
                  hint: "Toggle the slider dots"
                },
                {
                  label: "Mobile Items (XS)",
                  name: "xs_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Tablet Items (SM)",
                  name: "sm_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Small Desktop Items (MD)",
                  name: "md_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Desktop Items (LG)",
                  name: "lg_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Slider Items",
                  name: "items",
                  widget: "list",
                  required: false,
                  hint: "A list of items to display in the slider section",
                  fields: [
                    {
                      label: "Image",
                      name: "image",
                      widget: "image",
                      required: false
                    },
                    {
                      label: "Alt",
                      name: "alt",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Title",
                      name: "title",
                      widget: "string",
                      required: false
                    }
                  ]
                }
              ]
            },
            {
              label: "Slider Items Data Source",
              name: "source",
              widget: "string",
              required: false,
              hint: "A name of a Jekyll data file to use for the source of items"
            }
          ]
        },
        {
          label: "Two Column",
          name: "TwoColumn",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              hint: "add tailwind classes here to customize styling",
              widget: "string",
              required: false
            },
            {
              label: "Left Column",
              name: "left_column",
              widget: "object",
              hint: "Content for the left column",
              required: false,
              fields: [
                {
                  label: "Custom Size",
                  name: "custom_size",
                  widget: "text",
                  required: false,
                  hint: "The width of your section on desktop devices. The total width for both the left and right columns must add up to 12."
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                  hint: "Select an image.",
                  required: false
                },
                {
                  label: "Image alt",
                  name: "image_alt",
                  widget: "text",
                  hint: "Alt text for your image.",
                  required: false
                },
                {
                  label: "Style",
                  name: "style",
                  widget: "string",
                  hint: "add tailwind classes here to customize this element",
                  required: false
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "markdown",
                  hint: "Markdown text for your section.",
                  required: false
                },
                {
                  label: "Custom include",
                  name: "include",
                  widget: "text",
                  hint: "An optional html include for your section.",
                  required: false
                }
              ]
            },
            {
              label: "Right Column",
              name: "right_column",
              widget: "object",
              hint: "Content for the right column",
              required: false,
              fields: [
                {
                  label: "Custom Size",
                  name: "custom_size",
                  widget: "text",
                  required: false,
                  hint: "The width of your section on desktop devices. The total width for both the left and right columns must add up to 12."
                },
                {
                  label: "Image",
                  name: "image",
                  widget: "image",
                  hint: "Select an image.",
                  required: false
                },
                {
                  label: "Image alt",
                  name: "image_alt",
                  widget: "text",
                  hint: "Alt text for your image.",
                  required: false
                },
                {
                  label: "Style",
                  name: "style",
                  widget: "string",
                  hint: "add tailwind classes here to customize this element",
                  required: false
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "markdown",
                  hint: "Markdown text for your section.",
                  required: false
                },
                {
                  label: "Custom Component",
                  name: "include",
                  widget: "text",
                  hint: "Add a custom component to your section",
                  required: false
                }
              ]
            }
          ]
        },
        {
          label: "Carousel Slider",
          type: "Slider",
          name: "Slider",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "select",
              options: [
                "zoom",
                "grayscale",
                "fixed",
                "block_row",
                "text-center",
                "text-white"
              ],
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "Slider Section Content",
              name: "slider_content",
              widget: "object",
              hint: "The content details of a slider section",
              required: false,
              fields: [
                {
                  label: "Enable Lightbox",
                  name: "lightbox_enabled",
                  widget: "boolean",
                  required: false,
                  hint: "Allow slider images to show in a lightbox (popup)"
                },
                {
                  label: "Slide Delay",
                  name: "seconds_per_slide",
                  widget: "number",
                  required: false
                },
                {
                  label: "Enable Arrow Navigation",
                  name: "nav",
                  widget: "boolean",
                  required: false,
                  hint: "Toggle the arrow navigation on the slider"
                },
                {
                  label: "Enable Slider Dots",
                  name: "dots",
                  widget: "boolean",
                  required: false,
                  hint: "Toggle the slider dots"
                },
                {
                  label: "Mobile Items (XS)",
                  name: "xs_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Tablet Items (SM)",
                  name: "sm_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Small Desktop Items (MD)",
                  name: "md_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Desktop Items (LG)",
                  name: "lg_items",
                  widget: "number",
                  required: false
                },
                {
                  label: "Slider Items",
                  name: "items",
                  widget: "list",
                  required: false,
                  hint: "A list of items to display in the slider section",
                  fields: [
                    {
                      label: "Image",
                      name: "image",
                      widget: "image",
                      required: false
                    },
                    {
                      label: "Alt",
                      name: "alt",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Title",
                      name: "title",
                      widget: "string",
                      required: false
                    }
                  ]
                },
                {
                  label: "Slider Items Data Source",
                  name: "source",
                  widget: "string",
                  required: false,
                  hint: "A name of a Jekyll data file to use for the source of items"
                }
              ]
            }
          ]
        },
        {
          label: "Buttons",
          name: "Buttons",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "select",
              options: [
                "zoom",
                "grayscale",
                "fixed",
                "block_row",
                "text-center",
                "text-white"
              ],
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "Buttons Section Content",
              name: "buttons_content",
              widget: "list",
              hint: "Content for the buttons section",
              required: false,
              fields: [
                {
                  label: "Button Title",
                  name: "title",
                  widget: "string",
                  required: false
                },
                {
                  label: "Button URL",
                  name: "url",
                  widget: "string",
                  required: false
                },
                {
                  label: "Button Icon",
                  name: "icon",
                  required: false,
                  widget: "string",
                  hint: "Format is fa fa-icon-name - see fontawesome 4.7 icons"
                },
                {
                  label: "Button Style",
                  name: "style",
                  widget: "string",
                  required: false,
                  hint: "btn-primary, btn-secondary, btn-danger, btn-warning"
                }
              ]
            }
          ]
        },
        {
          label: "YouTube",
          name: "Youtube",
          widget: "object",
          summary: "{{fields.title}}",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "select",
              options: [
                "zoom",
                "grayscale",
                "fixed",
                "block_row",
                "text-center",
                "text-white"
              ],
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "YouTube URL",
              name: "url",
              widget: "string",
              hint: "URL of the youtube video",
              required: true
            },
            {
              label: "Title of Video",
              name: "title",
              widget: "string",
              hint: "Title of the video used for SEO/captions",
              required: true
            }
          ]
        },
        {
          label: "Members",
          name: "Members",
          widget: "object",
          fields: [
            {
              label: "Section Style",
              name: "style",
              widget: "select",
              options: [
                "zoom",
                "grayscale",
                "fixed",
                "block_row",
                "text-center",
                "text-white"
              ],
              multiple: true,
              hint: "Add a style to your section.",
              required: false
            },
            {
              label: "Members Section Content",
              name: "members_content",
              widget: "object",
              hint: "A list of members logos to display",
              required: false,
              fields: [
                {
                  label: "Member Item Width",
                  name: "item_width",
                  widget: "select",
                  required: false,
                  options: [
                    "3",
                    "4",
                    "6",
                    "5ths"
                  ]
                },
                {
                  label: "Members Jekyll Data File Source",
                  name: "source",
                  widget: "string",
                  required: false,
                  hint: "Advanced: Use a Jekyll Data file for the source of the members"
                },
                {
                  label: "Members",
                  widget: "list",
                  name: "items",
                  hint: "List of members",
                  required: false,
                  fields: [
                    {
                      label: "Member Name",
                      name: "name",
                      widget: "string",
                      required: false
                    },
                    {
                      label: "Member Image",
                      name: "image",
                      widget: "object",
                      required: false,
                      fields: [
                        {
                          label: "Image",
                          name: "path",
                          widget: "image",
                          required: false,
                          hint: "Full path to your image"
                        },
                        {
                          label: "Image Alt",
                          name: "alt",
                          widget: "string",
                          required: false,
                          hint: "Alt tag for your image"
                        }
                      ]
                    },
                    {
                      label: "Member URL",
                      name: "url",
                      widget: "string",
                      required: false,
                      hint: "URL for the member/company website"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "Custom Component",
          name: "Custom",
          summary: "{{fields.source}}",
          widget: "object",
          fields: [
            {
              label: "Source",
              name: "source",
              widget: "string",
              required: false,
              hint: "The name of the component"
            }
          ]
        }
]
export default sectionTypes