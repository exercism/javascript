#!/usr/bin/env bash

set -euo pipefail

corepack enable pnpm
corepack pnpm lint
