#!/bin/env bash
curl http://66.228.42.143:1337/shipment_request -vX POST -d @shipment.json --header "Content-Type: application/json"
