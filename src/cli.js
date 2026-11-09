// Usage: node src/cli.js page <name>
const { pages, layout } = require('./site.js');
const [command, name] = process.argv.slice(2);
if (command !== 'page' || !Object.hasOwn(pages, name)) {
  process.stderr.write('Unknown page\n');
  process.exit(1);
}
process.stdout.write(layout(pages[name]));
