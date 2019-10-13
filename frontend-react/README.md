# Project Title

Aplikasi frontend menggunakan react JS di Openshift 3.11

## Desription

Sebelumnya harus sudah ada aplikasi backend yang running dan sudah memiliki route yang bisa diakses API nya
Aplikasi ini menggunakan backend spring boot

## Prerequisite

Environment variable:
REACT_APP_BACKEND_API_URL = http://employees-edb.appsvc-tst.timetoit.id/api/v1

## Build sourcecode to image

oc new-app registry.redhat.io/redhat-openjdk-18/openjdk18-openshift~https://github.com/vinaghda/frontend.git --context-dir=frontend-react --name=employees-frontend -e REACT_APP_BACKEND_API_URL=http://employees-edb.appsvc-tst.timetoit.id/api/v1 
