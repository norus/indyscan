#!/bin/bash
PUSH_REPO_OWNER="$1" # don't specify this unless you want to push images to some docker registry

./build-tool.sh "indyscan" "./app/Dockerfile" "$PUSH_REPO_OWNER"