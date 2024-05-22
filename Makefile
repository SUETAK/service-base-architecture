# Makefile
.PHONY: start-emulator

start-emulator:
	@echo "Starting Firestore Emulator..."
	gcloud emulators firestore start --host-port=127.0.0.1:8080
