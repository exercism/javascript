# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|docs|bin|node_modules|.idea)$$"
ASSIGNMENTS = $(shell find ./exercises -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f3 | sort | grep -Ev $(IGNOREDIRS))

# output directories
OUTDIR ?= "exercises/$(ASSIGNMENT)/tmp"

# language specific config (tweakable per language)
FILEEXT := "js"
EXAMPLE := "example.$(FILEEXT)"
TSTFILE := "$(subst _,-,$(ASSIGNMENT)).spec.$(FILEEXT)"

# package.json MD5 hash
SOURCE_PKG_MD5 ?= "`./bin/md5-hash ./package.json`"
PKG_FILES= $(shell find ./exercises/*/* -maxdepth 1 -name package.json)

test-package-files:
	@for pkg in $(PKG_FILES); do \
		! ./bin/md5-hash $$pkg | grep -qv $(SOURCE_PKG_MD5) || { echo "$$pkg does not match main package.json"; exit 1; }; \
	done

test-assignment:
	@cp package.json exercises/$(ASSIGNMENT)
	@echo "running tests for: $(ASSIGNMENT)"
	@mkdir -p $(OUTDIR)
	@cp exercises/grains/lib/big-integer.$(FILEEXT) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(subst _,-,$(ASSIGNMENT)).$(FILEEXT)
	@sed 's/xit/it/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > $(OUTDIR)/temp.$(TSTFILE)
	@node_modules/.bin/jest $(OUTDIR)/temp.*.spec.js
	@rm $(OUTDIR)/*
	@rmdir $(OUTDIR)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done
