---
title: Linaro Connect
description:
  Linaro Connect is a series of events that brings together the Arm Ecosystem.
  This is the ONLY place where developers, maintainers of both hardware and software
  can collaborate and discuss common problems
permalink: /connect
slug: connect
keywords:
  - Linaro Connect
  - Events
  - open source
  - resources

layout: ../../layouts/Flow.astro
jumbotron:
  class: connect_header header_2022 h-auto
  title: Linaro Connect
  title-class: d-none
  include: connect_header.html
  image: Connect23_Background_1.jpg
flow:
  - row_component: Custom
    background_image: Connect23_Background_2.jpg
    source: ConnectNav
  - row_component: Container
    style: py-4 connect_landing_page
    sections:
      - section_component: Text
        style: text-left text-white
        text_content:
          text: |
            Linaro Connect Tech Days and Webinars are a new format for technical sessions. Tech Days are a one
            day event with multiple sessions (like a mini Connect) and Webinars are a single session event.

            See below for a list of sessions already marked in 2022. Click on the link for each session to find out
            more and register
      - section_component: Custom
        source: LatestEvents
      - section_component: Text
        style: text-center text-white
        text_content:
          text: |
            [Subscribe here](https://linaro.us3.list-manage.com/subscribe/post?u=14baaae786342d0d405ee59c2&id=7cf0551a9b) to receive Linaro Connect email updates.
---
