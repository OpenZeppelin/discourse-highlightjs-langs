#!/usr/bin/env bash

set -euo pipefail

mkdir -p common

head_tag() {
  echo '<script type="text/discourse-plugin" version="0.8.27">'
  esbuild --bundle --minify src/index.js
  echo '</script>'
}

head_tag > common/head_tag.html
