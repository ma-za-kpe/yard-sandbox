import assert from 'node:assert/strict';
import { test } from 'node:test';
import { book } from '../src/booking.js';
test('a slot can be booked', () => assert.equal(book('10:00'), true));