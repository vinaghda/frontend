# Project Title

Aplikasi frontend menggunakan react JS di Openshift 3.11

## Getting Started

Sebelumnya harus sudah ada aplikasi backend yang running dan sudah memiliki route yang bisa diakses API nya
Aplikasi ini menggunakan backend spring boot

### Prerequisite

Environment variable:
REACT_APP_BACKEND_API_URL = http://employees-edb.appsvc-tst.timetoit.id/api/v1

## Build sourcecode to image

oc new-app registry.redhat.io/rhscl/nodejs-10-rhel7~http://172.105.119.247/aria/test-build-node-js.git --context-dir=frontend-react --name=employees-frontend -e REACT_APP_BACKEND_API_URL=http://employees-edb.appsvc-tst.timetoit.id/api/v1
