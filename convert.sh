#!/bin/bash

for file in ./md/*.md
do
  marp "$file" --output ./$(basename "$file" .md).html
done
