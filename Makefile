# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|bin|node_modules)$$"
ASSIGNMENTS = $(shell find . -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f2 | sort | grep -Ev $(IGNOREDIRS))

# output directories
TMPDIR ?= "/tmp"
OUTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")

# language specific config (tweakable per language)
FILEEXT := "js"
EXAMPLE := "example.$(FILEEXT)"
TSTFILE := "$(ASSIGNMENT)_test.spec.$(FILEEXT)"

all: test

test-assignment:
	@printf "\e[4mRunning tests for $(ASSIGNMENT) assignment\e[0m\n"
	@sed 's/xit/it/g' $(ASSIGNMENT)/$(TSTFILE) > $(OUTDIR)/$(TSTFILE)
	@./node_modules/.bin/traceur --experimental --modules=commonjs --symbols=false --script $(ASSIGNMENT)/$(EXAMPLE) --out $(ASSIGNMENT)/$(ASSIGNMENT).$(FILEEXT)
	@mv $(ASSIGNMENT)/$(ASSIGNMENT).$(FILEEXT) $(OUTDIR)/$(ASSIGNMENT).$(FILEEXT)
	@cp ./node_modules/traceur/bin/traceur-runtime.js $(OUTDIR)/traceur-runtime.js
	@./node_modules/.bin/jasmine-node --captureExceptions $(OUTDIR)/$(TSTFILE)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done

