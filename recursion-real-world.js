/**
 * Real-World Recursion
 * --------------------
 * 1) API pagination with continuation tokens (recursive fetch)
 * 2) Parsing nested objects / trees (directory, DOM, nested JSON)
 * 3) Generic helpers (walkers/search)
 */

// 1) API Pagination (mocked example)
// In real apps, replace mockFetchPage with fetch(url) logic, and handle errors.
const mockFetchPage = async (cursor = null) => {
  // simulate 3 pages of data
  const pages = {
    null: { items: [1, 2, 3], next: "A" },
    A:    { items: [4, 5, 6], next: "B" },
    B:    { items: [7],      next: null }
  };
  await new Promise(r => setTimeout(r, 50)); // simulate latency
  return pages[cursor];
};

const fetchAllPages = async (cursor = null, acc = []) => {
  const data = await mockFetchPage(cursor);
  const merged = acc.concat(data.items);
  if (data.next) {
    // recursive call with next cursor
    return fetchAllPages(data.next, merged);
  }
  return merged; // base case: no next page
};

// (async () => {
//   const all = await fetchAllPages();
//   console.log("All items:", all); // [1,2,3,4,5,6,7]
// })();

/**
 * Notes:
 * - Recursion mirrors the "follow next token" mental model.
 * - Ensure you have a base case (no next token) to avoid infinite recursion.
 * - Consider tail recursion limits — iterative loops may be safer for huge page counts.
 */

// 2) Parsing nested objects (e.g., directory/JSON/DOM-like data)
const artistsByGenre = {
  jazz: ["Miles Davis", "Glenn Miller"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"]
    }
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Stapleton"]
  }
};

// Collect all artist names from a nested object or arrays
const getArtistNames = (data, acc = []) => {
  if (Array.isArray(data)) {
    // base case: array of names
    for (const name of data) acc.push(name);
    return acc;
  }
  // recursive case: object with nested values
  Object.keys(data).forEach(key => {
    getArtistNames(data[key], acc);
  });
  return acc;
};

// console.log(getArtistNames(artistsByGenre));

/**
 * Generic object walker: apply a callback to every primitive value
 * Useful for building parsers, search, transformations.
 */
const walk = (node, visit) => {
  if (node !== Object(node)) { // primitive
    visit(node);
    return;
  }
  if (Array.isArray(node)) {
    node.forEach(child => walk(child, visit));
    return;
  }
  Object.keys(node).forEach(k => walk(node[k], visit));
};

// Example:
// walk(artistsByGenre, v => { if (typeof v === "string") console.log("Name:", v); });

/**
 * Tips:
 * - Keep base case(s) crystal clear.
 * - Pass accumulators (acc arrays, maps) to avoid rebuilding arrays every call.
 * - For extremely deep data, consider iterative stacks (manual stack) to avoid call stack limits.
 */
