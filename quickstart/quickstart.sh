#!/bin/bash

echo "installing ardublockly..."
set root="ardublockly"

# remove already existing version
if [ -d "$root" ]; then rm -Rf $root; fi

# download latest release
curl