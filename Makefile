# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|docs|bin|node_modules|.idea)$$"
ASSIGNMENTS = $(shell find ./exercises -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f3 | sort | grep -Ev $(IGNOREDIRS))

# output directories
TMPDIR ?= "/tmp"
OUTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")

# language specific config (tweakable per language)
FILEEXT := "js"
EXAMPLE := "example.$(FILEEXT)"
TSTFILE := "$(subst _,-,$(ASSIGNMENT)).spec.$(FILEEXT)"

test-assignment:
	@echo "running tests for: $(ASSIGNMENT)"
	@cp big-integer.$(FILEEXT) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(OUTDIR)/$(subst _,-,$(ASSIGNMENT)).$(FILEEXT)
	#@sed -i.original 's/\bxit\b/it/g' $(OUTDIR)/*spec.$(FILEEXT)
	@sed 's/xit/it/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > $(OUTDIR)/$(TSTFILE)
	@jasmine --random=true $(OUTDIR)/$(TSTFILE)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done
