import assert from 'node:assert/strict';
import fs from 'node:fs';
import {services} from '../src/data/services.ts';
import {activities} from '../src/data/activities.ts';
import {insights} from '../src/data/insights.ts';
import {validateContact,contactDraft} from '../src/lib/contact.ts';
for(const records of [services,activities,insights]){assert.equal(new Set(records.map(r=>r.slug)).size,records.length);for(const record of records){assert.match(record.source,/^https:\/\/www\.spil\.co\.id\//);assert.ok(fs.existsSync('public/assets/spil/'+record.image));}}
assert.equal(services.find(s=>s.slug==='not-real'),undefined);
assert.equal(activities.find(s=>s.slug==='not-real'),undefined);
const valid={name:'Pelanggan SPIL',email:'pelanggan@example.com',phone:'081234567890',service:'Port to Port',message:'Mohon informasi pengiriman kontainer.'};
assert.deepEqual(validateContact(valid),{});
assert.equal(Object.keys(validateContact({name:'',email:'bad',phone:'x',service:'',message:''})).length,5);
assert.ok(validateContact({...valid,message:'x'.repeat(2001)}).message);
const draft=new URL(contactDraft(valid));assert.equal(draft.origin+draft.pathname,'https://wa.me/62811333799');assert.ok(draft.searchParams.get('text')?.includes(valid.message));
assert.equal(activities.slice(6,12).length,1);assert.equal(activities.filter(a=>a.date.startsWith('2026')).length,3);
console.log('PASS: source integrity, assets, slugs, contact validation, WhatsApp draft, archive boundaries');
