install: #install dependencies
	npm ci

brain-games: #run game
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish: #run publishing
	npm publish --dry-run

lint:
	npx eslint .
