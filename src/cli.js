import { book } from './booking.js';

const slot = process.argv[2];
console.log(book(slot) ? `booked ${slot}` : `could not book ${slot}`);
