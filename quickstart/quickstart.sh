#!/bin/bash

echo "installing ardublockly..."
ROOT_DIR="ardublockly"

unzip-from-link() {
  local download_link=$1; shift || return 1
  local extraction_directory=$2; shift || return 1

  curl -L "$download_link" --output temp.zip &> /dev/null
  unzip -qq -d "$extraction_directory" temp.zip
  rm temp.zip
}

# remove already existing version
if [ -d "$root" ]; then rm -Rf $root; fi

# download latest release
echo "downloading ardublockly..."
unzip-from-link https://github.com/IAD-ZHDK/ardublockly/archive/master.zip "$PWD/"
mv "ardublockly-master" "$ROOT_DIR"

pushd "$ROOT_DIR"

# setup closure
echo "downloading closure library..."
rm -rf "closure-library"
unzip-from-link https://github.com/google/closure-library/archive/refs/tags/v20161024.zip "$PWD"
mv "closure-library-20161024" "closure-library"

# start
echo "starting..."
python start.py

popd