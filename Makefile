install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/calc-game.js

brain-even:
	node bin/even-game.js 

brain-gcd:
	node bin/gcd-game.js

brain-prime:
	node bin/prime-game.js

brain-progression:
	node bin/progression-game.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
