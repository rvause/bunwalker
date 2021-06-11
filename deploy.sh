#!/usr/bin/env sh
rm -rf build/dist
yarn build
neocities push build/dist/
