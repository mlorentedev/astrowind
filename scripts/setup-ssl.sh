#!/bin/bash

set -e

# Source utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/utils.sh"

# Check dependencies
check_dependencies "openssl" "docker" "docker-compose"

log_info "Starting self-signed SSL certificate setup for local production environment"

# Create necessary directories
log_info "Creating certificate directories..."
mkdir -p ./certbot/conf/live/mlorente.dev/
mkdir -p ./certbot/conf/live/staging.mlorente.dev/

# Generate self-signed certificates for mlorente.dev
log_info "Generating certificates for mlorente.dev..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ./certbot/conf/live/mlorente.dev/privkey.pem \
  -out ./certbot/conf/live/mlorente.dev/fullchain.pem \
  -subj "/CN=mlorente.dev"

# Copy as chain.pem for mlorente.dev
log_info "Creating chain.pem for mlorente.dev..."
cp -f ./certbot/conf/live/mlorente.dev/fullchain.pem ./certbot/conf/live/mlorente.dev/chain.pem

# Generate self-signed certificates for staging.mlorente.dev
log_info "Generating certificates for staging.mlorente.dev..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ./certbot/conf/live/staging.mlorente.dev/privkey.pem \
  -out ./certbot/conf/live/staging.mlorente.dev/fullchain.pem \
  -subj "/CN=staging.mlorente.dev"

# Copy as chain.pem for staging.mlorente.dev
log_info "Creating chain.pem for staging.mlorente.dev..."
cp -f ./certbot/conf/live/staging.mlorente.dev/fullchain.pem ./certbot/conf/live/staging.mlorente.dev/chain.pem

# Set permissions
log_info "Setting permissions for certificates..."
chmod -R 755 ./certbot/conf

# List all certificate files to verify
log_info "Verifying all certificate files..."
if [ ! -f "./certbot/conf/live/mlorente.dev/fullchain.pem" ] || \
   [ ! -f "./certbot/conf/live/mlorente.dev/privkey.pem" ] || \
   [ ! -f "./certbot/conf/live/mlorente.dev/chain.pem" ] || \
   [ ! -f "./certbot/conf/live/staging.mlorente.dev/fullchain.pem" ] || \
   [ ! -f "./certbot/conf/live/staging.mlorente.dev/privkey.pem" ] || \
   [ ! -f "./certbot/conf/live/staging.mlorente.dev/chain.pem" ]; then
  exit_error "Some certificate files are missing. Please check the output."
else
  log_success "All certificate files created successfully"
fi
