PY?=python3
PELICAN?=pelican
PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/pelicanconf.py


DEBUG ?= 0
ifeq ($(DEBUG), 1)
	PELICANOPTS += -D
endif

RELATIVE ?= 0
ifeq ($(RELATIVE), 1)
	PELICANOPTS += --relative-urls
endif

SERVER ?= "0.0.0.0"

PORT ?= 0
ifneq ($(PORT), 0)
	PELICANOPTS += -p $(PORT)
endif


help:
	@echo 'Makefile for this site                                                    '
	@echo '                                                                          '
	@echo 'Usage:                                                                    '
	@echo '   make build                          (re)generate the web site          '
	@echo '   make clean                          remove the generated files         '
	@echo '   make devserver [PORT=8000]          serve and regenerate together      '
	@echo '   make deploy                         deploy to github                   '
	@echo '                                                                          '

build:
	"$(PELICAN)" "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS)

clean:
	rm -rf output
	mkdir output
	rm -rf __pycache__
	rsync -avzr --exclude src --delete output/ ../
	rmdir output

devserver:
	"$(PELICAN)" -lr "$(INPUTDIR)" -o "$(OUTPUTDIR)" -s "$(CONFFILE)" $(PELICANOPTS)

devserver-global:
	$(PELICAN) -lr $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS) -b 0.0.0.0

deploy:
	rm -rf __pycache__
	rsync -avzr --exclude src --delete output/ ../
	rm -rf output

.PHONY: build help clean devserver deploy
