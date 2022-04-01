install: #install dependencies
	npm ci

brain-games: #run game
	node bin/brain-games.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/games/brain-calc.js

publish: #run publishing
	npm publish --dry-run

lint:
	npx eslint .
