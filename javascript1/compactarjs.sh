#!/bin/bash

jsmin < general.js > general.min.js

cat \
jquery.core.js \
jquery.ui.js \
jquery.cookie.js \
jquery.cycle.js \
jquery.form.js \
jquery.media.js \
general.min.js > varios.js 


