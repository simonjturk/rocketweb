---
title: page header
headless: true
widget: page_heading
sort: 00

heading: "{{ replace .Name "-" " " | title }}" #Mandatory
subHeading: "{{ replace .Name "-" " " | title }} Sub Heading" #leave empty to ignore
paragraph: "{{ replace .Name "-" " " | title }}  Intro text " #leave empty to ignore

image: mobile_development.svg #replace with an svg in the ./images folder
---
