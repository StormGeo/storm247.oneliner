# Storm247.oneliner

![Screenshot of oneliner](images/screenshot.png)

## Install

### Bower
```bower install TODO```

### NPM
```npm install TODO```

### Manual

Copy `dist/storm247.oneliner.min.js`

## Usage

There are two basic ways to init script. 

### Declarative using script tag
```html
<script data-place-id="12345" data-public-key="<publicKey>" src="../src/storm247.oneliner.js" async type="text/javascript"></script>
```

### Invoking from the JS script.
```html
	<script type="text/javascript" src="../src/storm247.oneliner.js"></script>
	<div id="widget"></div>
	<script>
	// This call have to happen after div and <script> tag.
	storm247oneliner({
		element: 'widget',
		placeId: 12345,
		publicKey: '<publicKey>'
	});
	</script>
```
For a complete demo and more examples see examples folder.

## Options

### `publicKey` (required)

### `placeId` (required)
Unique id of the place in Storm247 place DB. Can be easily obtained from the url.

### `element` (required)
Can be either string or reference to node. String is the id of the element without #.

## Development

Run local server with `python -m SimpleHTTPServer`. 

### Build 

Minify script indo dist folder.

```gulp build```

### Create .config

```json
{
	"publicKey": "<public key used in development>"
}
```

### Watch

All examples are copied into dev folder with replaced <publicKey>

```
gulp dev
```