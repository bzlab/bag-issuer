/**
 * npx ts-node
 */
import { resolveDid } from './agent.js';
async function main() {
  resolveDid('');
}
main().catch(console.log);
