install: #install dependencies
	npm ci

brain-games: #run game
	node bin/brain-games.js

publish: #run publishing
	npm publish --dry-run

lint:
	npx eslint .