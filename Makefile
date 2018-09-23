.DEFAULT_GOAL := test

# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|docs|bin|node_modules|.idea)$$"
ASSIGNMENTS = $(shell find ./exercises -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f3 | sort | grep -Ev $(IGNOREDIRS))

# output directories
OUTDIR ?= "tmp_exercises/$(ASSIGNMENT)"

# language specific config (tweakable per language)
FILEEXT := "js"
EXAMPLE := "example.$(FILEEXT)"
TSTFILE := "$(subst _,-,$(ASSIGNMENT)).spec.$(FILEEXT)"

# package.json MD5 hash
SOURCE_PKG_MD5 ?= "`./bin/md5-hash ./package.json`"
PKG_FILES= $(shell find ./exercises/*/* -maxdepth 1 -name package.json)

copy-assignment:
	@cp package.json exercises/$(ASSIGNMENT)
	@mkdir -p $(OUTDIR)
	@cp exercises/grains/lib/big-integer.$(FILEEXT) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(subst _,-,$(ASSIGNMENT)).$(FILEEXT)
	@sed 's/xtest/test/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > tmp_exercises/$(ASSIGNMENT)/$(TSTFILE)

# To be run as: make test-assignment ASSIGNMENT=hello-world
test-assignment:
	$(MAKE) -s copy-assignment
	@node_modules/.bin/jest $(OUTDIR)
	@rm -rf $(OUTDIR)

test-travis:
	@echo "Checking that exercise package.json files match main package.json..."
	@for pkg in $(PKG_FILES); do \
  		! ./bin/md5-hash $$pkg | grep -qv $(SOURCE_PKG_MD5) || { echo "$$pkg does not match main package.json.  Please run 'make test' locally and commit the results."; exit 1; }; \
  	done
	$(MAKE) -s test

test:
	@echo "Preparing tests..."
	@for assignment in $(ASSIGNMENTS); do \
		ASSIGNMENT=$$assignment $(MAKE) -s copy-assignment || exit 1; \
	done
	@echo "Checking eslint..."
	@node_modules/.bin/eslint $(OUTDIR);
	@echo "Running tests..."
	@node_modules/.bin/jest --bail $(OUTDIR);
	rm -rf $(OUTDIR);
