import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runBuilder } from 'stood-harness';

// The buyer's frozen test runs the booking program as a separate process (Stood's judge, ADR-0026 amendment).
test('a slot can be booked', () => {
  const run = runBuilder(['node', 'src/cli.js', '10:00']);
  assert.equal(run.status, 0);
  assert.equal(run.stdout, 'booked 10:00\n');
});
