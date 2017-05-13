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

copy-assignment:
	@cp package.json exercises/$(ASSIGNMENT)
	@mkdir -p $(OUTDIR)
	@cp exercises/grains/lib/big-integer.$(FILEEXT) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(subst _,-,$(ASSIGNMENT)).$(FILEEXT)
	@sed 's/xit/it/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > $(OUTDIR)/temp.$(TSTFILE)

# To be run as: make test-assignment ASSIGNMENT=hello-world
test-assignment:
	$(MAKE) -s copy-assignment
	@node_modules/.bin/jest $(OUTDIR)
	@rm -rf $(OUTDIR)

test:
	@echo "Preparing tests..."
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s copy-assignment || exit 1; done
	@node_modules/.bin/jest $(OUTDIR)
	@rm -rf $(OUTDIR)
