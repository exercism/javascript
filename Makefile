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

# babel.config.js MD5 hash
SOURCE_BABEL_MD5 ?= "`./bin/md5-hash ./babel.config.js`"
BABEL_CONFIG_FILES= $(shell find ./exercises/*/* -maxdepth 1 -name babel.config.js)

# .eslintrc MD5 hash
SOURCE_ESLINT_MD5 ?= "`./bin/md5-hash ./.eslintrc`"
ESLINTRC_FILES= $(shell find ./exercises/*/* -maxdepth 1 -name .eslintrc)

sync:
	@cp package.json exercises/$(ASSIGNMENT)
	@cp babel.config.js exercises/$(ASSIGNMENT)
	@cp .eslintrc exercises/$(ASSIGNMENT)

test-prepare:
	@mkdir -p $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(subst _,-,$(ASSIGNMENT)).$(FILEEXT)
	@sed 's/xtest/test/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > tmp_exercises/$(ASSIGNMENT)/$(TSTFILE)
	@cp package.json $(OUTDIR)
	@cp babel.config.js $(OUTDIR)
	@cp .eslintrc $(OUTDIR)
	if test -d exercises/$(ASSIGNMENT)/lib; \
	then cp -R exercises/$(ASSIGNMENT)/lib $(OUTDIR); \
	fi

test-eslint:
	@echo "Checking eslint..."
	@node_modules/.bin/eslint $(OUTDIR);

test-specs:
	@echo "Running exercise tests..."
	@node_modules/.bin/jest --bail $(OUTDIR);

test-cleanup:
	rm -rf $(OUTDIR);

test-travis:
	@echo "Checking that exercise package.json files match main package.json ..."
	@for pkg in $(PKG_FILES); do \
		! ./bin/md5-hash $$pkg | grep -qv $(SOURCE_PKG_MD5) || { echo "$$pkg does not match main package.json.  Please run 'make test' locally and commit the changes."; exit 1; }; \
	done

	@echo "Checking that exercise babel.config.js files match main babel.config.json ..."
	@for bconfig in $(BABEL_CONFIG_FILES); do \
		! ./bin/md5-hash $$bconfig | grep -qv $(SOURCE_BABEL_MD5) || { echo "$$bconfig does not match main babel.config.js.  Please run 'make test' locally and commit the changes."; exit 1; }; \
	done

	@echo "Checking that exercise .eslintrc files match main .eslintrc ..."
	@for eslintrc in $(ESLINTRC_FILES); do \
		! ./bin/md5-hash eslintrc | grep -qv $(SOURCE_ESLINT_MD5) || { echo "$$eslintrc does not match main .eslintrc.  Please run 'make test' locally and commit the changes."; exit 1; }; \
	done
	@for assignment in $(ASSIGNMENTS); do \
		ASSIGNMENT=$$assignment $(MAKE) -s test-prepare || exit 1; \
	done
	$(MAKE) -s test-eslint
	$(MAKE) -s test-specs
	$(MAKE) -s test-cleanup

test:
	@for assignment in $(ASSIGNMENTS); do \
		ASSIGNMENT=$$assignment $(MAKE) -s sync || exit 1; \
		ASSIGNMENT=$$assignment $(MAKE) -s test-prepare || exit 1; \
	done
	$(MAKE) -s test-eslint
	$(MAKE) -s test-specs
	$(MAKE) -s test-cleanup

# To be run as: make test-assignment ASSIGNMENT=hello-world
test-assignment:
	$(MAKE) -s test-prepare
	$(MAKE) -s test-eslint
	$(MAKE) -s test-specs
	$(MAKE) -s test-cleanup
