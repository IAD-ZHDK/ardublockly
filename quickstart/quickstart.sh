#!/bin/bash

echo "installing ardublockly..."
ROOT_DIR="ardublockly"

unzip-from-link() {
 local download_link=$1; shift || return 1
 local temporary_dir

 temporary_dir=$(mktemp -d) \
 && curl -LO "${download_link:-}" \
 && unzip -d "$temporary_dir" \*.zip \
 && rm -rf \*.zip \
 && mv "$temporary_dir"/* ${1:-"$HOME/Downloads"} \
 && rm -rf $temporary_dir
}

# remove already existing version
if [ -d "$root" ]; then rm -Rf $root; fi

# download latest release
unzip-from-link https://github.com/IAD-ZHDK/ardublockly/archive/master.zip "$PWD/$ROOT_DIR"
rm master.zip

pushd "$ROOT_DIR"
python start.py
popd