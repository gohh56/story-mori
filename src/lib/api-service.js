export const getStories = async function() {
  const resp = await fetch("/api/stories");
  return resp.json();
}