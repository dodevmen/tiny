#!/bin/bash

# go to YOUR_NEEDED_DIRECTORY .e.g "dist" or $INIT_CWD/dist
cd files

# copy each file/dir to user dir(~/)
for node in `ls`
do
  cp -R $node ~/$node
done