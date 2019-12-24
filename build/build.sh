#!/usr/bin/env bash
REL_NAME=niwho_web_person
export GO111MODULE=on

mkdir -p output/bin output/conf
cp build/script/bootstrap.sh build/script/settings.py output
chmod +x output/bootstrap.sh
cp -rf config/conf/* output/conf/

GIT_SHA=`git rev-parse --short HEAD || echo "GitNotFound"`
DATE=`date '+%Y%m%d%H%M%S'`
DATE=`date`
GOVERSION=`go version`
VERSION=${GIT_SHA}
val=$(go version)
ver=$(echo $val | awk -F ' ' '{print $3}' | awk -F '.' '{print $2}')
if [ $ver -gt 4 ]; then
    LINK_OPERATOR="="
else
    LINK_OPERATOR=" "
fi
go build -mod vendor -ldflags "-w -X 'main.COMMITVER${LINK_OPERATOR}${VERSION}' -X 'main.GOVERSION${LINK_OPERATOR}${GOVERSION}' -X 'main.DATE=${DATE}'" -o output/bin/$REL_NAME

