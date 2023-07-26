#!/bin/bash

for file in ./md/*.md
do
  marp "$file" --output ./public/$(basename "$file" .md).html
done
