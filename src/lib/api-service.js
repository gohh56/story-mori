const stories = [
  { id: 1, title: "Story 1" },
  { id: 2, title: "Story 2" },
  { id: 3, title: "Story 3" },
  { id: 4, title: "Story 4" },
  { id: 5, title: "Story 5" },
  { id: 6, title: "Story 6" }
];

export const getStories = function() {
  // it should get stories from server
  return stories;
}