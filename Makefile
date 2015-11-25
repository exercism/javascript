# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|bin|node_modules|.idea)$$"
ASSIGNMENTS = $(shell find . -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f2 | sort | grep -Ev $(IGNOREDIRS))

# output and intermediate directories
TMPDIR ?= "/tmp"
INTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")
OUTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")

# language specific config (tweakable per language)
FILEEXT := "js"
EXAMPLE := "example.$(FILEEXT)"
TSTFILE := "$(ASSIGNMENT).spec.$(FILEEXT)"

all: test

node_modules: package.json
	@npm prune
	@npm install

test-assignment: node_modules
	@printf "\e[4mRunning tests for $(ASSIGNMENT) assignment\e[0m\n"
	@cp gulpfile.js $(ASSIGNMENT)
	@cp package.json $(ASSIGNMENT)
	@cp grains/big-integer.$(FILEEXT) $(OUTDIR)
	@sed 's/xit/it/g' $(ASSIGNMENT)/$(TSTFILE) > $(INTDIR)/$(TSTFILE)
	@cp $(ASSIGNMENT)/$(EXAMPLE) $(INTDIR)/$(ASSIGNMENT).$(FILEEXT)
	@gulp test --input $(INTDIR) --output $(OUTDIR)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done

