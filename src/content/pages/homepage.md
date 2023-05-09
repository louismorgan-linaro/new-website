---
title: Accelerating deployment of Arm-based solutions
description: The collaboration platform for the Arm partnership. Where members
  can collaborate on Arm Open Source Software and solutions are discussed &
  worked upon.
permalink: /homepage
slug: homepage
keywords:
  - arm software
  - engineering
  - open source
  - linaro
  - linux
  - software projects
layout: ../../layouts/Flow.astro
flow:
  - row_component: Custom
    source: HomeBanner
  - row_component: Custom
    source: HomeHeader
  - row_component: Custom
    source: HomeQuickLinks
  - row_component: Container
    style: bg-light
    sections:
      - section_component: Title
        style: text-center
        title_content:
          style: font-weight-bold
          text: Linaro Members
          size: h2
      - section_component: Custom
        source: HomeMembers
      - section_component: Custom
        source: HomeTestimonial
  - row_component: Container
    style: bg-white py-0 overflow-hidden
    absolute_image:
      style: rocket_svg px-0
      image: RocketGraphic.svg
      image_alt: Linaro Developer Services rocket launching upwards
    sections:
      - section_component: TwoColumn
        breakpoint: md
        left_column:
          custom_size: 6
          style: px-3 py-5 prose-p:text-lg md:prose-p:text-2xl
          text: |
            ## Linaro Developer Services

            If you want to leverage Linaro’s Arm and open source software expertise on a specific project, then working with Linaro Developer Services is the right option for you.

            From initial design through to development, implementation, support and training, Linaro Developer Services help you leverage open source on Arm to ensure fast time to market, exceptional quality and security, and cost effective long term maintenance..
          buttons:
            - title: Find out more about Linaro Developer Services
              url: /services/
              class: btn-primary
  - row_component: Container
    style: bg-secondary text-white
    sections:
      - section_component: Title
        style: text-center
        title_content:
          style: font-weight-bold
          text: Experts in Open Source Software on Arm
          size: h2
      - section_component: Custom
        source: HomeStats
  - row_component: Custom
    source: HomeMaintainers
  - row_component: Container
    style: bg-secondary py-0 mb-5 text-white
    sections:
      - section_component: Title
        title_content:
          style: font-weight-bold
          text: Projects Linaro and its member companies collaborate on
          size: h2
      - section_component: Text
        style: text-left
        text_content:
          text: This is a snapshot of some of the projects Linaro works on
      - section_component: Custom
        source: HomeProjects
---
