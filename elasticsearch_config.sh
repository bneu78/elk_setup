#!/bin/bash -v

sudo mkdir /mnt/data/elasticsearch

sudo mkdir /mnt/data/log

sudo chown -R elasticsearch:elasticsearch /mnt/data/elasticsearch/

sudo chown -R elasticsearch:elasticsearch /mnt/data/log

sudo chmod -R 750 /mnt/data/elasticsearch/

sudo sudo chmod -R 750 /mnt/data/log

sudo service elasticsearch stop

sleep 5

sudo service elasticsearch start
