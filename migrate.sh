#!/bin/bash

# Check if a file argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <file_path>"
    exit 1
fi

file_path="$1"

# Check if file exists
if [ ! -f "$file_path" ]; then
    echo "Error: File '$file_path' does not exist"
    exit 1
fi

# Perform the replacements in-place
# Using a temporary file for safety and better sed compatibility
sed -E \
    -e 's/className/class/g' \
    -e 's/Link/a/g' \
    -e 's/import \{ icons \} from "@\/lib\/icons"/import { icons } from "@\/lib\/icons"\nimport { Icon } from "astro-icon\/components"/g' \
    -e 's/<Icon\.([A-Za-z0-9]+)([^>]*)>/<Icon name={icons.\1}\2>/g' \
    -e 's/import Image from "next\/image"/import Image from "astro\/components\/Image.astro"/g' \
    -e 's/{children}/<slot \/>/g' \
    "$file_path" > "$file_path.tmp" && mv "$file_path.tmp" "$file_path"


# If file ends with .tsx, rename it to .astro
if [[ "$file_path" == *.tsx ]]; then
    mv "$file_path" "${file_path%.tsx}.astro"
fi

echo "Replacements completed successfully"
