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

test-assignment:
	@cp package.json exercises/$(ASSIGNMENT)
	@echo "running tests for: $(ASSIGNMENT)"
	@mkdir -p $(OUTDIR)
	@cp exercises/grains/lib/big-integer.$(FILEEXT) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(subst _,-,$(ASSIGNMENT)).$(FILEEXT)
	@sed 's/xit/it/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > $(OUTDIR)/temp.$(TSTFILE)
	@jest $(OUTDIR)/temp.*.spec.js
	@rm $(OUTDIR)/*
	@rmdir $(OUTDIR)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done
