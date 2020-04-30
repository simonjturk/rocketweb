---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

menu:
  main:
    title: "{{ replace .Name "-" " " | title }}"
    weight: 20
---