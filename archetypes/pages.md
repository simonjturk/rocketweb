---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
menu:
  main:
    parent: 'pages'
    weight: 1
    title: "{{ replace .Name "-" " " | title }}"

hero:
    heading : "{{ replace .Name "-" " " | title }}"
    sub_heading : "Sub heading"
    paragraph : "Cool paragraph"

    button:
        text : "Click me"
        link : "https : //google.com"
---
