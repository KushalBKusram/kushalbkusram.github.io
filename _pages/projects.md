---
layout: page
title: projects
permalink: /projects/
description: Open-source repos that have their own project site.
nav: true
nav_order: 3
---
<!-- _pages/projects.md -->
<div class="repos">
{%- for repo in site.data.repos %}
  <div class="repo mb-4">
    <h3><a href="{{ repo.url }}">{{ repo.title }}</a></h3>
    <p>{{ repo.description }}</p>
  </div>
{%- endfor %}
</div>
