#!/usr/bin/env sh
set -ex
rm -rf build/dist
yarn build
neocities-switch bunwalker
neocities push build/dist/
