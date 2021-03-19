#!/bin/bash
python -m nuitka \
	--standalone \
	--follow-imports \
	--output-dir=build \
	start.py